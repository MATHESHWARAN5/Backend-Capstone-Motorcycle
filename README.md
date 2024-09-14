# 🏍️ Motorcycle Service Booking Backend

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


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
