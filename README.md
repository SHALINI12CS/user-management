# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

User Management Template

This project is a simple React-based authentication system with login functionality, protected routes, and session-based access control.

1️⃣ Basic Level: Setup & Installation

Prerequisites

Node.js (v14 or later recommended)

npm or yarn

Installation

# Clone the repository
git clone <repo-url>
cd <project-folder>

# Install dependencies
npm install   # or yarn install

# Start the development server
npm start     # or yarn start

This will run the application on http://localhost:3000/.

2️⃣ Intermediate Level: Project Structure & Usage

Folder Structure

📂 project-folder
 ├── 📂 src
 │   ├── 📂 pages
 │   │   ├── LoginPage.js
 │   │   ├── UsersPage.js
 │   │   ├── EditUserPage.js
 │   ├── App.js
 │   ├── index.js
 │   ├── api.js (Optional API service file)
 ├── 📜 package.json
 ├── 📜 README.md

Usage

LoginPage: Users log in with their credentials. A valid login stores the token in sessionStorage.

UsersPage: Accessible only after login. Fetches and displays user details.

EditUserPage: Edit user details, protected by authentication.

3️⃣ Advanced Level: API Handling & Security

API Endpoints Used

POST https://reqres.in/api/login → Logs in the user.

GET https://reqres.in/api/users → Fetches user data (mock API).

Security Best Practices

Session-Based Authentication: Uses sessionStorage instead of localStorage for better security.

State Management: React useState dynamically updates authentication status.

Route Protection: Uses Navigate from React Router to prevent unauthorized access





Github Link: https://github.com/SHALINI12CS/user-management.git
Netlify Link : https://usermanaging.netlify.app/

