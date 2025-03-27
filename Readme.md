# Brainly Project Documentation

## Overview

The Brainly project is a full-stack application consisting of a **client** and a **server**. The client is built using React, TypeScript, and TailwindCSS, while the server is built using Node.js, Express, and MongoDB.

---

## Client

### Tech Stack
- **React**: Frontend framework.
- **TypeScript**: Type-safe JavaScript.
- **TailwindCSS**: Utility-first CSS framework.
- **Vite**: Build tool for fast development.

### Directory Structure
```
brainly-client/
├── public/                # Static assets
├── src/                   # Source code
│   ├── Components/        # Reusable UI components
│   ├── Pages/             # Application pages
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point
│   ├── index.css          # TailwindCSS styles
│   └── data.json          # Placeholder for data
├── tailwind.config.js     # TailwindCSS configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # TypeScript app-specific config
├── tsconfig.node.json     # TypeScript node-specific config
├── package.json           # Project dependencies and scripts
└── .gitignore             # Ignored files
```

### Key Components
1. **Components**:
   - `Button`: Reusable button component with primary and secondary styles.
   - `Navbar`: Top navigation bar with buttons for sharing and adding content.
   - `Sidebar`: Sidebar with navigation items like Tweets, Videos, Links, and Tags.
   - `Card`: Displays content like videos, tweets, and links with tags and metadata.
   - `Input`: Reusable input field component.

2. **Pages**:
   - `Signup`: User registration form.
   - `Signin`: User login form.
   - `Dashboard`: Displays user content in a card layout.
   - `AddContent`: Modal for adding new content.
   - `Layout`: Wrapper for routing.

3. **Routing**:
   - Uses `react-router-dom` for navigation.
   - Routes:
     - `/`: Signup page.
     - `/signin`: Signin page.
     - `/dashboard`: Dashboard page.

4. **Styling**:
   - TailwindCSS is used for styling.
   - Custom colors are defined in `tailwind.config.js`.

5. **State Management**:
   - Local state is managed using React's `useState`.

---

## Server

### Tech Stack
- **Node.js**: Backend runtime.
- **Express**: Web framework.
- **MongoDB**: Database.
- **Mongoose**: ODM for MongoDB.
- **Zod**: Input validation.
- **JWT**: Authentication.

### Directory Structure
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

### Key Features
1. **Authentication**:
   - **Signup**: Validates user input, hashes passwords, and stores user data.
   - **Signin**: Verifies credentials and generates JWT tokens.

2. **Content Management**:
   - **Create Content**: Adds new content with title, link, and tags.
   - **Retrieve Content**:
     - Fetch all content created by the user.
     - Fetch specific content by ID.
   - **Update Content**: Updates content details.
   - **Delete Content**:
     - Delete all content created by the user.
     - Delete specific content by ID.

3. **JWT Authentication**:
   - Middleware (`jwtAuth`) verifies JWT tokens and protects routes.

4. **Database**:
   - MongoDB is used as the database.
   - Models:
     - `UserModel`: Stores user data.
     - `ContentModel`: Stores content data.
     - `LinkModel`: Placeholder for link-related data.

5. **Validation**:
   - `zod` is used for schema validation.

6. **Environment Variables**:
   - Stored in `.env` file (e.g., `JWT_SECRET_KEY`).

### API Endpoints
- **User Routes**:
  - `POST /signup`: User registration.
  - `POST /signin`: User login.
- **Content Routes**:
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

---

## License
This project is licensed under the MIT License.