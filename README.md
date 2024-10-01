<!--https://github.com/darsaveli/Readme-Markdown-Syntax-->

# [https://greaves.store/](https://greaves.store/)
### Collaborators:
* **[Lochlann O Neill](https://github.com/lochlannoneill)**

### About:
_Summary: React, MERN, HTML/CSS, Javascript_  
Developed an E-Commerce website, utilizing the MERN stack.  
  
~~**COMPLETED** - Engineered the frontend with React, adhering to UX design principles.~~  

~~**COMPLETED** - Facilitated deployment on Cloudflare for optimized performance and reliability, complemented by a custom domain hosted on GoDaddy.~~  

~~**COMPLETED** - Incorporated Express.js for API development, for communication between the frontend and backend.~~  

~~**COMPLETED** - Implemented MongoDB as the database solution.~~  

~~**COMPLETED** - Implement Azure as the Cloud storage solution.~~  
  
-----
  
### Frontend http://localhost:3000/  

1. Navigate to the entrypoint directory
   ```bash
   cd greaves/frontend
2. Install the required dependencies pre-supplied in **package.json**
   ```bash
   npm install
3. Start the development server
   ```bash
   npm start  

![image](https://github.com/lochlannoneill/Greaves/assets/47467279/048c9907-86d9-4a15-81ff-3f8217883846)  
![image](https://github.com/lochlannoneill/Greaves/assets/47467279/37e95cad-2fa2-4d8f-8f28-9ba6004c444c)  
![image](https://github.com/lochlannoneill/Greaves/assets/47467279/14f20ba4-8c1d-4214-9b37-68870bccc4ae)  
![image](https://github.com/lochlannoneill/Greaves/assets/47467279/cbc52450-459f-4edc-ab40-3445944ad659)  
![image](https://github.com/lochlannoneill/Greaves/assets/47467279/66526a4a-5f6d-4e77-a43c-4adfaa18acee)  

  
-----
  
### Backend http://localhost:4000/  

1. Create **backend/config/env.js** to store your MongoDB connection URI  
   ```bash
   module.exports = {
     mongoURI:
     "YOUR_MONGODB_URI",
   };
2. Replace "YOUR_MONGODB_URI" with your MongoDB connection URI
3. Navigate to the entrypoint directory
   ```bash
   cd greaves/backend/src
5. Install the required dependencies pre-supplied in **package.json**
   ```bash
   npm install
6. Start the backend server
   ```bash
   node .\app.js

Express App running on port 4000:  
![backend](https://github.com/lochlannoneill/greaves/blob/main/screenshots/backend.png?raw=true)  
  
POST request **addProduct** :  
![addProduct_1](https://github.com/lochlannoneill/greaves/blob/main/screenshots/addProduct_1.png?raw=true)  
  
Addition visable in MongoDB cluster **greaves.products** :  
![addProduct_2](https://github.com/lochlannoneill/greaves/blob/main/screenshots/addProduct_2.png?raw=true)  

-----
  
### Admin http://localhost:5173/
  
1. Navigate to the entrypoint directory
   ```bash
   cd greaves/admin
2. Install the required dependencies pre-supplied in **package.json**
   ```bash
   npm install
3. Start the backend server
   ```bash
   npm run dev
  
![image](https://github.com/lochlannoneill/Greaves/assets/47467279/110b0579-9446-44f4-b3c2-6afff12c5c36)
