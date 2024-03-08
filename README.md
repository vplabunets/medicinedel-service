# Medicine Service

Welcome to the Medicine Delivery Service repository! This repository contains the backend part of the Medicine Delivery
project, which is developed using Node.js with Express and MongoDB✔️ as the database.

### Technologies Used

- Node.js: JavaScript runtime environment.
- Express: Web application framework for Node.js.
- MongoDB: NoSQL database for data storage.
- Mongoose: MongoDB object modeling for Node.js.
- Cors: Cross-Origin Resource Sharing middleware.
- And other dependencies listed in `package.json`.

### Overview

The Medicine Delivery Service provides API endpoints for managing items (medicines) and orders. It handles requests from
the frontend to perform CRUD operations on items and manage orders.

### API Endpoints

- **Items**:

  - `GET /api/items`: Get all items.
  - `POST /api/items`: Create a new item.
  - `GET /api/items/:id`: Get an item by ID.
  - `PUT /api/items/:id`: Update an item by ID.
  - `DELETE /api/items/:id`: Delete an item by ID.

- **Orders**:
  - `GET /api/orders`: Get all orders.
  - `POST /api/orders`: Create a new order.
  - `GET /api/orders/:id`: Get an order by ID.
  - `PUT /api/orders/:id`: Update an order by ID.
  - `DELETE /api/orders/:id`: Delete an order by ID.

### Dependencies

The backend is built using:

- cors: Cross-Origin Resource Sharing middleware.
- dotenv: Loads environment variables from a .env file.
- express: Web application framework for Node.js.
- http-errors: HTTP error utility.
- mongoose: MongoDB✔️ object modeling for Node.js.
- morgan: HTTP request logger middleware.

### Setup

To set up and run the Medicine Delivery Service locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/vplabunets/medicinedel-web.git
   git clone https://github.com/vplabunets/medicinedel-service.git
   ```
2. Navigate to each project directory and install dependencies:

   `npm install`

3. Start the backend servers:

   `npm start`

### Error Handling

The Medicine Delivery Service handles errors gracefully, including validation errors, invalid IDs, and internal server
errors.

### License

This project is licensed under the ISC License.
