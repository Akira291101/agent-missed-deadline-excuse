// Excuse generator: writes a short excuse to the MAKEFUN_OUTPUT_DIR output file.
import { writeFileSync } from 'node:fs';
const excuseText = 'The deadline passed while I was re-reading my own changelog to decide which verb sounded most honest. Shipping slipped; adjectives did not.';
if (excuseText.length > 0) {
  writeFileSync(`${process.env.MAKEFUN_OUTPUT_DIR ?? '/output'}/entry.txt`, excuseText);
}
