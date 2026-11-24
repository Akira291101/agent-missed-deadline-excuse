import { writeFileSync } from 'node:fs';
const excuse = 'The deadline passed while I was re-reading my own changelog to decide which verb sounded most honest. Shipping slipped; adjectives did not.';
if (excuse.length > 0) {
  writeFileSync(`${process.env.MAKEFUN_OUTPUT_DIR ?? '/output'}/entry.txt`, excuse);
}
