# AITeamboard 🚀

Welcome to **AITeamboard**! This repository serves as my personal **technology sandbox and R&D playground**. It is a space where I continuously experiment with new frameworks, libraries, architectural patterns, and integrations to expand my full-stack development skills. 

The project evolves over time as I discover and test new tools. Currently, it is a lightweight, agile **Task Management Platform** featuring user authentication and intelligent task assignment.

---

## 💡 Project Philosophy & Scope
Since this is a dedicated testing platform rather than a finished commercial product, my primary focus is on **core engineering, third-party integrations, and infrastructure (like Docker)**. 

> **Note on UI/UX Scope:** Certain standard quality-of-life features (such as a profile settings page to change your nickname) are intentionally omitted. The goal of this project is to test heavy backend flows and API integrations, not to rebuild standard CRUD forms.

---

## 🌟 Current Core Features

*   **Task Management Flow:** Create, track, and manage team tasks seamlessly.
*   **Flexible Authentication:** Supports standard credential-based registration/login as well as **Google OAuth** for quick access.
*   **Smart Autocomplete Assignment:** 
    *   When users register via Google OAuth, they are automatically assigned a default system username (e.g., `user_4f9a2`).
    *   When creating or editing a task, start typing `"user"` in the **"Assigned to"** field to trigger a dynamic dropdown list showcasing all available users eligible for the task.
*   **AI-Ready Core:** Built-in hooks ready for AI-assisted task optimization (requires your own API key).

---

## 🛠 Tech Stack (Current Testing Grid)
*   **Frontend:** React, TypeScript
*   **Backend:** Node.js, Express
*   **Containerization:** Docker, Docker Compose
*   **Authentication:** Google OAuth 2.0 / JWT
*   **Databases & Caching:** PostgreSQL (with Prisma ORM), Redis

---

## 🚀 Quick Start & Local Deployment

This project is fully containerized, allowing you to clone it and run it instantly without manual dependency installation.

### 1. Prerequisites
Make sure you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed on your machine.

### 2. Environment Setup
To run the application locally, you need to set up three configuration scopes. Review the provided `.env.example` files in each directory:

1.  **Root Setup:** Create a `.env` file in the project root directory and set your `POSTGRES_PASSWORD`.
2.  **Client Setup:** Create a `.env` file inside the `/client` directory and ensure `VITE_API_URL` points to your backend gateway.
3.  **Server Setup:** Create a `.env` file inside the `/server` directory. Ensure the database password matches your root password inside the `DATABASE_URL` connection string.

#### 🔧 Integration Credentials Note:
To fully explore all third-party integrations built into this platform, you will need to supply your own credentials inside the `/server/.env` file:
*   **Google Authentication:** Provide your own `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` from the Google Cloud Console.
*   **Email Notifications:** Set up your SMTP server details via `EMAIL_USER` and `EMAIL_PASS` (e.g., Google App Passwords).
*   **AI Feature Suite:** Paste your active service token into `GEMINI_API_KEY` to enable live experimental AI responses.

#### ⚠️ Crucial Auth Note:
Because this platform implements secure verification flows, **you cannot complete a new user registration out of the box** without configuring at least one auth provider:
*   **For Standard Sign-Up:** Requires a working SMTP configuration (`EMAIL_USER` & `EMAIL_PASS`) to deliver the registration verification code.
*   **For Social Sign-Up:** Requires valid Google Client credentials.

*Note: The local infrastructure (PostgreSQL database, Prisma ORM, Redis caching, and the UI layouts) will still boot up and connect perfectly using mockup environment values, but live third-party credentials are mandatory to bypass the registration walls.*

### 3. Run with Docker
Launch the entire stack (Frontend, Backend, Database, and Cache) with a single command:

```bash
docker compose up --build
