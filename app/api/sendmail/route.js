import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  const { firstName, lastName, userEmail, phoneNo, enquiry,location,company } = await req.json();

  // console.log(capitalized);

  // !clientEmail
  if (!userEmail && !process.env.EMAIL_ID) {
    return NextResponse.json(
      { success: false, message: "Recipient email(s) missing" },
      { status: 400 }
    );
  }

  // Email options for the client (all user data and attachments)
  const clientMailOptions = {
    from: `"${userEmail}" <${"support@webibee.com"}>`,
    to: "sales@oneustravels.com",
    subject: `New Customer Form Submitted - ${company} Page`,
    html: `
            <div className="block space-y-10 font-merriWeather">
            <h4 className="!text-lg !capitalize">Hi,</h4>
            <p>You have a new lead from OneUs website</p>
            <p className="!flex !items-center !justify-center !gap-3">
            <span className="!capitalize !font-bold">Name:</span> 
            ${firstName} ${lastName}
            <p>Company: ${company}</p>
            <p>Email: ${userEmail}</p>
            <p>Phone Number: ${phoneNo}</p>
            <p>Location: ${location}</p>
            <p>Enquiry: ${enquiry}</p>
            </p>
            <br/>
            <br/>
            <p>Thanks</p>
            </div> 
            `,
    // bcc: [process.env.EMAIL_ID],
  };

  const userMailOptions = {
    from: `OneUS Travels "${process.env.EMAIL_ID}" <${"support@webibee.com"}>`,
    to: userEmail,
    subject: "Acknowledgment: We received your Submission",
    html: `<p>Dear ${firstName} ${lastName},</p>
             <p>Greetings from OneUS Travels!</p>
             <p>We appreciate your interest in our services and will get back shortly.</p>
                   <p>Thanks & Regards,<br>
                    <br>
           OneUS Travels<br>
            No. V1, Kernite Kip,6th Main Rd, next to CTS Speciality Hospital, V Block, <br>
           Anna Nagar, Chennai, Tamil Nadu 600040<br>
           +91-98408 84460<br></p>`,

    // attachments: [
    //   // Default PDF attachment
    //   {
    //     filename: "Denkiro_Dental_Brochure_Digital.pdf",
    //     content: defaultPdfContent,
    //     contentType: "application/pdf",
    //   },
    // ],
    // bcc: ["sales@vbccinstruments.com"],
  };

  try {
    // Send acknowledgment email to the customer
    await transporter.sendMail(userMailOptions);

    // Send detailed email to the client
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Error sending emails" },
      { status: 500 }
    );
  }
}
