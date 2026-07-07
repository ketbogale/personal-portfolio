# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, TypeScript, and Tailwind CSS, with a production-ready backend for contact form email functionality.

## Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Dark Mode**: Dark theme by default for better visual experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Fast Performance**: Built with Vite for optimal loading times
- **Type Safety**: TypeScript for better code quality and developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **React Router**: Client-side routing for smooth navigation
- **Contact Form**: Production-ready email functionality with Gmail SMTP
- **Backend API**: Node.js/Express server with Nodemailer

## Tech Stack

### Frontend
- **React 18**: UI library
- **Vite**: Build tool and dev server
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Styling framework
- **React Router DOM**: Routing library

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **Nodemailer**: Email service with Gmail SMTP
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Project Structure

```
├── backend/                    # Backend API server
│   ├── src/
│   │   ├── controllers/
│   │   │   └── contactController.js
│   │   ├── routes/
│   │   │   └── contactRoutes.js
│   │   ├── services/
│   │   │   └── emailService.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
├── src/                       # Frontend React code
│   ├── assets/
│   │   ├── images/            # Add your images here
│   │   └── resume/            # Add your resume files here
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/                    # Static assets
│   ├── assets/
│   │   └── images/
│   ├── profile.jpg
│   └── resume.pdf
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Gmail account with 2-Step Verification enabled (for contact form)

### Frontend Installation

1. Install frontend dependencies:
```bash
npm install
```

2. Start the frontend development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Backend Installation (for Contact Form)

1. Navigate to backend directory:
```bash
cd backend
```

2. Install backend dependencies:
```bash
npm install
```

3. Create environment file:
```bash
copy .env.example .env
```

4. Edit `.env` with your Gmail credentials:
```env
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

5. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

**Note:** See [BACKEND_SETUP.md](./BACKEND_SETUP.md) for detailed backend setup instructions including Gmail App Password generation.

### Running Both Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## Customization

### Personal Information

Update the following files with your information:

- **Hero.jsx**: Change name, title, and introduction
- **About.jsx**: Update about text and education details
- **skills.js**: Add or modify your skills
- **projects.js**: Add your projects with descriptions and technologies
- **Contact.jsx**: Update email and social media links

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_GITHUB_URL=https://github.com/yourusername
VITE_GITHUB_USERNAME=yourusername
```

### Adding Images

Place your images in the `public/assets/images/` directory and reference them in your components.

### Adding Resume

Place your resume PDF in the `public/` directory as `resume.pdf`.

### Adding Profile Photo

Place your profile photo in the `public/` directory as `profile.jpg`.

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `cd backend && npm start` - Start backend server
- `cd backend && npm run prod` - Start in production mode

## API Endpoints

### POST /api/contact
Submit contact form (requires backend running)

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I would like to discuss..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### GET /api/health
Health check endpoint

## Building for Production

### Frontend
```bash
npm run build
```

The built files will be in the `dist` directory.

### Backend
For production deployment:
1. Set `NODE_ENV=production` in backend/.env
2. Use a process manager like PM2
3. Configure production FRONTEND_URL
4. Enable SSL/HTTPS

See [backend/README.md](./backend/README.md) for production deployment details.

## Security

- ✅ Environment variables for sensitive data
- ✅ Backend credentials never exposed to frontend
- ✅ Server-side input validation
- ✅ CORS enabled for specific origins
- ✅ .env files in .gitignore
- ✅ Gmail App Passwords (not regular passwords)

## Troubleshooting

### Contact Form Not Working

1. Ensure backend server is running (`cd backend && npm start`)
2. Check Gmail App Password is correct
3. Verify EMAIL_USER and EMAIL_PASS in backend/.env
4. Check browser console for errors
5. Check backend terminal for error logs

### Backend Setup Issues

See [BACKEND_SETUP.md](./BACKEND_SETUP.md) for detailed troubleshooting guide.

## Documentation

- [BACKEND_SETUP.md](./BACKEND_SETUP.md) - Complete backend setup guide
- [backend/README.md](./backend/README.md) - Backend API documentation
- [src/data/README.md](./src/data/README.md) - Projects data guide

## License

This project is open source and available for personal use.
