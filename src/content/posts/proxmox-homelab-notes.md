---
title: 'Six months of Proxmox in a closet'
description: 'What actually broke on my homelab host, the three settings I wish I had changed on day one, and the backup job that saved me.'
pubDate: 2026-07-02
updatedDate: 2026-08-05
tags: ['homelab', 'linux']
---

The homelab is an old office desktop with 64 GB of RAM and two spinning disks, sitting in a closet
with the door cracked open. It runs Proxmox, eleven containers, and one Windows VM I keep meaning to
delete. Six months in, here is everything that went wrong and what I changed.

## Turn off the enterprise repo first

Fresh installs point at a repository you cannot reach without a subscription, so the first
`apt update` fails and half the guides on the internet tell you to ignore it. Do not ignore it —
you will not get security updates. Point it at the no-subscription repo instead:

```bash
# disable the enterprise repo
sed -i 's/^deb/#deb/' /etc/apt/sources.list.d/pve-enterprise.list

# add the community one
echo "deb http://download.proxmox.com/debian/pve bookworm pve-no-subscription" \
  > /etc/apt/sources.list.d/pve-no-subscription.list

apt update && apt full-upgrade -y
```

## The three settings I wish I had changed on day one

### 1. ZFS ARC size

ZFS will happily take half your RAM for cache and then fight your VMs for it. On a 64 GB box I cap
it at 8 GB, which is plenty for this workload:

```bash
echo "options zfs zfs_arc_max=8589934592" > /etc/modprobe.d/zfs.conf
update-initramfs -u -k all
reboot
```

### 2. Backups that leave the machine

Proxmox's built-in backup job is genuinely good, and it is worthless if the backups live on the same
disks as the thing being backed up. Mine run nightly to a NAS share:

```
Storage:   nas-backups
Schedule:  02:30 daily
Mode:      snapshot
Retention: keep-daily 7, keep-weekly 4, keep-monthly 3
Notify:    on failure only
```

That job is the reason a botched container upgrade in March cost me twenty minutes instead of an
evening.

### 3. Containers over VMs, by default

An LXC container for a service that just needs Debian and a port uses a tenth of the memory of a
full VM and boots in under a second. The Windows VM is the only real VM left on the host, and it
exists purely because one piece of software refuses to run anywhere else.

## What actually broke

- **The closet.** Ambient hit 34 °C in July and the CPU thermal-throttled during a backup window.
  Moving the backup to 02:30 and propping the door open fixed it. A fan would fix it better.
- **A full boot disk.** Container logs filled `/var/log` because nothing was rotating them. Now
  `journald` is capped at 200 MB and I have an alert on disk usage above 80%.
- **My own DNS.** I ran Pi-hole as the only DNS server on the network, then rebooted the host during
  a family movie night. Two DNS servers now, on different machines.

## Would I do it again

Yes, but on a machine with an SSD for the boot pool. Everything slow about this host traces back to
two 7,200 RPM disks doing work they were never meant to do. The rest of it has been genuinely
low-maintenance — closer to an appliance than a project.
