// controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const contactUser = async (req, res) => {
  try {
    // Create user in the database
    const request = req.body; // No need to use await here
    const UserCount = await User.countDocuments();
    const existingUser = await User.findOne({ email: request.email });

    if (existingUser) {
      return res.status(400).json({
        UserCount,
        success: false,
        message: 'User With This Email Already Exists',
      });
    }

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
      digits: true,
    });
    // Create user with the generated OTP
    const user = await User.create({
      ...request,
      otp,
      role: Boolean(UserCount) ? request.role || 'user' : 'super admin',
    });

    // Generate JWT token
    const token = jwt.sign(
      {
        _id: user._id,
        // email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );
    // Path to the HTML file
    const htmlFilePath = path.join(
      process.cwd(),
      'src/email-templates',
      'otp.html'
    );

    // Read HTML file content
    let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

    // Replace the placeholder with the OTP and user email
    htmlContent = htmlContent.replace(/<h1>[\s\d]*<\/h1>/g, `<h1>${otp}</h1>`);
    htmlContent = htmlContent.replace(/usingyourmail@gmail\.com/g, user.email);

    // Create nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // Your Gmail email
        pass: process.env.EMAIL_PASSWORD, // Your Gmail password
      },
    });

    // Email options
    let mailOptions = {
      from: process.env.EMAIL, // Your Gmail email
      to: user.email, // User's email
      subject: 'Verify your email',
      html: htmlContent, // HTML content with OTP and user email
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(201).json({
      success: true,
      message: 'Created User Successfully',
      otp,
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: 500,
    });
  }
};


module.exports = {
    contactUser
}