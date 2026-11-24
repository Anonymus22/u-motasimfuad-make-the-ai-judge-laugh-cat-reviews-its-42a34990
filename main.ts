import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. He fills the bowl, then parks himself on my warm laptop like he pays rent. I knocked his coffee over twice. Still no apology.";

function validateReview(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Review must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Review must be a single line");
  }
}

validateReview(REVIEW);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
