# **BACKEND Explaination**

This part provides a comprehensive API system for managing audiences, customers, campaigns, and messages for a CRM application. Below are the key APIs and their functionality.

---

## **1. Audience Size API**

### **Overview**
Calculate audience size dynamically based on user-defined conditions.

### **Endpoint**
- **URL**: `http://localhost:5000/api/audience`
- **Method**: `POST`

### **Request Body**
```json
{
  "conditions": [
    { "field": "totalSpending", "operator": ">", "value": 10000 },
    { "logic": "AND", "field": "visits", "operator": "<=", "value": 3 },
    { "logic": "AND", "field": "lastVisit", "operator": "<", "value": "2024-08-01" }
  ]
}
```

### **Response**
```json
{
  "audienceSize": 25
}
```

### **Features**
- Flexible condition building.
- SQL injection-safe parameterized queries.


 ![image](https://github.com/user-attachments/assets/fd4f7c77-b10c-478b-9eeb-9c5e2c252aaf)
---

## **2. Customer API**

### **Overview**
Add and retrieve customer details stored in the `customers` table.

### **Endpoints**

#### **Create a Customer**
- **URL**: `http://localhost:5000/api/customer`
- **Method**: `POST`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "totalSpending": 15000,
  "visits": 5,
  "lastVisit": "2024-11-01"
}
```

**Response**:
```json
{
  "message": "Customer added",
  "customerId": 1
}
```

#### **Retrieve All Customers**
- **URL**: `http://localhost:5000/api/customer`
- **Method**: `GET`

**Response**:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "totalSpending": 15000,
    "visits": 5,
    "lastVisit": "2024-11-01"
  }
]
```
![image](https://github.com/user-attachments/assets/20c8e8e1-fb5c-4a48-ad5f-428abeee2d10)

![image](https://github.com/user-attachments/assets/19531ab2-4d94-4293-97f9-b528f5cd6042)

---

## **3. Campaign API**

### **Overview**
Manage campaigns and retrieve their history.

### **Endpoints**

#### **Create a Campaign**
- **URL**: `http://localhost:5000/api/campaigns`
- **Method**: `POST`

**Request Body**:
```json
{
  "name": "Discount Campaign",
  "audienceId": 1,
  "messageTemplate": "Hi [Name], enjoy 10% off!"
}
```

**Response**:
```json
{
  "campaignId": 1,
  "message": "Campaign created successfully"
}
```

#### **List Campaigns**
- **URL**: `http://localhost:5000/api/campaigns`
- **Method**: `GET`

