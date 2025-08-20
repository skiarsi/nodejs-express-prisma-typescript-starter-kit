### Node.js TypeScript Starter Kit
This is a complete starter kit for Node.js with TypeScript, Express, Prisma, and Nodemon.

### Features
1. Typescript : Type safety and better developer experience
2. Express.js : Fast, unopinionated web framework for Node.js
3. Prisma : database toolkit
4. Nodemon : Auto-restart local server in development
5. SQLite : Small and first chose database on development

### Getting Started
## 1. Install Dependencies

```bash
npm install
```
## 2. Setup Database
```bash
# Generate Prisma client
npm run db:generate
# Push schema to database
npm run db:push

# (Optional) Add sample data
npm run db:seed
```

## 3. Run the Project
```bash
# Development mode with nodemon
npm run dev
```

### Available Scripts
```npm run dev``` Run development server with nodemon

```npm run build``` Compile TypeScript to JavaScript

```npm run start``` Run production server

```npm run db:generate``` Generate Prisma client

```npm run db:push``` Push schema changes to database

```npm run db:migrate``` Create and run migrations

```npm run db:studio``` Open Prisma Studio

```npm run db:seed``` Add sample data

### API Endpoints
### Public Endpoints
```Get /``` Welcome message
```GET /health``` Health check
### User Management
```GET /api/users``` Get all users
```POST /api/users``` Create a new user
### Example POST Request:
```bash
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

## File & Folder structure 
```bash
├── src/
│   └── index.ts          # Main server file
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.ts          # Sample data
├── dist/                # Compiled JavaScript (auto-generated)
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── nodemon.json         # Nodemon configuration
└── .env                 # Environment variables
```

### Environment Configuration
Edit the ```.env``` file:
```env
DATABASE_URL="file:./dev.db"
PORT=3000
NODE_ENV=development
```

### Next Steps
- Authentication: JWT tokens, sessions, or OAuth
- Validation - Input validation with Zod or Joi
- Testing - Jest or Vitest for unit/integration tests
- Logging - Winston or Pino for structured logging
- Rate Limiting - Express rate limiter
- CORS - Cross-origin resource sharing
- Docker - Containerization for deployment

## Contributing
Feel free to submit issues and enhancement requests!
