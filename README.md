# 🗨️ AI ChatBot with Short-Term Memory

A feature-rich AI-powered chatbot project that combines **Node.js**, **Express**, and **Vanilla JavaScript** to provide an interactive chat interface with **short-term memory** capabilities.  
It remembers the most recent conversation context during a session, enabling smarter and more human-like responses.

This repository contains **both frontend and backend** components in a single project, making it easy to set up and run.

---

## 📖 Table of Contents
1. [Features](#-features)
2. [Project Structure](#-project-structure)
3. [Tech Stack](#-tech-stack)
4. [Installation & Setup](#-installation--setup)
5. [Environment Variables](#-environment-variables)
6. [Usage](#-usage)
7. [API Endpoints](#-api-endpoints)
8. [How Short-Term Memory Works](#-how-short-term-memory-works)
9. [Demo](#-demo)
10. [Future Improvements](#-future-improvements)
11. [Contributing](#-contributing)
12. [License](#-license)

---

## 🚀 Features

- 💬 **Real-Time Chat** — Seamless communication between user and AI.
- 🧠 **Short-Term Memory** — Stores the last few messages in each session for contextual replies.
- ⚡ **Fast & Lightweight** — Minimal dependencies, quick setup.
- 🌐 **Full-Stack Implementation** — Both backend and frontend included.
- 🛠 **Customizable** — Extendable with new AI models or UI features.
- 🔄 **Session-Based Memory Reset** — Memory clears when session ends or server restarts.

---

## 📂 Project Structure

```
Ai-ChatBot/
│
├── backend/                # Node.js + Express server
│   ├── server.js           # Main server file
│   ├── routes/             # API routes
│   ├── controllers/        # Request handlers
│   ├── package.json
│   └── ...
│
├── frontend/               # Static files for UI
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/             # Images, icons, etc.
│
├── .env.example            # Example environment variables
└── README.md               # Documentation
```

---

## 🖥️ Tech Stack

**Frontend:**
- HTML5
- CSS3
- Vanilla JavaScript

**Backend:**
- Node.js
- Express.js

**AI Integration:**
- OpenAI API (or alternative LLM)

**Memory Management:**
- In-memory JavaScript array to store session history

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ashishkum25/Ai-ChatBot.git
cd Ai-ChatBot
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

### 3️⃣ Frontend Setup
If your frontend is static, no installation is required. If it's served with a dev server:
```bash
cd frontend
npm install
```

---

## 🌍 Environment Variables

Create a `.env` file in the backend folder:
```env
OPENAI_API_KEY=your_api_key_here
PORT=3000
```

---

## 📌 Usage

### Start Backend Server
```bash
cd backend
npm start
```

### Open Frontend
- For static files, open `frontend/index.html` in your browser.
- For dev server, run:
```bash
cd frontend
npm start
```

Then navigate to:
```
http://localhost:3000
```

---

## 📡 API Endpoints

| Method | Endpoint       | Description |
|--------|---------------|-------------|
| POST   | /api/message  | Sends a user message to the AI and returns the AI's response |

Request body example:
```json
{
  "message": "Hello, how are you?"
}
```

---

## 🧠 How Short-Term Memory Works

The backend maintains an **array** that stores the last few user and AI messages for each session.  
When a new message is sent:
1. The message is appended to the array.
2. If the array exceeds the maximum memory size (e.g., 5 messages), the oldest message is removed.
3. The context is sent along with the new message to the AI API.

This ensures **relevant context** without overloading the model with old data.

---

## 📷 Demo

*(Add screenshots or GIFs here)*

Example UI:
- Left side: Chat history
- Bottom: Input box + Send button
- Right side (optional): AI typing indicator

---

## 🛠 Future Improvements

- 🔹 Long-term memory using a database
- 🔹 Multiple conversation rooms
- 🔹 Voice input and output
- 🔹 Dark mode UI
- 🔹 User authentication system

---

## 🤝 Contributing

Contributions are welcome!  
1. Fork this repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added feature XYZ"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a pull request

---

## 📄 License

This project is licensed under the **MIT License**.

---

### ⭐ If you found this project useful, please consider giving it a star on GitHub!
