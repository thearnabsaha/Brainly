# Brainly Project

## Overview

Brainly is a full-stack application designed to manage and share content such as tweets, videos, and links. The project consists of a **client** built with React, TypeScript, and TailwindCSS, and a **server** built with Node.js, Express, and MongoDB. The application supports user authentication, content management, and a responsive UI with dark mode.

---

## Features

### Client

- **User Authentication**: Signup and Signin functionality with form validation using `zod`.
- **Content Management**:
  - Add, view, and delete content.
  - Filter content by type (Tweets, Videos, etc.).
  - Tag-based categorization for better organization.
- **Responsive UI**: Built with TailwindCSS for a modern and responsive design.
- **State Management**: Uses Recoil for global state management.
- **Toast Notifications**: Provides feedback for user actions using `react-hot-toast`.
- **Dark Mode**: Toggle between light and dark themes.
- **Dynamic Sidebar**: Navigate between dashboard, videos, and tweets.
- **Content Sharing**: Share content links with tags and generate sharable links.
- **Copy to Clipboard**: Easily copy links to the clipboard with visual feedback.

### Server

- **Authentication**: JWT-based authentication for secure access.
- **Content API**:
  - Create, retrieve, update, and delete content.
- **Validation**: Input validation using `zod`.
- **Database**: MongoDB for storing user and content data.
- **Error Handling**: Improved error handling for better debugging.
- **Sharing API**:
  - Enable or disable sharing of user content.
  - Generate unique sharable links for content.

---

## Tech Stack

### Client

- **React**: Frontend framework.
- **TypeScript**: Type-safe JavaScript.
- **TailwindCSS**: Utility-first CSS framework.
- **Vite**: Build tool for fast development.
- **Recoil**: State management library.
- **React Router**: For routing and navigation.
- **React Icons**: For modern and customizable icons.

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
...existing code...
```

### Server

```
brainly-server/
...existing code...
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

### Sharing Routes

- `POST /shareon`: Enable sharing and generate a unique link.
- `POST /shareoff`: Disable sharing.
- `GET /shareon`: Get sharing status and link.
- `GET /share/:id`: Access shared content by ID.

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
   MONGODB_URI="your_mongo_db_url"
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

---

## Features in Detail

### Authentication

- **Signup**: Validates user input using `zod` and stores hashed passwords in MongoDB.
- **Signin**: Verifies credentials and generates a JWT token for secure access.

### Content Management

- **Add Content**: Users can add content with a title, link, and tags.
- **View Content**: Content is displayed in a card layout with embedded previews for YouTube and Twitter links.
- **Delete Content**: Users can delete individual or all content.

### Sharing

- **Enable Sharing**: Generates a unique link for sharing all user content.
- **Disable Sharing**: Revokes the sharing link.
- **Access Shared Content**: View shared content using the unique link.

### UI/UX

- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Optimized for all screen sizes.
- **Sidebar Navigation**: Easily navigate between different sections.
- **Toast Notifications**: Provides instant feedback for user actions.

---

## Future Improvements

- Add more filters and sorting options for content.
- Implement advanced search functionality.
- Enhance error handling and logging.
- Add unit and integration tests.
- Improve UI/UX for better user interaction.
- Add analytics for shared content.

---

## Acknowledgments

- **React**: For the frontend framework.
- **TailwindCSS**: For the beautiful and responsive design.
- **MongoDB**: For the database.
- **Express**: For the backend framework.
- **Zod**: For input validation.
- **Recoil**: For state management.
- **React Icons**: For modern icons.
- **React Hot Toast**: For toast notifications.
