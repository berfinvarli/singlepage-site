# SinglePageWebsite

This project is a full-stack single-page application designed to demonstrate modern web development practices. It features **React** for an interactive frontend and a secure, robust **Spring Boot** RESTful backend service, including an integrated admin panel for message management.

## Features

- Fully responsive layout for desktop and mobile devices  
- Clean, modern UI  
- Admin Panel (Access: /admin) with:
  - Login system
  - Inbox messages list
  - Archive message system
  - Mark-as-read functionality  
- Contact form with validation:
  - Name must be at least 2 characters
  - Message must be at least 5 characters
- Smooth loading states, animations, and alerts
- REST API communication between React & Spring Boot
- MySQL database integration

---

## Technologies Used

### **Frontend**
- React
- CSS Modules
- Fetch API
- Responsive layout design

### **Backend**
- Spring Boot
- REST API
- Spring Security
- MySQL & JPA
- CORS enabled for localhost development

---

## Running the Project

### **Prerequisites**
To run the project locally, you must have the following installed on your machine:
- Node.js & npm (Required for the Frontend)
- Java Development Kit (JDK) 17+ (Required for Spring Boot)
- Maven (For backend dependencies and execution)
- MySQL Server (For the database)

1. Start Backend
```bash
cd backend
mvn spring-boot:run
```

2. Start Frontend
```bash
cd frontend
npm install
npm start
```
