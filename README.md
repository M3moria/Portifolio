# Yabets Melese — Portfolio

A minimal React + Vite portfolio. Black-and-white theme, fully responsive, dark-mode toggle.

**Live stack:** React 19 · Vite 8 · nginx (Docker) · GitHub Actions CI

---

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build        # outputs to /dist
```

## Docker (recommended)

```bash
docker compose up --build    # build & serve at http://localhost:8080
docker compose down          # stop
```

## Project structure

```
├── src/
│   ├── main.jsx      # all React components & page content
│   ├── style.css     # responsive styling, themes, animations
│   └── App.jsx       # root component
├── public/           # static assets (favicon, icons)
├── Dockerfile        # multi-stage build: Node → nginx
├── compose.yaml      # local container orchestration
└── nginx.conf        # SPA routing + gzip + security headers
```

## CI/CD

Every push to `main` triggers GitHub Actions:
1. Builds the Docker image
2. Pushes it to GitHub Container Registry (GHCR)

Pull the latest image anywhere:

```bash
docker pull ghcr.io/m3moria/portifolio:latest
```
