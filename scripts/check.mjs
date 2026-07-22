import { existsSync, readFileSync } from "node:fs";
import { dirname, extname, join, normalize, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const pages = ["index.html", "docs/index.html", "download/index.html"];
const errors = [];

for (const page of pages) {
  const fullPath = join(root, page);
  if (!existsSync(fullPath)) {
    errors.push(`missing required page: ${page}`);
    continue;
  }

  const document = readFileSync(fullPath, "utf8");
  if (!document.includes("<title>") || !document.includes('name="description"')) {
    errors.push(`${page}: missing title or meta description`);
  }

  for (const match of document.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const reference = match[1];
    if (/^(?:https?:|mailto:|#)/.test(reference)) continue;
    const cleanReference = reference.split(/[?#]/, 1)[0];
    const candidate = cleanReference.startsWith("/")
      ? join(root, cleanReference)
      : join(dirname(fullPath), cleanReference);
    const normalized = normalize(candidate);
    const resolved = extname(normalized) ? normalized : join(normalized, "index.html");
    if (!existsSync(resolved)) errors.push(`${page}: broken local reference ${reference}`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`website check passed (${pages.length} pages)`);
