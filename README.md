# Unanswered Messages – Backend API

A RESTful backend API for the NASA Space Apps Challenge project **Unanswered Messages**.

The application provides APIs for managing cadets, planets, missions, quizzes, and historical NASA equipment information.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Postman

## Project Structure

```text
BACK-END/
├── config/
├── controllers/
├── data/
├── middlewares/
├── models/
├── public/
│   └── images/
├── routes/
├── .env
├── app.js
├── server.js
└── seedEquipment.js
```

## Installation

Clone the repository:

```bash
git clone https://github.com/SpaceEchoes-Org/BACK-END.git
```

Navigate to the project folder:

```bash
cd BACK-END
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the server:

```bash
npm start
```

If no start script is configured, run:

```bash
node server.js
```

## API Endpoints

Base URL:

```text
http://localhost:5000
```

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API welcome message |
| GET | `/health` | Server health status |

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new cadet |
| POST | `/api/auth/login` | Login and receive JWT token |

### Cadets

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/cadets/:cadetId` | Get cadet information |
| PATCH | `/api/cadets/:id` | Update cadet information |
| GET | `/api/cadets/:id/progress` | Get cadet mission progress |

Protected endpoints require a Bearer Token.

### Planets

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/planets` | Get all active planets |
| GET | `/api/planets/:id` | Get a planet by ID |

### Missions

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/missions` | Get all active missions |
| GET | `/api/missions/:id` | Get a mission by ID |

Optional mission filter:

```text
GET /api/missions?body=Mars
```

### Quizzes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/missions/:missionId/quiz` | Get mission quiz questions |
| POST | `/api/quizzes/:quizId/submit` | Submit quiz answers |

Correct answers are hidden when retrieving quiz questions and are returned with explanations after submission.

Quiz submission requires authentication.

### Equipment

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/equipment` | Get all equipment |
| GET | `/api/equipment/:id` | Get equipment by ID |
| GET | `/api/equipment/slug/:slug` | Get equipment by slug |
| GET | `/api/equipment/filter?body=Mars` | Filter equipment by celestial body |
| GET | `/api/equipment/filter?type=Rover` | Filter equipment by type |

Equipment images are served from:

```text
/images/
```

Example:

```text
http://localhost:5000/images/insight-lander/insight.jpg
```

## Authentication

Protected endpoints use JWT authentication.

Add the following header to authenticated requests:

```text
Authorization: Bearer YOUR_TOKEN
```

## Database

MongoDB is used to store:

- Cadets
- Planets
- Missions
- Quizzes
- Mission Progress
- Equipment

## AI Chat Integration

The Chat route and controller are retained as preliminary code structure.

Integration with the external AI service is not included in this backend delivery.

## Testing

API endpoints were tested using Postman.

## Notes

- Environment variables are stored in `.env`.
- `.env` and `node_modules` are excluded from version control.
- MongoDB connection details and JWT secrets must be configured locally before running the server.

## Repository

[GitHub Repository](https://github.com/SpaceEchoes-Org/BACK-END)
