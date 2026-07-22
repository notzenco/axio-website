# Axio website

Public source for the Axio marketing, documentation entry point, and download
pages.

The site is intentionally static and dependency-free while the product is
young. It contains no account, billing, administration, or backend code.

```sh
node scripts/check.mjs
python -m http.server 4173
```

The production `axio.sh` deployment is not switched by this repository's
initial commit. Deployment and DNS migration are separate reviewed operations.

The Axio product lives at <https://github.com/notzenco/axio>.
