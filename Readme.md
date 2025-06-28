# Brainly Project

## Overview

Brainly is a full-stack application for managing and sharing content such as tweets, videos, and links. It features a modern React client and a Node.js/Express server with MongoDB. The app supports user authentication, content management, sharing, and a responsive UI with dark mode.

---

## Features

### Client Features

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Authentication**     | Signup, Signin, and Change Password with JWT-based secure access.            |
| **Content Management** | Add, view, edit, delete, and filter content by type (Tweets, Videos, etc.).  |
| **Responsive UI**      | Built with TailwindCSS for a modern, mobile-friendly design.                 |
| **Dark Mode**          | Toggle between light and dark themes.                                       |
| **State Management**   | Uses Recoil for global state management.                                     |
| **Toast Notifications**| User feedback via `react-hot-toast`.                                         |
| **Dynamic Sidebar**    | Navigate between Dashboard, Videos, Tweets, and Profile.                     |
| **Content Sharing**    | Share content links with tags and generate sharable links.                   |
| **Copy to Clipboard**  | Copy links to clipboard with visual feedback.                                |
| **Edit Functionality** | Fetches and displays previous values for editing content.                    |
| **No Content Page**    | Placeholder page when no content is available in dashboards.                 |
| **Profile Page**       | View and update user profile and password.                                   |
| **Shared Page**        | View content shared by other users via unique links.                         |
| **Tabs & Dialogs**     | Modern UI elements for navigation and actions.                               |
| **Form Validation**    | Client-side validation for all forms.                                        |
| **Loading States**     | Visual feedback during async operations.                                     |
| **Error Handling**     | User-friendly error messages and fallback UI.                                |
| **Mobile Navigation**  | Optimized navigation and layout for mobile devices.                          |

### Server Features

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Authentication**     | JWT-based authentication for secure access.                                 |
| **Content API**        | Create, retrieve, update, and delete content.                               |
| **Validation**         | Input validation using `zod`.                                               |
| **Database**           | MongoDB for storing user and content data.                                  |
| **Error Handling**     | Comprehensive error handling and logging.                                    |
| **Sharing API**        | Enable/disable sharing and generate unique sharable links.                  |
| **Change Password**    | Secure password update endpoint.                                            |
| **CORS Support**       | Configurable CORS for secure cross-origin requests.                         |
| **Rate Limiting**      | (Optional) Prevent abuse of API endpoints.                                  |

---

## UI Elements & Components

- **Navbar & Sidebar**: Persistent navigation with theme toggle and user menu.
- **Tabs**: Switch between Tweets, Videos, Dashboard, and Profile.
- **Cards**: Display content with previews (YouTube, Twitter embeds, etc.).
- **Modals/Dialogs**: For editing, deleting, and confirming actions.
- **Forms**: For login, signup, content creation, and password change.
- **Badges & Labels**: Tag content and indicate status.
- **Switches**: Toggle sharing and dark mode.
- **Alerts/Toasts**: Instant feedback for user actions.
- **Loading Spinners**: Indicate background activity.
- **Responsive Layout**: Adapts to all screen sizes.
- **Theme Support**: Light/dark mode with smooth transitions.
- **Error Boundaries**: Catch and display errors gracefully.

---

## API Endpoints

### User Routes

| Method | Endpoint           | Description                        |
|--------|--------------------|------------------------------------|
| POST   | `/signup`          | User registration.                 |
| POST   | `/signin`          | User login.                        |
| POST   | `/changepassword`  | Change user password.              |
| GET    | `/profile`         | Get user profile info.             |
| PUT    | `/profile`         | Update user profile info.          |

### Content Routes

| Method | Endpoint           | Description                        |
|--------|--------------------|------------------------------------|
| POST   | `/content`         | Add new content.                   |
| GET    | `/content`         | Get all content.                   |
| GET    | `/content/:id`     | Get specific content.              |
| PUT    | `/content/:id`     | Update content.                    |
| DELETE | `/content`         | Delete all content.                |
| DELETE | `/content/:id`     | Delete specific content.           |

### Sharing Routes

| Method | Endpoint           | Description                        |
|--------|--------------------|------------------------------------|
| POST   | `/shareon`         | Enable sharing for user content.   |
| POST   | `/shareoff`        | Disable sharing.                   |
| GET    | `/shareon`         | Get sharing status.                |
| GET    | `/share/:id`       | Access shared content by link.     |

### Other

| Method | Endpoint           | Description                        |
|--------|--------------------|------------------------------------|
| GET    | `/health`          | Health check for server.           |

---

## Directory Structure

### Client

```
brainly-client/
├── public/
├── src/
│   ├── components/   # UI components (Navbar, Sidebar, UI, etc.)
│   ├── lib/          # Utility functions
│   ├── pages/        # Page components (Dashboard, Tweets, Videos, etc.)
│   ├── store/        # State management (Recoil atoms)
```

### Server

```
brainly-server/
├── app/
│   ├── controller/   # Route controllers
│   ├── database/     # DB connection
│   ├── jwt/          # JWT utilities
│   ├── model/        # Mongoose models
│   ├── routes/       # Express routes
```

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
3. Add a `.env` file with:
   ```
   JWT_SECRET_KEY="your_secret_key"
   MONGODB_URI="your_mongo_db_url"
   CORS_ORIGIN="http://localhost:5173"
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
- **Change Password**: Allows users to securely update their passwords.
- **Profile**: View and update user profile information.

### Content Management
- **Add Content**: Users can add content with a title, link, and tags.
- **View Content**: Content is displayed in a card layout with embedded previews for YouTube and Twitter links.
- **Edit Content**: Fetches and displays previous values for editing.
- **Delete Content**: Users can delete individual or all content.
- **Filter/Sort**: Filter and sort content by type and tags.
- **No Content Page**: Displays a placeholder page when no content is available.

### Sharing
- **Enable Sharing**: Generates a unique link for sharing all user content.
- **Disable Sharing**: Revokes the sharing link.
- **Access Shared Content**: View shared content using the unique link.

### UI/UX
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Optimized for all screen sizes.
- **Sidebar Navigation**: Easily navigate between different sections.
- **Toast Notifications**: Provides instant feedback for user actions.
- **Dialogs/Modals**: For editing, deleting, and confirming actions.
- **Tabs**: For switching between content types.
- **Loading States**: Visual feedback during async operations.
- **Error Boundaries**: Catch and display errors gracefully.

### Developer Experience
- **TypeScript**: Type safety across client and server.
- **Vite**: Fast development and hot reloading.
- **Linting**: ESLint for code quality.
- **Environment Variables**: Secure config for API and DB.
- **API Proxy**: Vite proxy for local API development.

---

## Recent Updates

### New Features
- **Change Password**: Users can securely change their passwords.
- **No Content Here Page**: Placeholder for empty dashboards.
- **Edit Functionality**: Fetches and displays previous values for editing.
- **Improved Navigation**: Redesigned navigation for Videos, Tweets, and Dashboard.

### Bug Fixes
- Removed warnings and errors from the console.
- Eliminated unnecessary logs for better performance.

---

## Future Improvements
- More filters and sorting options for content.
- Advanced search functionality.
- Enhanced error handling and logging.
- Unit and integration tests.
- Improved UI/UX for better user interaction.
- Analytics for shared content.
- Rate limiting and security enhancements.

---

## Acknowledgments
- **React**: Frontend framework.
- **TailwindCSS**: Modern, responsive design.
- **MongoDB**: Database.
- **Express**: Backend framework.
- **Zod**: Input validation.
- **Recoil**: State management.
- **React Icons**: Modern icons.
- **React Hot Toast**: Toast notifications.


