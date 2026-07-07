# Backend Setup Guide

Complete guide to set up and run the backend server for the portfolio contact form.

## Prerequisites

- Node.js (v14 or higher) installed
- Gmail account with 2-Step Verification enabled
- Basic understanding of terminal commands

## Step-by-Step Setup

### 1. Install Backend Dependencies

Navigate to the backend directory and install packages:

```bash
cd backend
npm install
```

This will install:
- `express` - Web framework
- `cors` - Enable CORS
- `dotenv` - Environment variables
- `nodemailer` - Email service

### 2. Configure Environment Variables

Create a `.env` file in the backend directory:

```bash
cd backend
copy .env.example .env
```

Or create it manually with:

```env
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Get Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not enabled)
3. Navigate to **Security** → **2-Step Verification**
4. Click on **App passwords**
5. Select:
   - App: "Mail"
   - Device: "Other (Custom name)" → Enter "Portfolio Backend"
6. Click **Generate**
7. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)
8. Use this as `EMAIL_PASS` in your `.env` file

**Important:** 
- Never share your App Password
- Never commit `.env` to git
- Use different App Passwords for different applications

### 4. Start the Backend Server

```bash
cd backend
npm start
```

You should see:
```
🚀 Server is running on port 5000
📧 Email service configured
🌍 Environment: development
```

### 5. Test the Backend

#### Option A: Using curl

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

#### Option B: Using Postman

1. Open Postman
2. Create a new POST request
3. URL: `http://localhost:5000/api/contact`
4. Headers: `Content-Type: application/json`
5. Body (raw JSON):
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "message": "This is a test message"
}
```
6. Click Send

Expected response:
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

Check your Gmail inbox - you should receive the email!

### 6. Start the Frontend

In a new terminal:

```bash
# From project root
npm run dev
```

The frontend will start on `http://localhost:5173`

### 7. Test the Contact Form

1. Open your browser to `http://localhost:5173`
2. Navigate to the Contact section
3. Fill out the form:
   - Full Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Click "Send Message"
5. You should see a success message
6. Check your Gmail inbox

## Running Both Servers

### Terminal 1 - Backend:
```bash
cd backend
npm start
```

### Terminal 2 - Frontend:
```bash
npm run dev
```

## Common Issues and Solutions

### Issue: "Failed to send email"

**Solutions:**
1. Verify Gmail App Password is correct
2. Ensure 2-Step Verification is enabled
3. Check EMAIL_USER matches your Gmail address
4. Try generating a new App Password
5. Check backend terminal for error logs

### Issue: "CORS error"

**Solutions:**
1. Verify FRONTEND_URL in backend/.env matches your frontend URL
2. Ensure backend is running before making requests
3. Check browser console for specific CORS error

### Issue: "Connection refused"

**Solutions:**
1. Ensure backend server is running
2. Check PORT in backend/.env (default: 5000)
3. Verify no firewall is blocking port 5000
4. Try a different port if 5000 is in use

### Issue: "Invalid email address"

**Solutions:**
1. Ensure email format is correct (user@domain.com)
2. Check for typos in email field
3. Validation requires proper email format

## Production Deployment

For production deployment, consider:

1. **Use PM2 for process management:**
```bash
npm install -g pm2
pm2 start backend/src/server.js --name portfolio-backend
pm2 save
pm2 startup
```

2. **Update .env for production:**
```env
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://yourdomain.com
```

3. **Use environment-specific variables:**
- Don't use localhost in production
- Use actual domain names
- Enable SSL/HTTPS

4. **Add rate limiting** (optional but recommended):
```bash
npm install express-rate-limit
```

5. **Set up monitoring** (optional):
- Use PM2 monitoring
- Set up error tracking (Sentry, etc.)
- Implement logging

## Security Best Practices

1. ✅ Never commit `.env` to version control
2. ✅ Use strong, unique App Passwords
3. ✅ Enable 2-Step Verification on Gmail
4. ✅ Validate all inputs on server-side
5. ✅ Use CORS with specific origins
6. ✅ Implement rate limiting in production
7. ✅ Keep dependencies updated
8. ✅ Use HTTPS in production

## File Structure Reference

```
L-portifolio/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── contactController.js
│   │   ├── routes/
│   │   │   └── contactRoutes.js
│   │   ├── services/
│   │   │   └── emailService.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env              # Create this (not in git)
│   ├── .env.example      # Template
│   ├── .gitignore
│   ├── package.json
│   └── README.md
├── src/                  # Frontend React code
├── public/               # Static assets
└── package.json          # Frontend dependencies
```

## Need Help?

If you encounter issues:

1. Check the backend terminal for error messages
2. Check browser console for frontend errors
3. Verify all environment variables are set correctly
4. Ensure both servers are running
5. Test with Postman/curl before frontend integration

## Next Steps

After successful setup:

1. Customize the email template in `backend/src/services/emailService.js`
2. Add additional validation rules if needed
3. Implement rate limiting for production
4. Set up production deployment
5. Add error tracking/monitoring
