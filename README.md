[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/0UWyaad3)


📌 Revobank – NestJS API

A backend banking REST API built with NestJS, Prisma ORM, PostgreSQL, and deployed using Railway and Docker.
Provides CRUD operations for Client, Account, and Transaction resources, with authentication and role-based authorization using JWT Auth Guard + Role Guard.

🚀 Features
🧩 Core modules

Client Module

Create client

Get client(s)

Update client

Delete client

Account Module

Create account

Get account(s)

Update account

Delete account

Transaction Module

Create transaction

Get transaction(s)

Update transaction

Delete transaction

🔐 Authentication & Authorization

JWT authentication using Passport

Guards used:

JwtAuthGuard – protects authenticated routes

RolesGuard – restricts access based on user role

Supported roles:

ADMIN

USER

🗄 Database

Prisma ORM

PostgreSQL database

Prisma models generated and migrated through schema.prisma

☁ Deployment

Deployed using:

Docker container

Railway hosting platform

Supports environment variables for config

📂 Project Structure
src/
 ├── auth/
 │    ├── jwt.strategy.ts
 │    ├── guards/
 │    │     ├── jwt-auth.guard.ts
 │    │     ├── roles.guard.ts
 │    └── decorators/
 │          └── roles.decorator.ts
 ├── client/
 ├── account/
 ├── transaction/
 ├── prisma/
 │    ├── prisma.service.ts
 │    └── schema.prisma
 ├── app.module.ts
 └── main.ts

🛠 Tech Stack
Technology	Purpose
NestJS	API Framework
Prisma	ORM / DB access
PostgreSQL	Database
JWT + Passport	Authentication
Role Guard	Access control
Docker	Containerization
Railway	Deployment
🧪 API Endpoints (CRUD)
Resource	Method	Route
Client	POST	/client
	GET	/client/:id
	GET	/client
	PATCH	/client/:id
	DELETE	/client/:id
Account	POST	/account
	GET	/account/:id
	GET	/account
	PATCH	/account/:id
	DELETE	/account/:id
Transaction	POST	/transaction
	GET	/transaction/:id
	GET	/transaction
	PATCH	/transaction/:id
	DELETE	/transaction/:id

Some routes require admin privileges enforced by RolesGuard.