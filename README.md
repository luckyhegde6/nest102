# NestJS Modern DevOps Project

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

A modern NestJS starter with full Docker Compose, GitHub Actions CI/CD, Docker MCP integration, secrets management, and monitoring best practices.

---

## 🚀 Quick Start

### 1. **Local Development**
```bash
npm install
npm run start:dev
```

### 2. **Run with Docker Compose**
```bash
# Build and start all services (NestJS + MySQL)
npm run docker:up

# View logs for the main container
npm run docker:logs

# Stop all services
docker compose down

# Remove all containers, images, and volumes for a clean slate
npm run docker:terminate
```

### 3. **Testing**
```bash
npm run test        # Unit tests
npm run test:e2e    # End-to-end tests
npm run test:cov    # Coverage
```

---

## 🐳 Docker & Docker Compose
- All app and DB services are defined in `docker-compose.yml`.
- Use the npm scripts for easy management:
  - `npm run docker:build` – Build images
  - `npm run docker:up` – Start services
  - `npm run docker:down` – Stop services
  - `npm run docker:logs` – View logs
  - `npm run docker:terminate` – Full cleanup (containers, images, volumes)

---

## 🔄 GitHub Actions CI/CD
- Automated build, test, and Docker image push on every push to `main`.
- See `.github/workflows/docker.yml` for details.
- Images are pushed to Docker Hub (`yourdockerhubuser/nest102:latest`).

---

## ☁️ Docker MCP Integration
- Deploy your app using Docker MCP (Managed Control Plane) for orchestration, scaling, and monitoring.
- Configure your MCP stack/service to use the latest image from Docker Hub.
- Use MCP's secrets manager for DB and JWT secrets.
- Set up webhooks or API triggers for auto-redeploy on new image push.

---

## 🔒 Security & Secrets Management
- **Never** commit secrets to code.
- Use `.env` files locally (not committed), GitHub Secrets for CI, and MCP secrets for production.
- Example secrets:
  - `DB_PASSWORD`, `JWT_SECRET`, etc.

---

## 📈 Monitoring & Alerts
- Use Docker MCP's built-in monitoring for container health, logs, and resource usage.
- Add a `/health` endpoint with `@nestjs/terminus` for health checks (optional).
- Set up alerts in MCP for failures or high resource usage.

---

## 📜 Scripts
| Script                | Description                                  |
|-----------------------|----------------------------------------------|
| npm run start:dev     | Start NestJS in watch mode                   |
| npm run docker:up     | Start all services with Docker Compose       |
| npm run docker:down   | Stop all services                            |
| npm run docker:logs   | View logs for main container                 |
| npm run docker:terminate | Remove all containers, images, volumes    |
| npm run test          | Run unit tests                               |
| npm run test:e2e      | Run end-to-end tests                         |
| npm run test:cov      | Run test coverage                            |

---

## 📝 Environment Variables
See `.env.example` or below for required variables:

```env
# Database
DB_HOST=mysql
DB_PORT=3306
DB_NAME=nestjs_db
DB_USERNAME=nestjs_user
DB_PASSWORD=nestjs_password
DB_ROOT_PASSWORD=root_password

# JWT
JWT_SECRET=your-super-secret-key-here
JWT_EXPIRATION=1h

# App
PORT=3000
NODE_ENV=development
```

---

## 📦 Project Structure
- `src/` – Source code
- `Dockerfile` – Multi-stage build for production
- `docker-compose.yml` – Service definitions
- `.github/workflows/docker.yml` – CI/CD pipeline

---

## 📚 Resources
- [NestJS Documentation](https://docs.nestjs.com)
- [Docker Documentation](https://docs.docker.com/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Your Docker MCP platform docs]

---

## License
MIT

# Database
DB_HOST=mysql
DB_PORT=3306
DB_NAME=nestjs_db
DB_USERNAME=nestjs_user
DB_PASSWORD=nestjs_password
DB_ROOT_PASSWORD=root_password

# JWT
JWT_SECRET=your-super-secret-key-here
JWT_EXPIRATION=1h

# App
PORT=3000
NODE_ENV=development
