# Axio website contributor instructions

## Commands

- `node scripts/check.mjs` - validate required pages and local links.
- `python -m http.server 4173` - serve the site locally from the repo root.

## Architecture

- The site is dependency-free static HTML, CSS, and JavaScript.
- `/` owns public product positioning.
- `/docs/` introduces product principles and links to versioned core docs.
- `/download/` reports release availability without inventing artifacts.
- Account, billing, API, and admin surfaces do not belong in this repository.

## Gotchas

- `axio.sh` is still served by the legacy cloud deployment during migration.
- Do not add `CNAME` or change DNS/deployment state without explicit approval.
- Keep claims true for the current public product state.
- Never commit analytics credentials or hosting secrets.

## Definition of done

- `node scripts/check.mjs` passes.
- Pages work without a build step and remain keyboard accessible.
- Public copy matches the main `notzenco/axio` repository.
