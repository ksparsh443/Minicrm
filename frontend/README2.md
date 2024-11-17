Here's a restructured and polished version of your README file:

---

# Frontend for CRM Application

This project is the frontend of a CRM application built using **React.js**, providing an intuitive interface for managing customers, campaigns, orders, and audience segmentation. Below, you'll find the project structure, key features, setup instructions, and development guidelines.

---

## Project Structure

```
frontend/
├── node_modules/         # Dependencies
├── public/               # Public assets
├── src/                  # Main source code
│   ├── components/       # React components
│   │   ├── Audience.js       # Audience management
│   │   ├── Auth.js           # Google authentication UI
│   │   ├── Campaign.js       # Campaign creation and management
│   │   ├── Customer.js       # Customer management
│   │   ├── Dashboard.js      # Dashboard with stats and navigation
│   │   ├── Message.js        # Message sending and tracking
│   │   ├── Navbar.js         # Navigation bar
│   │   └── Order.js          # Order management
│   ├── App.css           # Global styles
│   ├── App.js            # Main application component
│   ├── App.test.js       # Unit tests for components
│   ├── index.css         # Base CSS styles
│   ├── index.js          # React app entry point
│   ├── logo.svg          # Application logo
│   ├── reportWebVitals.js # Performance metrics
│   └── setupTests.js      # Test configuration
├── .env                  # Environment variables
├── .gitignore            # Git ignored files/folders
└── package-lock.json     # Dependency lock file
```

---

## Key Features

- **Dashboard:** Displays statistics and navigation links for various features.
- **Audience Management:** Define audience segments with dynamic filters and real-time size calculation.
- **Campaign Management:** Create campaigns and view campaign history.
- **Customer Management:** Add, view, and update customer details with seamless backend integration.
- **Order Management:** Manage and track customer orders.
- **Message Sending:** Send personalized messages to audiences and track their delivery status.
- **Google Authentication:** Secure login using Google OAuth.

---

## Setup Instructions

### 1. Prerequisites
- **Node.js** and **npm** installed.
- A running backend service (API endpoints must be configured).
- A `.env` file with the following content:
  ```env
  REACT_APP_BACKEND_URL=http://localhost:5000
  ```

### 2. Install Dependencies
Navigate to the `frontend/` directory and run:
```bash
npm install
```

### 3. Start the Development Server
To start the application locally:
```bash
npm start
```
The application will be available at **[http://localhost:3000](http://localhost:3000)**.

### 4. Build for Production
To generate an optimized production build:
```bash
npm run build
```
The build files will be located in the `build/` directory.

---

## Components Overview

### 1. Dashboard (`Dashboard.js`)
- Displays key statistics and navigation options.

### 2. Navbar (`Navbar.js`)
- Provides persistent navigation across the application.

### 3. Customers (`Customer.js`)
- Interface for managing customer details.
- Integrated with backend APIs for real-time data updates.

### 4. Campaigns (`Campaign.js`)
- Enables creation of marketing campaigns.
- Displays campaign history for tracking.

### 5. Audience Management (`Audience.js`)
- Allows definition of audience segments with dynamic filters.
- Calculates audience size in real-time.

### 6. Messages (`Message.js`)
- Interface for composing and sending personalized messages.
- Tracks delivery status and communication logs.

### 7. Orders (`Order.js`)
- Handles customer order creation and management.

### 8. Authentication (`Auth.js`)
- Google-based OAuth login for secure authentication.

---

## Deployment

### Deploying on Vercel
1. Install the Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```
2. Deploy the application:
   ```bash
   vercel
   ```
3. Ensure `.env` variables are configured in Vercel's project settings.

---



---

---



---

## Screenshots
![image](https://github.com/user-attachments/assets/3338db08-c9b4-4b34-9622-a94994b299ff)

![image](https://github.com/user-attachments/assets/c31b8116-bdc8-4009-a63c-98b21cfc5006)

![image](https://github.com/user-attachments/assets/62e030f9-79fe-46b3-b662-363086f11e37)

![image](https://github.com/user-attachments/assets/a9611fa3-a069-4d93-9c3a-224963833bf8)

![image](https://github.com/user-attachments/assets/a178a695-5e85-44d3-a6b4-f39d1e2a8ab4)

