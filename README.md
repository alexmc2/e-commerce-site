# Wow-Store eCommerce Platform

Welcome to the Wow-Store, an eCommerce application built with the MERN stack! This is a portfolio project that showcases an online shopping experience, from product listings to user authentication and online payments. The backend is powered by Express and MongoDB, and the frontend was made with React, Redux, and Bootstrap.

[Live Site (initial load might be slow)](https://e-commerce-site-y0uv.onrender.com)

## Features:

### Orders:
- Create new orders.
- Payment functionality using PayPal sandbox.
- Retrieve all orders made by a logged-in user.
- Fetch specific order details by order ID.
- Update order status to 'paid'.
- Update order status to 'delivered'.
- Admin functionality to view all orders.

### Products:
- Fetch all products with pagination and search functionality.
- Retrieve details of a specific product by its ID.
- Admin functionality to create a new product with default sample data.
- Admin functionality to update product details.
- Admin functionality to delete a product.
- Users can post reviews for products.
- Top-rated products featured on a product carousel.

### Users:
- User authentication using json web tokens.
- Register a new user.
- Logout functionality that clears the authentication cookie.
- Fetch and update the profile of the logged-in user.
- Admin functionality to fetch all users.
- Admin functionality to fetch a user by ID.
- Admin functionality to delete a user.
- Admin functionality to update user details.



## Tech Stack:

- ![MongoDB](https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Express.js](https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
- ![Redux](https://img.shields.io/badge/-Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

![Screenshot1](https://github.com/alexmc2/e-commerce-site/issues/1)
![Screenshot2](https://github.com/alexmc2/e-commerce-site/issues/2)
![Screenshot3](https://github.com/alexmc2/e-commerce-site/issues/3)



## Backend Setup:

1. **Navigate to the root directory and install dependencies:**
    ```bash
    npm install
    ```

2. **Set up your environment variables in a .env file in the root directory:**
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PAYPAL_CLIENT_ID=your_paypal_client_id
    ```

3. **Populate the database with sample data:**
    ```bash
    npm run data:import
    ```

4. **Start the backend server:**
    ```bash
    npm run server
    ```

## Frontend Setup:

1. **Navigate to the frontend directory and install dependencies:**
    ```bash
    cd frontend && npm install
    ```

2. **Start the frontend development server:**
    ```bash
    npm start
    ```

## Running Both Frontend & Backend:

- **From the root directory, you can run both frontend and backend concurrently:**
    ```bash
    npm run dev
    ```

## Links:
- [Live Demo](https://e-commerce-site-y0uv.onrender.com/upload)
- [Report Issues](https://github.com/alexmc2/e-commerce-site/issues)



