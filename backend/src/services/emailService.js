const nodemailer = require('nodemailer');

// Create transporter using Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send email function
const sendEmail = async (data) => {
  const { name, email, message } = data;

  try {
    const transporter = createTransporter();

    // Email options with default subject
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Portfolio Contact: New Message',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              background-color: #111827;
              -webkit-font-smoothing: antialiased;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
            }
            .card {
              background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
              border-radius: 16px;
              padding: 40px;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
              border: 1px solid #374151;
            }
            .header {
              text-align: center;
              margin-bottom: 32px;
              padding-bottom: 24px;
              border-bottom: 2px solid #0ea5e9;
            }
            .header h1 {
              margin: 0;
              color: #f3f4f6;
              font-size: 28px;
              font-weight: 700;
              letter-spacing: -0.5px;
            }
            .header p {
              margin: 8px 0 0 0;
              color: #9ca3af;
              font-size: 14px;
            }
            .content {
              background-color: #1f2937;
              border-radius: 12px;
              padding: 24px;
              margin-top: 24px;
              border: 1px solid #374151;
            }
            .field {
              margin-bottom: 20px;
            }
            .field:last-child {
              margin-bottom: 0;
            }
            .label {
              color: #0ea5e9;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 8px;
            }
            .value {
              color: #f3f4f6;
              font-size: 16px;
              line-height: 1.6;
              word-wrap: break-word;
            }
            .value a {
              color: #0ea5e9;
              text-decoration: none;
              transition: color 0.2s;
            }
            .value a:hover {
              color: #38bdf8;
              text-decoration: underline;
            }
            .message-box {
              background-color: #111827;
              border-radius: 8px;
              padding: 20px;
              margin-top: 16px;
              border-left: 4px solid #0ea5e9;
            }
            .message-text {
              color: #e5e7eb;
              font-size: 15px;
              line-height: 1.8;
              white-space: pre-wrap;
            }
            .footer {
              margin-top: 32px;
              padding-top: 24px;
              border-top: 1px solid #374151;
              text-align: center;
            }
            .footer p {
              margin: 0;
              color: #6b7280;
              font-size: 13px;
            }
            .footer .timestamp {
              margin-top: 8px;
              color: #4b5563;
              font-size: 12px;
            }
            .badge {
              display: inline-block;
              background: linear-gradient(135deg, #0ea5e9 0%, #0891b2 100%);
              color: white;
              padding: 6px 16px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 16px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="card">
              <div class="header">
                <div class="badge">New Message</div>
                <h1>Portfolio Contact Form</h1>
                <p>You've received a new message from your portfolio</p>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="label">From</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value">
                    <a href="mailto:${email}">${email}</a>
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">
                    <div class="message-text">${message}</div>
                  </div>
                </div>
              </div>
              
              <div class="footer">
                <p>This message was sent from your portfolio contact form</p>
                <p class="timestamp">${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'Failed to send email' };
  }
};

module.exports = { sendEmail };
