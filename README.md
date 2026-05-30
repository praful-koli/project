# E-Commerce Product API

A comprehensive RESTful API designed for managing e-commerce products with secure authentication, image upload capabilities, category-based filtering, and complete CRUD operations.

Built using **Node.js**, **Express.js**, **MongoDB**, **JWT Authentication**, **Multer**, and **ImageKit**.

---

## Features

### Authentication

* User Registration
* User Login
* JWT-Based Authentication
* Password Hashing using Bcrypt

### Product Management

* Create Products
* Get All Products
* Get Product By ID
* Update Products
* Delete Products

### Image Uploads

* Multiple Image Upload Support
* Multer Integration
* Cloud Storage using ImageKit

### Validation & Security

* Request Validation using Express Validator
* Protected Routes
* Centralized Error Handling
* Clean Project Architecture

---

## Project Structure

```bash
E-commerce/server
│
├── src
│   ├── controllers
│   │   └── products.controller.js
│   ├── middlewares
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── validator.middleware.js
│   ├── models
│   │   ├── products.model.js
│   │   └── users.model.js
│   ├── routes
│   │   ├── auth.route.js
│   │   └── product.route.js
│   ├── services
│   │   ├── auth.services.js
│   │   └── products.services.js
│   ├── utils
│   │   ├── ApiError.js
│   │   └── asyncHandler.js
│   ├── validators
│   │   ├── product.validator.js
│   │   └── users.validator.js
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## Tech Stack

| Technology        | Usage                 |
| ----------------- | --------------------- |
| Node.js           | Runtime Environment   |
| Express.js        | Backend Framework     |
| MongoDB           | Database              |
| Mongoose          | ODM                   |
| JWT               | Authentication        |
| Bcrypt            | Password Hashing      |
| Multer            | File Upload Handling  |
| ImageKit          | Cloud Image Storage   |
| Express Validator | Request Validation    |
| Dotenv            | Environment Variables |

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/praful-koli/project.git
cd ecommerce/server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

### 4. Run Application

#### Development Mode

```bash
npm run dev
```

#### Production Mode

```bash
npm start
```

Server will run on:

```bash
http://localhost:3000
```

---

## Image Upload Workflow

This project utilizes **Multer Memory Storage** in combination with **ImageKit Cloud Storage** for efficient image handling and storage.

```text
Client
   ↓
Multer
   ↓
Memory Buffer
   ↓
ImageKit Upload
   ↓
Image URL Generated
   ↓
MongoDB Stores URLs
```

### Install Packages

```bash
npm install multer imagekit
```

### Multer Configuration

```js
import multer from "multer";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
});
```

### ImageKit Configuration

```js
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});
```

---

## Authentication Flow

```text
Register User
      ↓
Login User
      ↓
Receive JWT Token
      ↓
Add Token in Authorization Header
      ↓
Access Protected Routes
```

### Authorization Header

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## API Endpoints

### Authentication Routes

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |

### Product Routes

| Method | Endpoint            | Access    |
| ------ | ------------------- | --------- |
| GET    | `/api/products`     | Public    |
| GET    | `/api/products/:id` | Public    |
| POST   | `/api/products`     | Protected |
| PUT    | `/api/products/:id` | Protected |
| DELETE | `/api/products/:id` | Protected |

---

## Route Access

| Method | Endpoint             | Access    |
| ------ | -------------------- | --------- |
| POST   | `/api/auth/register` | Public    |
| POST   | `/api/auth/login`    | Public    |
| GET    | `/api/products`      | Public    |
| GET    | `/api/products/:id`  | Public    |
| POST   | `/api/products`      | Protected |
| PUT    | `/api/products/:id`  | Protected |
| DELETE | `/api/products/:id`  | Protected |

---

## Product Schema

```js
{
  name: {
    type: String,
    required: true
  },

  description: String,

  price: {
    type: Number,
    required: true
  },

  category: String,

  images: [String]

},
{
  timestamps: true
}
```

---

## User Schema

```js
{
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  }

},
{
  timestamps: true
}
```

---

## Validation Rules

### User Validation

| Field    | Rules                 |
| -------- | --------------------- |
| Name     | Required              |
| Email    | Required, Valid Email |
| Password | Minimum 6 Characters  |

### Product Validation

| Field       | Rules            |
| ----------- | ---------------- |
| Name        | Required         |
| Price       | Required, Number |
| Description | Optional         |
| Category    | Optional         |

---

## API Testing

All API endpoints can be tested using:

* Postman
* Thunder Client
* Insomnia

Ensure that a valid JWT token is included when accessing protected endpoints.

---

## Sample Protected Request

```http
POST /api/products
Authorization: Bearer YOUR_TOKEN
Content-Type: multipart/form-data
```

---

## Future Improvements

* Product Search
* Pagination
* Sorting
* Wishlist Feature
* Shopping Cart API
* Order Management
* Role-Based Authorization
* Refresh Token Authentication

---

## Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## License

This project was created as part of the **Kodex Backend Assignment** and is available for educational purposes.

---

## Author

**Praful Koli**

MCA Graduate | MERN Stack Developer

GitHub: https://github.com/praful-koli
