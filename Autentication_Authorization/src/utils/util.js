export function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function getOtpHtml(otp) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>OTP Verification</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 500px; margin: auto; background: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

        <h2 style="color: #333;">OTP Verification</h2>

        <p>Hello,</p>

        <p>Your One-Time Password (OTP) for verification is:</p>

        <div
          style="
            background: #2563eb;
            color: white;
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            padding: 15px;
            border-radius: 8px;
            letter-spacing: 5px;
            margin: 20px 0;
          "
        >
          ${otp}
        </div>

        <p>This OTP is valid for <strong>10 minutes</strong>.</p>

        <p>If you did not request this OTP, please ignore this email.</p>

        <hr />

        <p style="font-size: 12px; color: #777;">
          Authentication System
        </p>

      </div>
    </body>
    </html>
  `;
}

