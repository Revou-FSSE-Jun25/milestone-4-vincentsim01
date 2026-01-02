RAILWAY: https://revobank4-production.up.railway.app

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

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).


🏦 Revobank API

Revobank is a NestJS-based banking backend API that manages client authentication, bank accounts, and financial transactions.
It uses PostgreSQL as the database with Prisma ORM, and implements JWT authentication with bcrypt password hashing.

🚀 Tech Stack

Framework: NestJS

Database: PostgreSQL

ORM: Prisma

Authentication: JWT (JSON Web Token)

Password Hashing: bcrypt

Language: TypeScript

API Style: RESTful (CRUD)

📦 Core Modules
1️⃣ Client Module

The Client entity is primarily used for:

Authentication

Storing personal client data

Client fields include:

Email

Password (hashed with bcrypt)

Address

Nationality

Age

Each client can own multiple accounts.

2️⃣ Account Module

The Account entity represents a bank account owned by a client.

Account fields include:

Account type (e.g. savings, current)

Balance

Interest rate

Each account:

Belongs to one client

Can have many transactions

3️⃣ Transaction Module

The Transaction entity represents financial activities made by an account.

Transaction examples:

Deposits

Withdrawals

Transfers

Each transaction:

Belongs to one account

🔗 Database Relationships

Client → Account: One-to-Many

Account → Transaction: One-to-Many

All data is stored in PostgreSQL using Prisma.

🔐 Authentication & Security

JWT is used for authentication and authorization

bcrypt is used to hash and verify passwords

Protected routes require a valid JWT token

Authenticated client data is attached to the request object

🔁 API Features

Revobank follows standard RESTful CRUD operations:

POST – Create resources (register, login, create account, create transaction)

GET – Retrieve data (clients, accounts, transactions)

PATCH – Update resources

DELETE – Remove resources

📂 Project Structure (Simplified)
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── jwt.strategy.ts
│   └── jwt-auth.guard.ts
│
├── client/
│   ├── client.controller.ts
│   ├── client.service.ts
│   └── client.module.ts
│
├── account/
│   ├── account.controller.ts
│   ├── account.service.ts
│   └── account.module.ts
│
├── transaction/
│   ├── transaction.controller.ts
│   ├── transaction.service.ts
│   └── transaction.module.ts
│
├── prisma/
│   ├── prisma.service.ts
│   └── prisma.module.ts
│
└── main.ts

⚙️ Environment Variables

Create a .env file:

DATABASE_URL=postgresql://user:password@host:port/dbname
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

🗄 Prisma
Generate Prisma Client
pnpm prisma generate

Run Migrations
pnpm prisma migrate dev

▶️ Running the Project
pnpm install
pnpm run start:dev


API will be available at:

http://localhost:3000

🧪 API Testing

Use Postman or cURL.

For protected endpoints:

Authorization: Bearer <JWT_TOKEN>

📌 Summary

Secure banking backend using NestJS

PostgreSQL + Prisma for data persistence

JWT & bcrypt for authentication

Clean One-to-Many relationships:

Client → Account → Transaction

Full CRUD support for all resources
