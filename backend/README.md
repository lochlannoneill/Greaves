# Getting Started
This directory contains the backend code for the Greaves project.  
To run the backend server, follow these steps:

## 1. Prerequisites
Make sure you have the following installed on your machine:
- Node.js
- MongoDB

## 2. Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/greaves.git
2. Navigate to the backend directory:
   ```bash
   cd greaves/backend
3. Install dependencies:
   ```bash
   npm install

## 3. Configuration
1. Create a .env file in the root of the /backend directory.
   ```bash
   PORT=4000
   MONGODB_URI=YOUR_MONGODB_URI
2. Replace YOUR_MONGODB_URI with your MongoDB connection URI.

## 4. Running the Server
1. Start the backend server:
   ```bash
   node index.js
2. The following output indicates that the server has started successfully:
   ```bash
   Server is running on port: 4000
   MongoDB connected successfully.
   Database: greaves
   Host: cluster0.5jlntnb.mongodb.net
   Port: default MongoDB port (27017)
