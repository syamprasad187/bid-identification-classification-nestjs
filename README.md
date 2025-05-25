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

┣ 📂dist
┃ ┣ 📜app.controller.d.ts
┃ ┣ 📜app.controller.js
┃ ┣ 📜app.controller.js.map
┃ ┣ 📜app.module.d.ts
┃ ┣ 📜app.module.js
┃ ┣ 📜app.module.js.map
┃ ┣ 📜app.service.d.ts
┃ ┣ 📜app.service.js
┃ ┣ 📜app.service.js.map
┃ ┣ 📜main.d.ts
┃ ┣ 📜main.js
┃ ┣ 📜main.js.map
┃ ┗ 📜tsconfig.build.tsbuildinfo
┣ 📂src
┃ ┣ 📂bids
┃ ┃ ┣ 📜bid.entity.ts
┃ ┃ ┣ 📜bids.controller.spec.ts
┃ ┃ ┣ 📜bids.controller.ts
┃ ┃ ┣ 📜bids.module.ts
┃ ┃ ┣ 📜bids.service.spec.ts
┃ ┃ ┗ 📜bids.service.ts
┃ ┣ 📂classification
┃ ┃ ┣ 📜classification.controller.spec.ts
┃ ┃ ┣ 📜classification.controller.ts
┃ ┃ ┣ 📜classification.module.ts
┃ ┃ ┣ 📜classification.service.spec.ts
┃ ┃ ┗ 📜classification.service.ts
┃ ┣ 📂contracts
┃ ┃ ┣ 📜contract.entity.ts
┃ ┃ ┣ 📜contracts.controller.spec.ts
┃ ┃ ┣ 📜contracts.controller.ts
┃ ┃ ┣ 📜contracts.module.ts
┃ ┃ ┣ 📜contracts.service.spec.ts
┃ ┃ ┗ 📜contracts.service.ts
┃ ┣ 📂emails
┃ ┃ ┣ 📜email.entity.ts
┃ ┃ ┣ 📜emails.controller.spec.ts
┃ ┃ ┣ 📜emails.controller.ts
┃ ┃ ┣ 📜emails.module.ts
┃ ┃ ┣ 📜emails.service.spec.ts
┃ ┃ ┣ 📜emails.service.ts
┃ ┃ ┗ 📜rules.engine.ts
┃ ┣ 📜app.controller.spec.ts
┃ ┣ 📜app.controller.ts
┃ ┣ 📜app.module.ts
┃ ┣ 📜app.service.ts
┃ ┗ 📜main.ts
┣ 📂test
┃ ┣ 📜app.e2e-spec.ts
┃ ┗ 📜jest-e2e.json
┣ 📜.env
┣ 📜.gitignore
┣ 📜.prettierrc
┣ 📜eslint.config.mjs
┣ 📜nest-cli.json
┣ 📜package.json
┣ 📜README.md
┣ 📜tsconfig.build.json
┗ 📜tsconfig.json

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


