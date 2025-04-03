# Brainly Project

## Overview

Brainly is a full-stack application designed to manage and share content such as tweets, videos, and links. The project consists of a **client** built with React, TypeScript, and TailwindCSS, and a **server** built with Node.js, Express, and MongoDB.

---

## Features

### Client

- **User Authentication**: Signup and Signin functionality.
- **Content Management**:
  - Add, view, and delete content.
  - Filter content by type (Tweets, Videos, etc.).
- **Responsive UI**: Built with TailwindCSS for a modern and responsive design.
- **State Management**: Uses Recoil for global state management.
- **Toast Notifications**: Provides feedback for user actions using `react-hot-toast`.

### Server

- **Authentication**: JWT-based authentication for secure access.
- **Content API**:
  - Create, retrieve, update, and delete content.
- **Validation**: Input validation using `zod`.
- **Database**: MongoDB for storing user and content data.

---

## Tech Stack

### Client

- **React**: Frontend framework.
- **TypeScript**: Type-safe JavaScript.
- **TailwindCSS**: Utility-first CSS framework.
- **Vite**: Build tool for fast development.
- **Recoil**: State management library.

### Server

- **Node.js**: Backend runtime.
- **Express**: Web framework.
- **MongoDB**: Database.
- **Mongoose**: ODM for MongoDB.
- **Zod**: Input validation.
- **JWT**: Authentication.

---

## Directory Structure

### Client

```
brainly-client/
├── public/                # Static assets
├── src/                   # Source code
│   ├── Components/        # Reusable UI components
│   ├── Pages/             # Application pages
│   ├── store/             # Recoil atoms
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point
│   ├── index.css          # TailwindCSS styles
│   └── data.json          # Placeholder for data
├── tailwind.config.js     # TailwindCSS configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies and scripts
└── .gitignore             # Ignored files
```

### Server

```
brainly-server/
├── app/
│   ├── controller/        # Placeholder for controllers
│   ├── database/          # Database connection
│   ├── jwt/               # JWT authentication middleware
│   ├── model/             # Mongoose models
│   ├── routes/            # API routes
│   └── index.ts           # Main server file
├── .env                   # Environment variables
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies and scripts
└── .gitignore             # Ignored files
```

---

## API Endpoints

### User Routes

- `POST /signup`: User registration.
- `POST /signin`: User login.

### Content Routes

- `POST /content`: Add new content.
- `GET /content`: Get all content.
- `GET /content/:id`: Get specific content.
- `PUT /content/:id`: Update content.
- `DELETE /content`: Delete all content.
- `DELETE /content/:id`: Delete specific content.

---

## How to Run

### Prerequisites

- Node.js and npm installed.
- MongoDB connection string.

### Client

1. Navigate to `brainly-client/`.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

### Server

1. Navigate to `brainly-server/`.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Add a `.env` file with the following content:

   ```
   JWT_SECRET_KEY="your_secret_key"
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

---

## Future Improvements

- Implement sharing functionality in `/share` routes.
- Add controllers for better route handling.
- Enhance error handling and logging.
- Integrate client and server for seamless communication.
- Add more filters and sorting options for content.
