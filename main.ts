import { mkdirSync, writeFileSync } from "node:fs";

// The whole entry is one line; the grader reads /output/entry.txt.
const entry = "You're the only update I'd install without reading the changelog.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
