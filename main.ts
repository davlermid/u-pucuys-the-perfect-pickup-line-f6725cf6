// The Perfect Pickup Line — make.fun entry (davlermid)
// Task: produce one original, funny, one-line pickup line (max 120 chars)
// and write it to /output/entry.txt. Node 22, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const RAW = "Are you Wi-Fi? Because I'm feeling a strong connection — and I never want to lose signal.";

// Normalize: trim and collapse any internal whitespace runs to a single space.
const LINE = RAW.trim().replace(/\s+/g, " ");

// Validate: must be non-empty, a single line, and at most 120 characters.
// The 120-char cap is the competition's hard limit — anything longer is rejected.
if (LINE.length === 0) throw new Error("pickup line must not be empty");
if (/[\r\n]/.test(LINE)) throw new Error("pickup line must be a single line");
if (LINE.length > 120) throw new Error(`pickup line is ${LINE.length} chars, over the 120-char limit`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");

console.log(`Wrote ${LINE.length}-char pickup line to /output/entry.txt`);
