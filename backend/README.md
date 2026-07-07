# Portfolio Backend API

Production-ready backend for the portfolio contact form with email functionality using Gmail SMTP.

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── contactController.js    # Form submission logic
│   ├── routes/
│   │   └── contactRoutes.js        # API routes
│   ├── services/
│   │   └── emailService.js          # Email sending service
│   ├── app.js                      # Express app configuration
│   └── server.js                   # Server entry point
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignore rules
├── package.json                    # Dependencies
└── README.md                       # This file
```

## Installation

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

## Configuration

1. **Create `.env` file:**
```bash
cp .env.example .env
```

2. **Edit `.env` with your credentials:**
```env
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Gmail App Password Setup

To use Gmail SMTP, you need to create an App Password:

1. Go to [Google Account Settings](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to **Security** → **2-Step Verification** → **App passwords**
4. Create a new app password (select "Mail" and "Other (custom name)")
5. Copy the generated password and use it as `EMAIL_PASS`

**Important:** Never use your regular Gmail password. Always use App Passwords.

## Running the Server

### Development Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

### Production Mode
```bash
npm run prod
```

## API Endpoints

### POST /api/contact
Submit contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I would like to discuss a project..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error message here"
}
```

### GET /api/health
Health check endpoint

**Response (200):**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Validation Rules

- **Name:** Minimum 2 characters
- **Email:** Valid email format
- **Message:** Minimum 10 characters

## Security Features

- ✅ Environment variables for sensitive data
- ✅ CORS enabled for specific frontend URL
- ✅ Server-side input validation
- ✅ Error handling
- ✅ .env in .gitignore

## Email Template

The email sent includes:
- Styled HTML template
- Sender name, email, and message
- Default subject: "Portfolio Contact: New Message"
- Professional formatting
- Automatic reply-to functionality

## Troubleshooting

### Email Not Sending

1. Check Gmail App Password is correct
2. Ensure 2-Step Verification is enabled
3. Verify EMAIL_USER and EMAIL_PASS in .env
4. Check server logs for error messages

### CORS Errors

1. Verify FRONTEND_URL in .env matches your frontend URL
2. Ensure backend is running before frontend requests

### Connection Refused

1. Check if backend server is running
2. Verify PORT in .env
3. Check firewall settings

## Development Tips

- Use `console.log` for debugging (already included)
- Test with Postman or curl before frontend integration
- Check browser console for frontend errors
- Monitor server terminal for backend errors

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production` in .env
2. Use a production-grade process manager (PM2)
3. Set up SSL/HTTPS
4. Use environment-specific FRONTEND_URL
5. Implement rate limiting
6. Add request logging
7. Set up monitoring

## License

ISC