**Response**:
```json
[
  {
    "id": 1,
    "name": "Discount Campaign",
    "audience_id": 1,
    "message_template": "Hi [Name], enjoy 10% off!"
  }
]
```
![image](https://github.com/user-attachments/assets/0653ccf3-e7f0-4df8-99d9-d7b91e16abef)

---

## **4. Message Sending API**

### **Overview**
Send personalized messages and log their status.

### **Endpoints**

#### **Send Messages**
- **URL**: `http://localhost:5000/api/message/send`
- **Method**: `POST`

**Request Body**:
```json
{
  "campaignId": 1
}
```

**Response**:
```json
{
  "messages": [
    { "email": "john.doe@example.com", "status": "SENT" },
    { "email": "jane.smith@example.com", "status": "FAILED" }
  ]
}
```
![image](https://github.com/user-attachments/assets/256331c4-6fba-4320-8130-ef3f3c7ac3b2)


#### **Delivery Receipt**
- **Automatically updates message status in `communications_log`.**

---

## **5. Statistics API**

### **Overview**
Fetch overall CRM statistics, including customer count, campaign count, and messages sent.

### **Endpoint**
- **URL**: `http://localhost:5000/api/stats`
- **Method**: `GET`

**Response**:
```json
{
  "customers": 11,
  "campaigns": 5,
  "messages": 8
}
```
![image](https://github.com/user-attachments/assets/eed2928b-a5b7-43e6-84cc-f414513cfd02)

---


## **6. Order API**
![image](https://github.com/user-attachments/assets/da10fdc8-1d50-4de2-a093-62797749289c)
### **Overview**
This API allows adding a new order by specifying the customer ID and order amount. The order is stored in the `orders` table.

---

### **Endpoint**
- **URL**: `http://localhost:5000/api/order`  
- **Method**: `POST`

---

### **Request**

#### **Request Body**:
The API expects a JSON payload with the following fields:
- **customerId** (integer): ID of the customer placing the order (required).
- **amount** (decimal): The order amount (required).

**Example Request Body**:
```json
{
  "customerId": 1,
  "amount": 1000.50
}
```

---

### **Response**

#### **Success Response**:
```json
{
  "message": "Order added",
  "orderId": 1
}
```

#### **Error Response**:
```json
{
  "message": "Error adding order",
  "error": {
    "code": "ER_BAD_FIELD_ERROR",
    "message": "Unknown column 'customer_id' in 'field list'"
  }
}
```

---


## **6.Google AUTH API**

1. **Login with Google**  
   - **URL**: `http://localhost:5000/api/auth/google`  
   - **Method**: `GET`  
   - **Description**: Redirects the user to Google's authentication page to log in.

2. **Callback**  
   - **URL**: `http://localhost:5000/api/auth/callback`  
   - **Method**: `GET`  
   - **Description**: Handles the callback after the user logs in with Google.  

3. **Logout**  
   - **URL**: `http://localhost:5000/api/auth/logout`  
   - **Method**: `GET`  
   - **Description**: Logs the user out of the application.

4. **Authentication Failure**  
   - **URL**: `http://localhost:5000/api/auth/failure`  
   - **Method**: `GET`  
   - **Description**: Displays an error message when authentication fails.

---

### **Postman Testing Steps**

#### 1. **Login with Google**
   - **Request**:
     - **Method**: `GET`
     - **URL**: `http://localhost:5000/api/auth/google`
   - **Action**: Redirects to Google's login page.  
   - **Expected Behavior**: User logs in with Google, and the application redirects to the callback URL.

---

#### 2. **Callback**
   - **Request**:
     - **Method**: `GET`
     - **URL**: `http://localhost:5000/api/auth/callback`
   - **Action**: Automatically triggered after Google login.
   - **Expected Behavior**: Returns user data and confirms successful authentication.
   - **Example Response**:
     ```json
     {
       "message": "User authenticated successfully",
       "user": {
         "id": "1234567890",
         "displayName": "John Doe",
         "emails": [
           {
             "value": "johndoe@gmail.com"
           }
         ]
       }
     }
     ```

---

#### 3. **Logout**
   - **Request**:
     - **Method**: `GET`
     - **URL**: `http://localhost:5000/api/auth/logout`
   - **Expected Behavior**: Logs the user out of the application.
   - **Example Response**:
     ```json
     {
       "message": "User logged out successfully"
     }
     ```

---

#### 4. **Authentication Failure**
   - **Request**:
     - **Method**: `GET`
     - **URL**: `http://localhost:5000/api/auth/failure`
   - **Expected Behavior**: Displays an error message indicating login failure.
   - **Example Response**:
     ```json
     {
       "message": "Authentication failed"
     }
     ```
![image](https://github.com/user-attachments/assets/2cc3087b-f8d4-4f3a-b6f2-bbae1bcb650d)
![image](https://github.com/user-attachments/assets/b06df162-05de-4c6a-a0f6-184a6d9aae8a)

---

### **How It Works**
1. **Login**: User accesses the `/api/auth/google` endpoint to log in via Google.
2. **Callback**: Once authenticated, Google redirects to `/api/auth/callback` with user details.
3. **Logout**: User accesses `/api/auth/logout` to clear the session.
4. **Failure Handling**: If login fails, the user is redirected to `/api/auth/failure`.

![image](https://github.com/user-attachments/assets/63658b9c-61ee-42fc-9955-51799bf6270d)

---



## **Testing Instructions**

### **Using Postman**
1. Open Postman and set the appropriate endpoint.
2. For `POST` requests, provide the required JSON body in the **Body** tab.
3. Send the request and view the response.

---


---


## ** Local MySQL Database Setup**

### **Overview**
 We used the **XAMPP Control Panel** to host the MySQL server and create the necessary tables for the application. The database manages customers, campaigns, orders, and communications effectively.

---

### **Hosting Details**
- **Tool Used**: [XAMPP Control Panel](https://www.apachefriends.org/index.html)
- **Modules Started**: 
  - **Apache**: To enable local hosting and PHPMyAdmin access.
  - **MySQL**: To host the database server locally.

---

### **Steps to Setup the Database**

1. **Start MySQL Server**:
   - Open the XAMPP Control Panel.
   - Start the **Apache** and **MySQL** modules.
   - Verify that the server is running at `http://localhost/phpmyadmin`.

2. **Create the Database**:
   - Navigate to `http://localhost/phpmyadmin`.
   - Create a new database named **`crm`**.

3. **Define Tables**:
   - The following tables were created to manage CRM data:
     - `customers`
     - `audience`
     - `campaigns`
     - `communications_log`
     - `orders`

---

### **Database Tables**

#### 1. **`customers`**
   - **Purpose**: Store customer information.
   - **Columns**:
     | Column         | Type        | Description                  |
     |----------------|-------------|------------------------------|
     | `id`           | INT (PK)    | Unique customer ID.          |
     | `name`         | VARCHAR(255)| Customer name.               |
     | `email`        | VARCHAR(255)| Email address.               |
     | `totalSpending`| DECIMAL     | Total amount spent.          |
     | `visits`       | INT         | Number of visits.            |
     | `lastVisit`    | DATE        | Last visit date.             |

---

#### 2. **`audience`**
   - **Purpose**: Manage audience segments for campaigns.
   - **Columns**:
     | Column     | Type        | Description                    |
     |------------|-------------|--------------------------------|
     | `id`       | INT (PK)    | Unique audience segment ID.    |
     | `name`     | VARCHAR(255)| Audience segment name.         |
     | `criteria` | TEXT        | Conditions for segmentation.   |

---

#### 3. **`campaigns`**
   - **Purpose**: Store marketing campaigns.
   - **Columns**:
     | Column           | Type        | Description                        |
     |------------------|-------------|------------------------------------|
     | `id`             | INT (PK)    | Unique campaign ID.               |
     | `name`           | VARCHAR(255)| Campaign name.                    |
     | `audience_id`    | INT (FK)    | Audience segment (from `audience`).|
     | `message_template`| TEXT       | Campaign message.                 |
     | `created_date`   | TIMESTAMP   | Campaign creation timestamp.      |

---

#### 4. **`communications_log`**
   - **Purpose**: Log messages sent to customers.
   - **Columns**:
     | Column        | Type        | Description                        |
     |---------------|-------------|------------------------------------|
     | `id`          | INT (PK)    | Unique log ID.                    |
     | `customer_id` | INT (FK)    | Customer ID (from `customers`).   |
     | `email`       | VARCHAR(255)| Recipient's email address.        |
     | `message`     | TEXT        | Message content.                  |
     | `status`      | ENUM        | `SENT` or `FAILED` delivery status|

---

#### 5. **`orders`**
   - **Purpose**: Track customer orders.
   - **Columns**:
     | Column        | Type        | Description                        |
     |---------------|-------------|------------------------------------|
     | `id`          | INT (PK)    | Unique order ID.                  |
     | `customer_id` | INT (FK)    | Customer ID (from `customers`).   |
     | `amount`      | DECIMAL     | Order total.                      |
     | `order_date`  | DATE        | Date of order placement.          |

---

### **Configuration in Code**
- **Database Connection File** (`config/database.js`):
   ```javascript
   const mysql = require('mysql2');
   const db = mysql.createPool({
     host: 'localhost',
     user: 'root', // Default user
     password: '', // Default password (blank for XAMPP)
     database: 'crm',
   });
   module.exports = db;
   ```

- **Ensure** the `database.js` file uses the correct credentials.

---

### **Testing the Setup**
- Open `http://localhost/phpmyadmin`.
- Verify that the `crm` database and the tables are correctly created.
- Use tools like Postman to test the backend APIs and ensure proper integration with the database.

---

### **Notes**
- Always start the **Apache** and **MySQL** modules in XAMPP before running the application.
- Keep the `.env` file updated with the correct database credentials:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=crm


![image](https://github.com/user-attachments/assets/52292992-43e1-4f8b-b5bf-a8dac97915c7)

![image](https://github.com/user-attachments/assets/16c8e8b0-8ff5-4f71-b2d1-6fb1c52a189a)

![image](https://github.com/user-attachments/assets/59d571a8-c343-40f5-9741-59476f474085)

![image](https://github.com/user-attachments/assets/bf046468-8123-41da-8cf3-5e49b97aa9d9)

![image](https://github.com/user-attachments/assets/6f59e214-8342-4608-bfe8-5a2fff8ff386)

![image](https://github.com/user-attachments/assets/69024142-0165-490b-8d2d-5f8fba4a4ee3)


   


   ```
