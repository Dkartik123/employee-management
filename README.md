# 🚀 Employee Management System

<div align="center">

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

[Demo](https://dkartik123.github.io/employee-management/) •
[API](https://employee-management-87s0.onrender.com) •
[Docs](https://employee-management-87s0.onrender.com/api)

</div>

## 📋 Features

- **Employee Management**: CRUD operations with real-time validation
- **Advanced UI**: Material Design, responsive layout, dark/light theme
- **Data Handling**: Sorting, filtering, pagination
- **Security**: Input validation, CORS, rate limiting
- **Documentation**: Swagger/OpenAPI integration

## 🛠 Tech Stack

### Frontend
- Angular 17 + Material UI
- RxJS + TypeScript
- SCSS + Responsive Design

### Backend
- NestJS + TypeORM
- PostgreSQL
- Swagger/OpenAPI

### DevOps
- Docker + Docker Compose
- Nginx
- GitHub Actions

## 🚀 Quick Start

```bash
# Clone & Install
git clone https://github.com/Dkartik123/employee-management.git
cd employee-management

# Start with Docker
docker-compose up --build

# Access
Frontend: http://localhost:8000
API: http://localhost:3000
Swagger: http://localhost:3000/api
```

## 🧪 Testing

### Structure
```
Frontend (Jasmine + Karma)           Backend (Jest)
├── app.component.spec.ts            ├── employees.controller.spec.ts
├── core.service.spec.ts             ├── employees.service.spec.ts
├── employee.service.spec.ts         └── app.e2e-spec.ts
└── emp-add-edit.component.spec.ts
```

### Run Tests
```bash
# Frontend
cd employee
npm test                  # Unit tests

# Backend
cd Backend
npm test                 # Unit tests
```

## 🔧 Environment

```env
# Backend
DB_HOST=db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=employee_db
```

## 📚 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get by ID |
| POST | `/employees` | Create employee |
| PUT | `/employees/:id` | Update employee |
| DELETE | `/employees/:id` | Delete employee |

## 🤝 Deployment

### Frontend
- **Platform**: GitHub Pages
- **URL**: [https://dkartik123.github.io/employee-management/](https://dkartik123.github.io/employee-management/)
- **Features**:
  - Static site hosting
  - Automated deployment via GitHub Actions
  - Custom domain support

### Backend
- **Platform**: Render
- **API**: [https://employee-management-87s0.onrender.com](https://employee-management-87s0.onrender.com)
- **Swagger**: [https://employee-management-87s0.onrender.com/api](https://employee-management-87s0.onrender.com/api)
- **Features**:
  - Automatic deployments from GitHub
  - PostgreSQL database hosting
  - HTTPS encryption
  - API documentation with Swagger UI

## 🤝 Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/NewFeature`
3. Commit changes: `git commit -m 'Add NewFeature'`
4. Push: `git push origin feature/NewFeature`
5. Submit Pull Request

<div align="center">

Made with ❤️ by [Denis Lomakin](https://github.com/Dkartik123)

</div>
