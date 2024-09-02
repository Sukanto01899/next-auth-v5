import nodemailer from "nodemailer";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const transporter = nodemailer.createTransport({
  port: 587,
  host: "smtp-relay.brevo.com",
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-verification?token=${token}`;

  const mailOptions = {
    from: "airdropsfind@gmail.com",
    to: email,
    subject: "Your confirmation link",
    html: `<p>Confirm your email <a class="font-size: 24px; color:"red" href=${confirmLink}>Here</a></p>`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-password?token=${token}`;

  const mailOptions = {
    from: "coingrip@atlasoftech.com",
    to: email,
    subject: "Reset your password",
    html: `<p>Your password reset <b class="font-size: 24px; color:"red" href=${resetLink}>Link</a></p>`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendTwoFactorEmail = async (email: string, token: string) => {
  const mailOptions = {
    from: "coingrip@atlasoftech.com",
    to: email,
    subject: "Your code",
    html: `<p>Your code here <b class="font-size: 24px; color:"red">${token}</b></p>`,
  };

  await transporter.sendMail(mailOptions);
};
