// Make the AI Judge Laugh: Office Jokes
// Writes one one-line office joke (86 chars) to /output/entry.txt.
// Winner C8: chosen by the CrowLLM independent panel (2 distinct models,
// deepseek-v4-flash + minimax-m3.1-flash, both picking C8) over the internal
// winner C2; panel combined weighted 179 vs 159 (C3) vs 155 (C2).
// Full candidates + panel record: candidates.md in the workspace.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "They didn't fire me, they sunsetted my role \u2014 turns out I was a feature, not a person.";

if ([...JOKE].length > 199 || [...JOKE].length < 1) {
  throw new Error(`joke length ${[...JOKE].length} outside 1-199 chars`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("joke must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
