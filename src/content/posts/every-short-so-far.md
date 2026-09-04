---
title: 'Every short I have posted so far'
description: 'All 17 shorts in one place — the home lab stuff, the builds, the networking series, and the random ones in between.'
pubDate: 2026-09-04
tags: ['shorts', 'homelab', 'builds', 'networking']
featured: true
---

So I have a decent pile of shorts up now, and they are kind of scattered. Figured I would put
everything in one place. Here is all of it, roughly grouped by what it actually is.

## The home lab stuff

**Look what I brought home.** You won't believe what I brought home from work. Not one but two 24
bay drive bays. Each one of these can fit 24 three and a half inch hard drives. One of the screws
was stripped getting it open, so that was a little bit annoying. Inside you can fit standard ATX
motherboards along with standard expansion cards, and it came with a RAID controller to manage all
of the hard drives. The second one was empty, like I thought. Those look like standard 120 mil fans
too, so I might be able to fit a radiator.

**My free storage server.** Same idea, more detail. On eBay one of these costs about $500. This one
came with the RAID controller, and a full ATX motherboard would fit — like the Z690 board I have
sitting around. The other one looks like it will fit a 360 mm liquid cooler. I am thinking about
using one to run Plex and Jellyfin for a dedicated media server, and then maybe the second one for
a NAS.

**My free network switch.** My college gave me this switch out of a trash pile. I don't know if it
was brand new, I bet it was very expensive, but now you can find it on eBay for under $100. Plugged
in the console cable to see what was even on it. Good news — no password, so I could just type
enable and get into admin mode. Looked like there was data on it, but the VLANs were all default,
so it had already been factory reset. Everything plugged in, and it does indeed work.

**Inside my 2017 home server.** This thing has been running my Minecraft servers for a couple years
now. Got the side panel off. It has a 7th gen i5, I upgraded the RAM to 16 gigs and added a 500 gig
NVMe, and it also has this EVGA 1050. There is a hard drive in there, but I am pretty sure there is
a virus on it, so we just don't talk about that.

**Adding an SSD to my 2017 home server.** Took the hard drive out and put in a 500 gig SSD from PNY.
The SSD is actually supposed to go on the back of this thing, but the screws are way too big for the
threads. So yeah, it is just going to sit there. I don't see a problem. Plan is to use it to dual
boot with Linux.

**Setting up a modded Minecraft server.** Can I make a modded Minecraft server in under 5 minutes?
I remoted into my server and it feels way more official than it actually is. It is pretty simple —
download the pack you want, I went with Crazy Craft, extract the files, wait for it to start. I did
not mean to jinx myself but I think I got it first try. It took 3 hours. I am mildly upset. Server
is running for the most part. A couple hiccups on the way, but it's whatever.

## Builds and fixes

**Built this PC to flip for profit.** Built this gaming PC for $600 and I am not keeping it. Plan is
to flip it on jawa.gg, which is basically an online marketplace just for PC parts and custom builds.
It is running the Ryzen 5500, the RX 5600 XT, 16 gigs of RAM, and a terabyte of storage. What do you
think I could sell it for?

**Fixing my brother's gaming PC.** It had been overheating, so we took the cooler off and reapplied
thermal paste. Keep track of your screws. Turned it back on to make sure temps were stable, got the
glass panel back on. Pretty simple fix, everything looked normal after, and the Cinebench score
looked pretty good too.

**Finishing up my brother's PC.** Rebuilt it after we case swapped it. This thing is rocking the
7900X, the MSI 3060, 64 gigs of RAM, and a terabyte of storage. Moment of truth — we got fans, so
that is a good sign. Then I realized I did not have the wireless dongle for my keyboard. I might
have gone a little light on the thermal paste, so I ran a quick Cinebench to see if it was going to
overheat, and it was looking like it might. I totally thought I broke this thing, not going to lie.

**Don't upgrade your PC this way.** I see a lot of people upgrade in the worst way. Like putting a
$1,200 motherboard in a $600 PC, or a $300 part in a $2,000 build. The key is having your CPU, GPU,
RAM, and storage all balanced so the whole thing actually feels faster. Performance isn't about one
flashy component, it is about balance. Drop your parts list into PCPartPicker — if something costs
significantly more or less than everything else, that is your problem. And only upgrade when you are
actually unhappy with the performance.

**Installing Linux on my 8 year old laptop.** Went with Linux Mint because it is lightweight and
good for beginners. First time running Linux, so I wanted to start simple. Download the ISO, use
something like Rufus to make your installation media, plug it in, boot from it. A short while later
we were at the desktop and honestly it looks pretty clean. Trackpad wasn't working great but I fixed
that with a driver. I was surprised how well it runs on something that hadn't been turned on in six
years.

## The networking series

This is the one I am doing every single day until I pass my Network+. I have a deadline and my job
is riding on it.

**Day 1 — the OSI model.** Seven layers showing how data travels from one point to another. Starts
as just a signal, wired or wireless. That signal becomes data and gets labeled with the MAC address
of the device it is going to. Routers and switches read the IP address and tell your data where to
go next. Then it gets cut into pieces and put back together on the other end, and if anything is
missing it just asks for it again. There is a layer keeping track of your connection so a drop
doesn't send you back to the beginning. Then it gets encrypted or decrypted and compressed into
something readable, and your browser shows you what you actually see.

**Day 2 — the local network.** Everything that makes up a network. It all starts at your router,
which connects your local network to your ISP. That router connects to your switch. The switch
usually plugs into a patch panel, which connects to your building's wired infrastructure. That is
how servers, workstations, wireless access points, and everything else get on your local network.

**Day 3 — network types.** Not all network types are the same, they are broken down by how big they
are. A personal area network is basically your phone connecting to your AirPods. A local area
network is all the devices in your house, like your phone and your gaming PC. Wireless LAN is the
same thing but just the wireless portion. A virtual LAN splits one physical network into multiple
separated networks — one for computers, one for servers, one for entertainment devices. A wide area
network connects multiple LANs. A metropolitan area network is all the interconnected LANs in a
city. A campus area network is your college or school district.

**Day 4 — IP addresses.** Your IP address is the reason data knows where it has to go. It is a lot
like your mailing address, just for your computer — the first part is like the name of your street
and the last part is your house number. But the data isn't sent all at once. It gets broken into
smaller chunks called packets, and each packet has a header with the return and destination IP plus
something called time to live, which means it only gets a certain number of hops before it is
destroyed. It sends a lot of packets, and somehow everything arrives at the right house and gets put
back together.

## The random ones

**The new GPT-5 is way better.** Been messing around with it and it is a major improvement. The
biggest thing I noticed is it sounds way more natural, and the speed is pretty insane. I gave it a
very specific task and it nailed it. It also seems to use something called mixture of experts, where
it routes your prompt to a specialized submodel that can best respond to it. Apparently it is really
good at coding.

**Unboxing my new mic — Hollyland Lark M2.** Opened up the kit and got the charging case, the
lightning and type-C receivers that plug into your phone, the two microphones, and the main
receiver. It is a lapel mic with up to 40 hours of battery life, which is kind of crazy for
something this small. Came with a nice travel case and all the accessories. I paid $115 for it, so
hopefully it is worth it. Do I sound professional?

## What's next

The home lab is the thing I actually want to build out — one of those 24 bay units for Plex and
Jellyfin, the other one as a NAS, and the free switch tying it together. And the networking series
keeps going every day until the Network+ is done.

Let me know what I should do with the second drive bay.
