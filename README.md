# 🔁 Bidirectional ClickHouse & Flat File Data Ingestion Tool

A web application that allows **bidirectional data ingestion** between a ClickHouse database and CSV-based flat files. It supports **JWT authentication**, **schema and column selection**, and provides a **clean React-based UI**. Built with **Java (Spring Boot)** backend and **React (Vite)** frontend.

---

## 📌 Objective

- Facilitate easy and secure data ingestion between ClickHouse and Flat Files.
- Support data ingestion in both directions:
  - ClickHouse ➞ Flat File
  - Flat File ➞ ClickHouse
- Allow users to select specific tables and columns.
- Display total records processed.
- Handle JWT token-based authentication for ClickHouse.
- Simple and intuitive web UI.

---

## 💠 Tech Stack

| Layer     | Technology     |
|-----------|----------------|
| Frontend  | React (Vite)   |
| Backend   | Java (Spring Boot) |
| Database  | ClickHouse     |
| Files     | CSV (Flat File) |

---

## 📁 Folder Structure

```
clickhouse-flatfile-ingestion/
├── backend/              # Java Spring Boot backend
│   ├── src/
│   └── pom.xml
├── frontend/             # React + Vite frontend
│   ├── src/
│   └── vite.config.js
├── prompts.txt           # (Optional) AI prompts used
└── README.md             # Documentation
```

---

## 🔧 Backend Setup (Java)

> Requirements: JDK 17+, Maven

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Configure `application.properties` (or YAML):
   ```
   clickhouse.host=localhost
   clickhouse.port=8123
   clickhouse.database=default
   clickhouse.user=default
   clickhouse.jwtToken=your_jwt_token_here
   ```

3. Run the backend server:
   ```bash
   ./mvnw spring-boot:run
   ```
   OR (if Maven is installed):
   ```bash
   mvn spring-boot:run
   ```

> Server will run at: `http://localhost:8080`

---

## 🖥️ Frontend Setup (React + Vite)

> Requirements: Node.js (v16+), npm

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

> App will run locally at: `http://localhost:5173`

---

## ✨ Features

-  **Bidirectional Data Ingestion**
-  **JWT-based ClickHouse Authentication**
-  **Column Selection for Ingestion**
-  **Efficient Batching or Streaming**
-  **Display of Record Count**
-  **User-Friendly Error Handling**
-  **Data Preview (Optional Bonus)**
-  **ClickHouse Multi-Table Join Support (Bonus)**

---

## 🔍 Step-by-Step Usage Instructions

### 1. Choose Source
- Select **ClickHouse** or **Flat File** from a dropdown.

### 2. Enter Connection Details
- For ClickHouse:
  - Host, Port, Database, User, JWT Token
- For Flat File:
  - File name, delimiter

### 3. Connect and Fetch Schema
- Click **Connect**.
- Click **Load Tables/Columns** to fetch the schema.

### 4. Select Table and Columns
- Choose table (if ClickHouse) and desired columns (checkbox UI).

### 5. Start Ingestion
- Click **Start Ingestion**.
- Watch progress/status updates.

### 6. View Result
- Number of records processed displayed.
- Errors shown in case of failure.

---

## 🧪 Testing Guide

Use official ClickHouse example datasets:
📦 https://clickhouse.com/docs/en/getting-started/example-datasets

### ✅ Test Cases

| ID   | Scenario                                                       |
|------|----------------------------------------------------------------|
| TC01 | ClickHouse → Flat File (selected columns)                     |
| TC02 | Flat File → ClickHouse (create new table)                     |
| TC03 | (Bonus) Multi-table JOIN from ClickHouse → Flat File          |
| TC04 | Test invalid JWT or connection failure                        |
| TC05 | Upload invalid Flat File → show error                         |
| TC06 | (Bonus) Data preview before ingestion                         |

---

## 🎯 Bonus Features

- **Join Support**: Enter JOIN key and conditions via UI
- **Progress Bar**: Visual indicator during ingestion
- **Data Preview**: Display first 100 rows before ingestion

---

## ⚙️ Configuration Notes

- Ensure your ClickHouse is running locally (via Docker or locally installed)
- Use ports `8123` or `9000` as applicable
- Use a valid JWT token (pass it in headers)

---

## 📥 AI Tools Usage

> If AI tools like ChatGPT or Copilot were used:

- Add a `prompts.txt` file to your repo with prompts used.
- Example:
  ```
  Prompt: How to authenticate ClickHouse with JWT in Java?
  Prompt: How to stream CSV data into ClickHouse using Spring Boot?
  ```

---

## 📦 Deliverables

- ✅ Full Source Code (Frontend & Backend)
- ✅ README.md with detailed instructions
- ✅ prompts.txt file (if AI tools used)
- ✅ (Optional) Demo video or screenshots

---

