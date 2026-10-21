# SRBench Explorer

This repository contains the SRBench spatial transcriptomics comparison
website. The frontend is a Vite/React application in `front/`. The research
data is stored separately in Cloudflare R2; no dataset or R2 credential is
committed here.

## Public websites

- GitHub Pages: `https://tianyigu201.github.io/SRBench-Explorer/` (published from
  `.github/workflows/pages.yml`).
- Cloudflare Pages: `https://srbench.pages.dev/` (existing deployment).

Both frontends read the same public R2 objects. The GitHub Pages workflow
derives its base path from the repository name and only uploads `front/dist`. It
requires the repository to be public on GitHub Free and **Settings > Pages >
Build and deployment > Source** to be set to **GitHub Actions**. The R2 CORS
policy must allow `https://tianyigu201.github.io` as an additional origin.

The repository name is `SRBench-Explorer`; GitHub does not redirect the old
`/SRBench/` Pages URL to this one.

See [deployment/README.md](deployment/README.md) for deployment and data
validation details. See [README.pages-r2-local.md](README.pages-r2-local.md)
for the original local preview workflow.
