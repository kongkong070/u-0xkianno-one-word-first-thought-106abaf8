// One Word, First Thought — make.fun entry.
// The word: petrichor. The smell of rain on dry earth —
// a single word that is surprising, vivid, and carries a
// whole sensory image in nine letters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "petrichor";

// Gate mirror: the sealed scorer only accepts UTF-8 text of
// 1 to 24 characters, not only white space, and the entry
// must be exactly one word. Fail loudly instead of writing
// an entry that could never be judged.
function validate(word: string): void {
  if (word.length < 1 || word.length > 24) {
    throw new Error(`entry must be 1-24 chars, got ${word.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word");
  }
}

function main(): void {
  validate(WORD);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
}

main();
