# 🚀 Employee Management System

<div align="center">

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

A modern, microservices-based employee management system built with Angular and NestJS.

[Features](#features) •
[Installation](#installation) •
[API Reference](#api-reference) •
[Documentation](#documentation)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [API Reference](#api-reference)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

Employee Management System is a comprehensive solution for managing employee data, built with modern technologies and following best practices in software development. The system provides a user-friendly interface for managing employee records, with features like filtering, sorting, and comprehensive data validation.

## ✨ Features

### Core Functionality
- **Employee Management**
  - Create, read, update, and delete employee records
  - Advanced filtering and sorting capabilities
  - Bulk operations support
  - Real-time validation

### User Interface
- **Modern Design**
  - Responsive layout for all devices
  - Material Design components
  - Intuitive navigation
  - Dark/Light theme support

### Technical Features
- **API Integration**
  - RESTful API with Swagger documentation
  - Real-time updates
  - Efficient data caching
  - Error handling and recovery

### Security
- Input validation and sanitization
- CORS protection
- Rate limiting
- Environment-based configuration

### Testing Features
- **Comprehensive Testing Suite**
  - Unit tests with Jasmine/Karma
  - E2E tests with Cypress
  - Integration tests
  - Test coverage reports
  - Automated CI/CD testing pipeline

## 🛠 Tech Stack

### Frontend
- **Framework**: Angular 17
- **UI Library**: Angular Material
- **State Management**: RxJS
- **Styling**: SCSS
- **Build Tools**: Angular CLI

### Backend
- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **API Docs**: Swagger/OpenAPI

### Infrastructure
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **Web Server**: Nginx
- **Version Control**: Git

### Testing Tools
- **Frontend Testing**: 
  - Jasmine
  - Karma
  - Cypress
- **Backend Testing**:
  - Jest
  - Supertest

## 🚀 Getting Started

### Prerequisites

```bash
# Required software
Node.js >= 14.x
Docker >= 20.x
Docker Compose >= 2.x
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dkartik123/employee-management.git
cd employee-management
```

2. Start the application:
```bash
docker-compose up --build
```

3. Access the application:
```bash
Frontend: http://localhost
Backend API: http://localhost:3000
Swagger UI: http://localhost:3000/api
```

## 🏗 Architecture

```
Managment/
├── docker-compose.yml          # Main Docker Compose configuration
├── README.md                   # Project documentation
│
├── Backend/                    # NestJS Backend
│   ├── src/
│   │   ├── employees/         # Employee module
│   │   ├── config/           # Configuration
│   │   └── main.ts           # Application entry point
│   ├── Dockerfile
│   └── package.json
│
└── Employee-Management-System-Angular/    # Angular Frontend
    ├── src/
    │   ├── app/              # Application components
    │   ├── environments/     # Environment configurations
    │   └── styles/          # Global styles
    ├── Dockerfile
    ├── nginx.conf
    └── package.json
```

## 📚 API Reference

### Employee Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employees` | Retrieve all employees |
| GET | `/employees/:id` | Get employee by ID |
| POST | `/employees` | Create new employee |
| PUT | `/employees/:id` | Update employee |
| DELETE | `/employees/:id` | Delete employee |

### Request/Response Examples

#### Create Employee
```json
POST /employees
{
  "firstName": "John",
  "lastName": "Doe",
  "office": "Riga",
  "phone": "+37120000000",
  "tags": "Developer",
  "birthDate": "1990-01-01"
}
```

## 💻 Development

### Running Frontend Locally
```bash
cd Employee-Management-System-Angular
npm install
npm start
```

### Running Backend Locally
```bash
cd Backend
npm install
npm run start:dev
```

### Running Tests

#### Frontend Tests
```bash
# Unit Tests
cd Employee-Management-System-Angular
npm run test

# E2E Tests
npm run e2e

# Generate Coverage Report
npm run test:coverage
```

#### Backend Tests
```bash
cd Backend
# Unit Tests
npm run test

# E2E Tests
npm run test:e2e

# Test Coverage
npm run test:cov
```

### Test Structure

```
Frontend/
├── src/
│   └── app/
│       ├── __tests__/        # Unit tests
│       └── e2e/             # E2E tests
Backend/
├── src/
│   └── __tests__/          # Backend tests
```

## 🔧 Environment Variables

### Backend Configuration
```env
DB_HOST=db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=employee_db
```

### Frontend Configuration
```env
API_URL=/api
```

## 🤝 Deployment

### Live Demo
- Frontend Application: [https://employee-management.denislomakin.com](https://employee-management.denislomakin.com)
- Backend API: [https://api.employee-management.denislomakin.com](https://api.employee-management.denislomakin.com)
- API Documentation: [https://api.employee-management.denislomakin.com/docs](https://api.employee-management.denislomakin.com/docs)

### Deployment Environments
- Development: [dev.employee-management.denislomakin.com](https://dev.employee-management.denislomakin.com)
- Staging: [staging.employee-management.denislomakin.com](https://staging.employee-management.denislomakin.com)
- Production: [employee-management.denislomakin.com](https://employee-management.denislomakin.com)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Angular Material team for the excellent UI components
- NestJS team for the robust backend framework
- The open-source community for inspiration and tools

---

<div align="center">

Made with ❤️ by Denis Lomakin

</div>
