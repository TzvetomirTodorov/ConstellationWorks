# ✦ Constellation Works - PERN Stack

**Building Pathways from Crisis to Constellation**

Full-stack web application for Constellation Works nonprofit - combining dignified housing solutions with ecological land restoration.

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite + React Router
- **Backend**: Node.js + Express.js
- **Database**: PostgreSQL
- **Auth**: JWT (JSON Web Tokens)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+

### Local Development

1. **Clone and install:**
```bash
git clone https://github.com/TzvetomirTodorov/ConstellationWorks.git
cd ConstellationWorks
cd server && npm install
cd ../client && npm install
```

2. **Set up environment:**
```bash
cp server/.env.example server/.env
# Edit server/.env with your DATABASE_URL and JWT_SECRET
```

3. **Initialize database:**
```bash
cd server && npm run db:init
```

4. **Run development servers:**
```bash
# Terminal 1 - Backend (port 5000)
cd server && npm run dev

# Terminal 2 - Frontend (port 3000)
cd client && npm run dev
```

## 📁 Project Structure

```
constellation-works/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context (Auth)
│   │   └── App.jsx         # Main app with routing
│   └── package.json
├── server/                 # Express backend
│   ├── routes/             # API routes
│   ├── middleware/         # Auth middleware
│   ├── config/             # DB connection & schema
│   └── server.js           # Express server
├── Dockerfile              # Production build
├── railway.json            # Railway deployment config
└── README.md
```

## 🔐 Features

- **User Authentication**: Register, login, JWT-based auth
- **Admin Dashboard**: User management, donation tracking, application review
- **Donation System**: Record and track donations
- **Applications**: Volunteer and resident application forms
- **Contact Form**: Public contact submissions
- **Blog/News**: Content management for updates

## 🌐 Railway Deployment

1. Push to GitHub
2. Create new Railway project
3. Add PostgreSQL database service
4. Connect GitHub repo
5. Set environment variables:
   - `DATABASE_URL` (auto-set by Railway PostgreSQL)
   - `JWT_SECRET` (generate a secure random string)
   - `NODE_ENV=production`
6. Deploy!

## 📞 Contact

**Joshua Tramel Byers**  
Co-Founder, Constellation Works  
📧 terranovare42@gmail.com  
📱 (734) 351-8601

---

**✦ Together, we build second chances that last. ✦**
