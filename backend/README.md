# Backend

This directory contains the backend code for the Greaves project.

## Getting Started

To run the backend server, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/greaves.git

2. Navigate to the backend directory:
   ```bash
   cd greaves/backend
3. Install dependencies:
   ```bash
   npm install

### Configuration
1. Create a .env file in the root of the /backend directory.
   ```bash
   PORT=4000
   MONGODB_URI=YOUR_MONGODB_URI
1. Replace YOUR_MONGODB_URI with your MongoDB connection URI.

### Running the Server
1. Install dependencies:
   ```bash
   node index.js
2. You should see the following output:
   ```bash
   MongoDB connected successfully.
   Database: greaves
   Host: cluster0.5jlntnb.mongodb.net
   Port: default MongoDB port (27017)
   Server is running on port: 4000
This indicates that the server has started successfully.