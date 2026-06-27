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

---

## 🚀 Quick Start & Local Deployment

This project is fully containerized, allowing you to clone it and run it instantly without manual dependency installation.

### 1. Prerequisites
Make sure you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed on your machine.

### 2. Environment Setup
1. Clone the repository.
2. In the root directory, look for the `.env.example` file.
3. Create a new file named `.env` and copy the contents from `.env.example`.
4. Fill in your local credentials. 

*Note: The AI API key slot is left empty by default. If you want to test the experimental AI features, simply paste your own AI service API token into the corresponding variable inside the `.env` file.*

### 3. Run with Docker
Launch the entire stack (Frontend, Backend, and Services) with a single command:

```bash
docker compose up --build
```
