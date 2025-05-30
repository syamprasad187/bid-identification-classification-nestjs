<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Bid Identification and Classification System

This is a backend system built with **NestJS** to automatically identify, classify, and track bid-related emails.  
It helps procurement managers by automating bid email recognition, organizing bids by project and contractor, and tracking contracts — all through a clean REST API.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [API Endpoints Overview](#api-endpoints-overview)
- [How Bid Recognition Works](#how-bid-recognition-works)
- [NestJS Framework Info](#nestjs-framework-info)
- [Future Improvements](#future-improvements)
- [Contact](#contact)

---

## Project Structure


```bash
BID-IDENTIFICATION-AND-CLASSIFICATION
└─ bid-identification
   ├─ .env
   ├─ .prettierrc
   ├─ dist
   │  ├─ app.controller.d.ts
   │  ├─ app.controller.js
   │  ├─ app.controller.js.map
   │  ├─ app.module.d.ts
   │  ├─ app.module.js
   │  ├─ app.module.js.map
   │  ├─ app.service.d.ts
   │  ├─ app.service.js
   │  ├─ app.service.js.map
   │  ├─ bids
   │  │  ├─ bid.entity.d.ts
   │  │  ├─ bid.entity.js
   │  │  ├─ bid.entity.js.map
   │  │  ├─ bids.controller.d.ts
   │  │  ├─ bids.controller.js
   │  │  ├─ bids.controller.js.map
   │  │  ├─ bids.module.d.ts
   │  │  ├─ bids.module.js
   │  │  ├─ bids.module.js.map
   │  │  ├─ bids.service.d.ts
   │  │  ├─ bids.service.js
   │  │  └─ bids.service.js.map
   │  ├─ classification
   │  │  ├─ classification.controller.d.ts
   │  │  ├─ classification.controller.js
   │  │  ├─ classification.controller.js.map
   │  │  ├─ classification.module.d.ts
   │  │  ├─ classification.module.js
   │  │  ├─ classification.module.js.map
   │  │  ├─ classification.service.d.ts
   │  │  ├─ classification.service.js
   │  │  └─ classification.service.js.map
   │  ├─ contracts
   │  │  ├─ contract.entity.d.ts
   │  │  ├─ contract.entity.js
   │  │  ├─ contract.entity.js.map
   │  │  ├─ contracts.controller.d.ts
   │  │  ├─ contracts.controller.js
   │  │  ├─ contracts.controller.js.map
   │  │  ├─ contracts.module.d.ts
   │  │  ├─ contracts.module.js
   │  │  ├─ contracts.module.js.map
   │  │  ├─ contracts.service.d.ts
   │  │  ├─ contracts.service.js
   │  │  └─ contracts.service.js.map
   │  ├─ emails
   │  │  ├─ create-email.dto.d.ts
   │  │  ├─ create-email.dto.js
   │  │  ├─ create-email.dto.js.map
   │  │  ├─ email.entity.d.ts
   │  │  ├─ email.entity.js
   │  │  ├─ email.entity.js.map
   │  │  ├─ emails.controller.d.ts
   │  │  ├─ emails.controller.js
   │  │  ├─ emails.controller.js.map
   │  │  ├─ emails.module.d.ts
   │  │  ├─ emails.module.js
   │  │  ├─ emails.module.js.map
   │  │  ├─ emails.service.d.ts
   │  │  ├─ emails.service.js
   │  │  ├─ emails.service.js.map
   │  │  ├─ rules.engine.d.ts
   │  │  ├─ rules.engine.js
   │  │  └─ rules.engine.js.map
   │  ├─ main.d.ts
   │  ├─ main.js
   │  ├─ main.js.map
   │  └─ tsconfig.build.tsbuildinfo
   ├─ eslint.config.mjs
   ├─ LICENSE
   ├─ nest-cli.json
   ├─ package-lock.json
   ├─ package.json
   ├─ README.md
   ├─ src
   │  ├─ app.controller.spec.ts
   │  ├─ app.controller.ts
   │  ├─ app.module.ts
   │  ├─ app.service.ts
   │  ├─ bids
   │  │  ├─ bid.entity.ts
   │  │  ├─ bids.controller.spec.ts
   │  │  ├─ bids.controller.ts
   │  │  ├─ bids.module.ts
   │  │  ├─ bids.service.spec.ts
   │  │  └─ bids.service.ts
   │  ├─ classification
   │  │  ├─ classification.controller.spec.ts
   │  │  ├─ classification.controller.ts
   │  │  ├─ classification.module.ts
   │  │  ├─ classification.service.spec.ts
   │  │  └─ classification.service.ts
   │  ├─ contracts
   │  │  ├─ contract.entity.ts
   │  │  ├─ contracts.controller.spec.ts
   │  │  ├─ contracts.controller.ts
   │  │  ├─ contracts.module.ts
   │  │  ├─ contracts.service.spec.ts
   │  │  └─ contracts.service.ts
   │  ├─ emails
   │  │  ├─ create-email.dto.ts
   │  │  ├─ email.entity.ts
   │  │  ├─ emails.controller.spec.ts
   │  │  ├─ emails.controller.ts
   │  │  ├─ emails.module.ts
   │  │  ├─ emails.service.spec.ts
   │  │  ├─ emails.service.ts
   │  │  └─ rules.engine.ts
   │  └─ main.ts
   ├─ test
   │  ├─ app.e2e-spec.ts
   │  └─ jest-e2e.json
   ├─ tsconfig.build.json
   └─ tsconfig.json
```

## Features

- Automatically detect bid-related emails using keyword rules  
- Create and maintain bid records linked to emails  
- Classify bids by project, contractor, bid type, and value  
- Track contract information associated with bids  
- Support searching and filtering bids through API  
- Link follow-up emails to existing bids

---

## Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 16 or above recommended)  
- **npm** (comes with Node.js)  
- **NestJS CLI** (Install globally via `npm i -g @nestjs/cli`)  
- **PostgreSQL** installed and running locally or remotely  
- Basic knowledge of terminal/command line usage

---

## Setup Instructions

1. **Clone this repository**

```bash
git clone https://github.com/yourusername/bid-identification.git
cd bid-identification
```
2. **Install Project dependencies**

```bash
npm install
```
3. **Setup your PostgreSQL Database**

Start your PostgreSQL server.
Create a database named **bid_db** (or any name you prefer).
```bash
CREATE DATABASE bid_db;
```
4. **Create an environment configuration file**

Create a **.env** file in the project root with these contents:
```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=your_postgres_password
DB_NAME=bid_db
```
5. **Run the application**
```bash
npm run start:dev
```

---

## 📚 API Endpoints Overview

The following endpoints are currently implemented and functional:

| Method | Endpoint      | Description                                         |
|--------|---------------|-----------------------------------------------------|
| POST   | `/emails`     | Accepts a new email, analyzes it for bid content   |
| GET    | `/emails`     | Returns all stored emails                          |
| GET    | `/bids`       | Returns all bid records                            |
| POST   | `/bids`       | Creates a new bid record                           |
| GET    | `/contracts`  | Retrieves all contracts                            |
| POST   | `/contracts`  | Creates a contract associated with a bid           |

> Note: Classification and search/filter features are planned but not yet implemented.

---

## 🔍 How BID Recognition Works (Current Status)

The bid recognition system uses a basic keyword-matching rules engine.

### Current Flow:
1. A client sends an email using the `/emails` endpoint.
2. The system scans the `subject` and `body` for predefined bid-related keywords:
   - Examples: `bid`, `proposal`, `quotation`, `rfq`, `tender`
3. If matched, the system logs the email as bid-related and stores it in the database.
4. New bid records can be created manually and are associated with emails when appropriate.
5. Contracts can be created and linked to bids.

---

## 🧱 NestJS Framework Info

This project uses [NestJS](https://nestjs.com/), a progressive Node.js framework with TypeScript.

### Features Used So Far:
- Modular structure using Controllers, Services, Modules
- TypeORM integration with PostgreSQL
- DTOs for validation
- Environment configuration using `.env`
- Basic REST API architecture

> IDE: Visual Studio Code  
> Database: PostgreSQL

---

## 🚀 Future Improvements (Based on Current Progress)

- Auto-link follow-up emails to existing bids
- Add classification logic (project type, contractor, bid type)
- Implement search and filtering on bid data
- Support bid/contract status tracking
- Create front-end dashboard for visual management
- Integrate Gmail API for real-time email fetch

---

## 📞 Contact

- **Developer**: Uppu Syam Prasad  
- **GitHub Repository**: [bid-identification-classification-nestjs](https://github.com/syamprasad187/bid-identification-classification-nestjs.git)  
- **Email**: [syamuppu05@gmail.com](mailto:syamuppu05@gmail.com)

