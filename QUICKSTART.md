# Quick Start Guide

Get your portfolio up and running in minutes!

## 🚀 Quick Setup (Frontend Only)

If you just want to see the frontend without the contact form:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

## 📧 Full Setup (Frontend + Contact Form)

For the complete experience with working contact form:

### Step 1: Install Frontend Dependencies
```bash
npm install
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 3: Configure Backend

1. Create backend `.env` file:
```bash
cd backend
copy .env.example .env
```

2. Edit `backend/.env` with your Gmail credentials:
```env
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Step 4: Get Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. Go to **Security** → **2-Step Verification** → **App passwords**
4. Create new app password (Mail → Other → "Portfolio Backend")
5. Copy the 16-character password
6. Use it as `EMAIL_PASS` in backend/.env

### Step 5: Start Both Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Step 6: Test

1. Open `http://localhost:5173`
2. Navigate to Contact section
3. Fill out the form and submit
4. Check your Gmail inbox!

## 📝 Essential Customization

### 1. Add Your Name
Edit `src/components/Hero.jsx`:
```jsx
<span className="gradient-text">Your Name</span>
```

### 2. Add Your GitHub
Create `.env` in project root:
```env
VITE_GITHUB_URL=https://github.com/yourusername
```

### 3. Add Your Projects
Edit `src/data/projects.js` with your real projects.

### 4. Add Your Profile Photo
Place your photo as `public/profile.jpg`

### 5. Add Your Resume
Place your resume as `public/resume.pdf`

## 📚 Detailed Documentation

- **[BACKEND_SETUP.md](./BACKEND_SETUP.md)** - Complete backend setup with troubleshooting
- **[backend/README.md](./backend/README.md)** - Backend API documentation
- **[src/data/README.md](./src/data/README.md)** - Projects data guide

## 🆘 Common Issues

**Backend won't start?**
- Check if port 5000 is available
- Verify dependencies are installed: `cd backend && npm install`

**Email not sending?**
- Verify Gmail App Password is correct
- Ensure 2-Step Verification is enabled
- Check backend terminal for errors

**Frontend errors?**
- Clear browser cache
- Check browser console for errors
- Verify all dependencies installed

## ✅ Checklist

Before going live:

- [ ] Update personal information in Hero.jsx
- [ ] Add GitHub URL to .env
- [ ] Fill in projects in projects.js
- [ ] Add profile photo to public/
- [ ] Add resume PDF to public/
- [ ] Configure backend with Gmail App Password
- [ ] Test contact form
- [ ] Update About.jsx with your education
- [ ] Customize skills.js
- [ ] Update social links in Contact.jsx

## 🎯 Next Steps

1. Customize all placeholder content
2. Add your real projects
3. Test the contact form
4. Deploy to Vercel/Netlify (frontend)
5. Deploy backend to Render/Railway/Heroku

## 💡 Tips

- Use the same terminal for backend to see error logs
- Keep backend running while developing
- Test contact form with your real email
- Use different App Passwords for different projects

---

Need help? Check the detailed documentation files or review the error messages in your terminal.
