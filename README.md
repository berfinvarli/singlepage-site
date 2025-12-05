# SinglePageWebsite

A modern and responsive single-page website built with **React** (frontend) and **Spring Boot** (backend).

## Features

- Fully responsive layout for desktop and mobile devices  
- Clean, modern UI  
- Admin panel with:
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
