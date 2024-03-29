<!--https://github.com/darsaveli/Readme-Markdown-Syntax-->

# [www.greaves.store](https://greaves.store/)
### Collaborators:
* **[Lochlann O Neill](https://github.com/lochlannoneill)**

### About:
_Summary: React, MERN, HTML/CSS, Javascript_  
Developed an E-Commerce website from inception to deployment, utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js).  
  
**DONE** - Engineered the frontend with React, ensuring an engaging and user-friendly interface that enhances the shopping experience.  

**DONE** - Facilitated deployment on Cloudflare for optimized performance and reliability, complemented by a custom domain hosted on GoDaddy for enhanced brand identity and accessibility.  

**DOING** - Incorporated Express.js to streamline server-side operations, ensuring robust API development and smooth communication between the frontend and MongoDB database.  

**TODO** - Implemented MongoDB as the database solution, enabling efficient data management and retrieval for seamless operation.  
  
-----
  
### Frontend http://localhost:3000/  

1. Navigate to the entrypoint directory
   ```bash
   cd frontend
2. Start the development server
   ```bash
   npm start  

![home](https://github.com/lochlannoneill/greaves/blob/main/screenshots/home.png?raw=true)  
![category](https://github.com/lochlannoneill/greaves/blob/main/screenshots/category.png?raw=true)  
![product](https://github.com/lochlannoneill/greaves/blob/main/screenshots/product.png?raw=true)  
![favorites](https://github.com/lochlannoneill/greaves/blob/main/screenshots/favorites.png?raw=true)  
![cart](https://github.com/lochlannoneill/greaves/blob/main/screenshots/cart.png?raw=true)  
  
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
   cd backend/src
5. Install the required dependencies supplied in **package.json**
   ```bash
   npm install
6. Start the backend server
   ```bash
   node .\index.js
  
![backend](https://github.com/lochlannoneill/greaves/blob/main/screenshots/backend.png?raw=true)  

-----
  
### POST - addImage
Thunder Client POST request :  
![post-image](https://github.com/lochlannoneill/greaves/blob/main/screenshots/post-image.png?raw=true)  
  
-----
  
### POST - addProduct
Thunder Client POST request :  
![addProduct_1](https://github.com/lochlannoneill/greaves/blob/main/screenshots/addProduct_1.png?raw=true)  
Addition visable in MongoDB cluster greaves.products :  
![addProduct_2](https://github.com/lochlannoneill/greaves/blob/main/screenshots/addProduct_2.png?raw=true)  
