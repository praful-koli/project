# E-Commerce Product API

REST API for managing products in an e-commerce application.

This project is built using Node.js, Express.js, MongoDB, JWT, Multer, and ImageKit. It provides user authentication, product management, image uploads, and category-based filtering.

## Features

* User registration and login
* JWT authentication
* Create, update, delete, and fetch products
* Upload multiple product images
* Store images using ImageKit
* Filter products by category
* Request validation using express-validator
* Centralized error handling

## Project Structure

```text
server
│
├── src
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── validators
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Bcrypt
* Multer
* ImageKit
* Express Validator

## Installation

Clone the repository:

```bash
git clone https://github.com/praful-koli/project.git

cd project
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

Run the server:

```bash
npm run dev
```

The server will start on:

```text
http://localhost:3000
```

## Image Upload

Images are uploaded using Multer and stored in ImageKit.

Install required packages:

```bash
npm install multer imagekit
```

Basic Multer configuration:

```js
import multer from "multer";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
});
```

## Authentication

After login, a JWT token is returned.

For protected routes, include the token in the request header:

```http
Authorization: Bearer YOUR_TOKEN
```

## API Routes

### Auth Routes

| Method | Route              |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

### Product Routes

| Method | Route             | Access    |
| ------ | ----------------- | --------- |
| GET    | /api/products     | Public    |
| GET    | /api/products/:id | Public    |
| POST   | /api/products     | Protected |
| PUT    | /api/products/:id | Protected |
| DELETE | /api/products/:id | Protected |

## User Schema

```js
{
  name: String,
  email: String,
  password: String
}
```

## Product Schema

```js
{
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String]
}
```

## Validation Rules

### User Validation

* Name is required
* Email must be valid
* Password must be at least 6 characters

### Product Validation

* Name is required
* Price is required
* Price must be a number
* Description is optional
* Category is optional

## Testing

You can test all endpoints using:

* Postman
* Thunder Client
* Insomnia

## Author

Praful Koli
