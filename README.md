# Movie App — Fullstack + CI/CD + K8s demo

This repo is a ready-to-run fullstack demo that covers:
- React frontend (Vite)
- Node.js backend (Express + Mongoose)
- Tests (Vitest for frontend, Jest + Supertest for backend)
- Dockerfiles and docker-compose for local dev
- Kubernetes manifests for deployment
- GitHub Actions CI/CD with manual production approval

## Quick start (local)
1. Start local MongoDB (docker): `docker run -d -p 27017:27017 --name mongo mongo:6`
2. Backend: `cd backend && npm install && npm run dev`
3. Frontend: `cd frontend && npm install && npm run dev`
4. Or use docker-compose: `docker-compose -f docker/docker-compose.yml up --build`

See each folder README for more details.
