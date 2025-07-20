# QuickAI

QuickAI is a full-stack AI-powered web application that enables users to generate blog articles and remove image backgrounds with the help of advanced AI technologies. It includes secure authentication, role-based access control, and seamless integrations with OpenAI (or Gemini), Cloudinary, Clerk, and a PostgreSQL database hosted on Neon.

[Live Demo](https://quick-ai-cyan.vercel.app/)

---

## Features

- **AI-Powered Article Generation**  
  Generate structured, SEO-friendly articles by providing a topic and selecting the desired length.

- **Image Background Removal (Premium Users Only)**  
  Upload images and remove backgrounds using Cloudinary transformations, accessible only to premium users.

- **User Authentication & Authorization**  
  Secure sign-in and sign-up with Clerk, including role-based access.

- **Cloudinary Integration**  
  Efficient image storage and transformation.

- **PostgreSQL via Neon**  
  Modern, serverless PostgreSQL backend hosted on Neon.

---

## Tech Stack

**Frontend**  
- React.js  
- Tailwind CSS  
- Axios  
- Clerk for authentication

**Backend**  
- Node.js  
- Express.js  
- OpenAI API or Gemini API  
- PostgreSQL (via Neon)  
- Cloudinary  
- Clerk Webhooks

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Vikashhh18/QuickAi.git
cd QuickAi
```  

### 2. Install dependencies

Frontend
```bash
cd client
npm install
```  
Frontend
```bash
cd server
npm install
```  
### 3. Configure environment variables
```bash
Create a .env file in the server/ directory and add the following:
PORT=5000

# Neon PostgreSQL
DATABASE_URL=your_neon_postgres_connection_url

# Clerk
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# AI (OpenAI or Gemini)
GEMINI_API_KEY=your_ai_api_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
### 4. ScreenShort
<img width="1920" height="4076" alt="screencapture-quick-ai-cyan-vercel-app-2025-07-21-00_56_51" src="https://github.com/user-attachments/assets/92968b44-07d9-4c57-9f40-d61e5decc9ab" />
<img width="1920" height="1177" alt="screencapture-quick-ai-cyan-vercel-app-ai-2025-07-21-00_57_15" src="https://github.com/user-attachments/assets/09ca5fe8-9cdc-4c51-8b83-462e64896dc5" />
<img width="1920" height="912" alt="screencapture-quick-ai-cyan-vercel-app-ai-community-2025-07-21-01_03_56" src="https://github.com/user-attachments/assets/8f5d26b9-321a-4cb2-9e5b-dbce6c20babc" />

### 5.Folder Structure
```bash
QuickAi/
├── client/             # React frontend

├── server/             # Express backend
│   ├── routers/
│   ├── controllers/
│   ├── config/
│   └── models/
├── README.md
```



Author
Developed by Vikash Sharma
