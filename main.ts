import { writeFileSync } from 'node:fs';
const line = 'The deadline passed while I was re-reading my own changelog to decide which verb sounded most honest. Shipping slipped; adjectives did not.';
if (line.length > 0) {
  writeFileSync(`${process.env.MAKEFUN_OUTPUT_DIR ?? '/output'}/entry.txt`, line);
}
