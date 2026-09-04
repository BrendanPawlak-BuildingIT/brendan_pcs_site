/**
 * Regenerates every raster image in public/ from the two SVG sources of truth
 * (public/icon.svg and public/og-image.svg), plus the placeholder post cover in
 * src/assets/. Run with `npm run gen:images` after editing either SVG.
 */
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');

const iconSvg = path.join(publicDir, 'icon.svg');
const ogSvg = path.join(publicDir, 'og-image.svg');

/** Square app icon / favicon at the given pixel size. */
async function makeIcon(size, outFile) {
  await sharp(iconSvg, { density: 384 }).resize(size, size).png().toFile(outFile);
}

await makeIcon(180, path.join(publicDir, 'apple-touch-icon.png'));
await makeIcon(32, path.join(publicDir, 'favicon-32x32.png'));
await makeIcon(16, path.join(publicDir, 'favicon-16x16.png'));
await makeIcon(192, path.join(publicDir, 'icon-192.png'));
await makeIcon(512, path.join(publicDir, 'icon-512.png'));

await sharp(ogSvg, { density: 144 })
  .resize(1200, 630)
  .png()
  .toFile(path.join(publicDir, 'og-image.png'));

console.log('Generated favicons + OG image from public/*.svg.');
