# Motorcycle Service Booking Backend

## Overview
The Motorcycle Service Booking Backend is a Node.js application using Express and MongoDB. This API handles user authentication, service bookings, and feedback submissions. It includes JWT-based authentication and CORS setup for secure interactions with the frontend.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- 🛡️ **User Authentication**: Register and log in users with JWT-based authentication.
- 🛠️ **Service Booking**: Create, retrieve, and manage motorcycle service bookings.
- 📝 **Feedback Submission**: Submit feedback for booked services.
- 🌐 **CORS Configuration**: Allow cross-origin requests for secure frontend integration.

## Technologies
- 🚀 **Node.js**: JavaScript runtime for building scalable network applications.
- 🕸️ **Express**: Fast and minimal web framework for Node.js.
- 📦 **MongoDB**: NoSQL database for storing user and service booking data.
- 🏗️ **Mongoose**: MongoDB object modeling tool for Node.js.
- 🔐 **JWT**: JSON Web Tokens for authentication.
- 🔄 **CORS**: Middleware for handling cross-origin requests.

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/motorcycle-service-booking-backend.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd motorcycle-service-booking-backend
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

## Configuration

1. **Create a `.env` File**:
    Copy the `.env.example` file to `.env` and configure your environment variables:
    ```bash
    cp .env.example .env
    ```

2. **Edit `.env`**:
    - `MONGO_URI`: MongoDB connection URI.
    - `JWT_SECRET`: Secret key for JWT encryption.
    - `PORT`: Port number for the server.

    Example `.env` file:
    ```env
    MONGO_URI=mongodb://localhost:27017/motorcycle_service_booking
    JWT_SECRET=your_jwt_secret
    PORT=5001
    ```

## API Endpoints

### Authentication
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

### Service Booking
- **POST /api/service-booking**: Create a new service booking.
- **GET /api/service-booking/:id**: Get a service booking by ID.
- **PUT /api/service-booking/:id**: Update a service booking.
- **DELETE /api/service-booking/:id**: Delete a service booking.

### Feedback
- **POST /api/feedback**: Submit feedback for a service booking.
- **GET /api/feedback/:id**: Get feedback by ID.

## Running the Application

1. **Start the Server**:
    ```bash
    npm start
    ```

2. **Development Mode**:
    For development with auto-reloading:
    ```bash
    npm run dev
    ```

## Testing

1. **Run Tests**:
    ```bash
    npm test
    ```

## Deployment

1. **Build the Application** (for production):
    ```bash
    npm run build
    ```

2. **Deploy**:
    Follow the deployment instructions specific to your hosting provider (e.g., Render, Heroku).


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
