# Login Validation Microservice

This microservice validates login credentials by checking them against a MongoDB database.

## Features
- Validates user login credentials via a RESTful API.
- Uses MongoDB for storing user credentials.
- Implements an Express server with a POST endpoint for validation.

## API Communication Contract

### Request Format
To validate a login, send a `POST` request to:
```
/check-login
```
#### Request Body (JSON):
```json
{
    "username": "your_username",
    "password": "your_password"
}
```

### Response Format
The response will be one of the following:
- If credentials are valid:
```json
[
    {
        "username": "your_username",
        "password": "your_password"
    }
]
```
- If credentials are invalid:
```json
[]
```
- If an error occurs:
```json
{
    "Error": "Request failed"
}
```

## UML Sequence Diagram
```
REQUEST MADE      |    /check-login        |   Microservice    
----------------> |                        |                 
Send login details|                        |Compare login details to the database  
                  |--------------------->  |                 
                  |                        |Send validation results  
                  |<---------------------  |                 
```

## Project Structure
```
login_validation/
│── controller.mjs  # Handles API requests
│── model.mjs       # Database connection and schema definition
│── package.json    # Project dependencies and scripts
│── .env            # Environment variables (not included in repo)
│── mochafish-test-requests.http # Example HTTP requests
```

## Installation and Setup

### Prerequisites
- Node.js (v14+)
- MongoDB instance

### Install Dependencies
```sh
npm install
```

### Environment Variables
Create a `.env` file and add:
```
PORT=5000
MONGODB_CONNECT_STRING=your_mongodb_connection_string
```

### Run the Server
```sh
npm start
```

## Testing
Use the provided `mochafish-test-requests.http` file to send requests via an HTTP client like Postman or VS Code REST Client extension.

Example:
```http
### Request: Validate login
POST http://localhost:5000/check-login HTTP/1.1
content-type: application/json

{
    "username": "testuser",
    "password": "testpass"
}
```

## Dependencies
```json
{
  "dotenv": "^16.0.0",
  "express": "^4.17.3",
  "mongoose": "^8.0.1",
  "nodemon": "^2.0.15"
}
```

## Author
Leela Townsley

