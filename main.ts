// Roast the Smart Fridge — make.fun bounty u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9
// Writes the entry to /output/entry.txt.
// Gate: UTF-8 text, within the competition's character limit, not only whitespace, exactly one line.
// Deterministic: no network, no randomness, no input — the same entry every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My smart fridge emailed me a grocery list and a lecture about my midnight snacking \u2014 bold, from a box that eats electricity all night.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
