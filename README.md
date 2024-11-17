# README for Mini CRM & Campaign Management App  

## Overview  
This project is a simplified Customer Relationship Management (CRM) and Campaign Management system designed to help users interact effectively with their customer base. The application implements core functionalities like data ingestion, audience segmentation, campaign management, and personalized messaging. It showcases scalable and efficient backend APIs, an intuitive frontend interface, and a pub-sub architecture for handling large data volumes.

## Key Features  
1. **Data Ingestion API**  
   - RESTful APIs to validate, ingest, and store customer and order data in a relational database.  
   - Scalable design with an optional pub-sub model for separating data validation and storage processes.  

2. **Audience Management**  
   - Dynamic audience segmentation with conditional filtering using AND/OR logic.  
   - Real-time audience size calculation before saving segments.  

3. **Campaign Management**  
   - Google-based authentication for secure access to the web app.  
   - Past campaign history display with statistics for sent campaigns.  
   - Dummy messaging API to send personalized messages to audiences, integrated with a "Delivery Receipt" API for tracking message statuses (SENT/FAILED).  

4. **Scalability and Efficiency**  
   - Pub-sub architecture for batched updates of delivery statuses.  
   - Statistics display on the campaign dashboard, including audience size and message delivery metrics.  

## Tech Stack  
### **Tech Stack**

The **CRM Frontend** application is built using the following technologies:

---

### **Frontend**
1. **React.js**:
   - Core framework for building the user interface.
   - Component-based architecture for scalability and reusability.

2. **React Router**:
   - For routing and navigation between pages.

3. **CSS**:
   - Used for styling the application.
   - Includes a global stylesheet (`App.css`) and component-specific styles.

4. **JavaScript (ES6)**:
   - Modern JavaScript syntax for building dynamic functionality.

5. **HTML5**:
   - Used for structuring the UI.

---

### **Backend (Integrated via APIs)**
1. **Node.js**:
   - Backend runtime for handling API requests.

2. **Express.js**:
   - Web framework for building RESTful APIs.

3. **MySQL**:
   - Relational database to store customers, campaigns, orders, and message logs.
   - Hosted locally using **XAMPP** (or optionally migrated to the cloud).

4. **Google OAuth**:
   - For secure authentication using Google accounts.

---

### **Development Tools**
1. **Postman**:
   - For testing backend APIs during development.

2. **XAMPP**:
   - For hosting the MySQL database locally.

3. **npm**:
   - Node package manager for managing dependencies and scripts.

4. **Vercel**:
   - Deployment platform for the frontend.

---

## Demonstration  
- Postman collection for API testing and validation.  
- Web application showcasing audience segmentation, campaign management, and statistics.  
- Deployed application link for live testing.  

This project evaluates API design, frontend development, batch processing, database optimization, and the creative implementation of scalable architecture.
