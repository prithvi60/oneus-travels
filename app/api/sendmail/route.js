import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.EMAIL_ID, // e.g. "sale@oneustravels.com"
    pass: process.env.EMAIL_PASSWORD, // App Password
  },
  tls: {
    rejectUnauthorized: true,
  },
  connectionTimeout: 8000, // 8s to connect
  greetingTimeout: 5000, // 5s for server hello
  socketTimeout: 10000, // 10s max idle
});

export async function POST(req) {
  const { userName, userEmail, phoneNo, enquiry, location, company } =
    await req.json();

  if (!userEmail || !process.env.EMAIL_ID) {
    return NextResponse.json(
      { success: false, message: "Recipient email(s) missing" },
      { status: 400 }
    );
  }

  const clientMailOptions = {
    from: `"Mail Service" <sale@oneustravels.com>`,
    to: "sales@oneustravels.com",
    subject: `New Customer Form Submitted`,
    html: `
      <p>You have a new lead from the OneUs website.</p>
      <p><strong>Name:</strong> ${userName}</p>
      <p><strong>Phone Number:</strong> ${phoneNo}</p>
      <p><strong>Enquiry:</strong> ${enquiry}</p>
      <br/>
      <p>Thanks,</p>
      <p>OneUs Travels</p>
    `,
  };

  // <p>You have a new lead from the OneUs website.</p>
  //     <p><strong>Name:</strong> ${userName}</p>
  //     <p><strong>Company:</strong> ${company}</p>
  //     <p><strong>Email:</strong> ${userEmail}</p>
  //     <p><strong>Phone Number:</strong> ${phoneNo}</p>
  //     <p><strong>Location:</strong> ${location}</p>
  //     <p><strong>Enquiry:</strong> ${enquiry}</p>
  //     <br/>
  //     <p>Thanks,</p>
  //     <p>OneUs Travels</p>

  const userMailOptions = {
    from: `"OneUs Travels" <sale@oneustravels.com>`,
    to: userEmail,
    subject: "Acknowledgment: We received your submission",
    html: `
      <p>Dear ${userName},</p>
      <p>Greetings from OneUs Travels!</p>
      <p>We appreciate your interest in our services and will get back to you shortly.</p>
      <br/>
      <p>Thanks & Regards,<br/>
      OneUs Travels<br/>
      No. V1, 6th Main Rd, V Block,<br/>
      Anna Nagar, Chennai, Tamil Nadu 600040<br/>
      +91-98408 84460</p>
    `,
  };

  try {
    // ✅ Send both emails in parallel to avoid Vercel timeout
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to send emails" },
      { status: 500 }
    );
  }
}
