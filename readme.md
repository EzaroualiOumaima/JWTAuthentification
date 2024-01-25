# Recipe API

This is a simple backend API for managing recipes. It supports basic CRUD operations (Create, Read, Update, Delete) for recipes and includes JWT authentication for user registration and login.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/recipe-api.git
    cd recipe-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory with the following variables:

    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/recipe-api
    JWT_SECRET=your_secret_key
    ```

    Replace `your_secret_key` with a secure secret for JWT token generation.

4. Start the server:

    ```bash
    npm start
    ```

## Usage

### Authentication

- **Register User:**

    `POST /api/register`

    Request Body:

    ```json
    {
      "name": "example",
      "email" : "example@gmail.com" ,
      "password": "securepassword" , 
      
    }
    ```

    Response:

    ```json
    {
      "token": "your_jwt_token"
    }
    ```

- **Login:**

    `POST /api/login`

    Request Body:

    ```json
    {
      "email" : "example@gmail.com" ,
      "password": "securepassword" , 
    }
    ```

    Response:

    ```json
    {
      "token": "your_jwt_token"
    }
    ```

### Endpoints

- **Get All Recipes:**

    `GET /api/recipes`

    Requires authentication.

- **Get Recipe by ID:**

    `GET /api/recipes/:id`

    Requires authentication.

- **Create Recipe:**

    `POST /api/recipes`

    Requires authentication.

    Request Body:

    ```json
    {
      "title": "Spaghetti Bolognese",
      "ingredients": ["spaghetti", "minced meat", "tomato sauce"],
      "instructions": "Boil spaghetti. Cook minced meat. Mix with tomato sauce."
    }
    ```

- **Update Recipe:**

    `PUT /api/recipes/:id`

    Requires authentication.

    Request Body:

    ```json
    {
      "title": "Updated Spaghetti Bolognese",
      "ingredients": ["spaghetti", "minced meat", "tomato sauce", "extra ingredient"],
      "instructions": "Boil spaghetti. Cook minced meat. Mix with tomato sauce. Add extra ingredient."
    }
    ```

- **Delete Recipe:**

    `DELETE /api/recipes/:id`

    Requires authentication.

