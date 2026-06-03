/*
 * Regenerates public/logo.png from the operator-supplied "A&L logo.png"
 * (trims the white border, adds a little breathing room) and the favicon.
 * Run: node scripts/build-logo.mjs   (requires the `sharp` dev dependency)
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// Real logo → trimmed, padded white plate for the navy header/footer.
const trimmed = await sharp(join(root, 'A&L logo.png'))
  .trim({ threshold: 12 })
  .toBuffer();
await sharp(trimmed)
  .extend({ top: 16, bottom: 16, left: 22, right: 22, background: '#FFFFFF' })
  .png()
  .toFile(join(root, 'public', 'logo.png'));

// Favicon — navy tile with the roof mark (brand colours).
const favSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
  <rect width="64" height="64" rx="8" fill="#12283D"/>
  <path d="M32 12 L54 30 L48 36 L32 22 L16 36 L10 30 Z" fill="#F8E929"/>
  <path d="M18 36 L32 24 L46 36 L46 52 L18 52 Z" fill="#2E81C5"/>
  <rect x="28" y="40" width="8" height="12" fill="#12283D"/>
</svg>`;
await sharp(Buffer.from(favSvg)).resize(64, 64).png().toFile(join(root, 'public', 'favicon.png'));

console.log('public/logo.png + public/favicon.png regenerated from A&L logo.png');
