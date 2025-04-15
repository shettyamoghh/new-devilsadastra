import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, education, experience, message, resume } =
      await req.json();

    // Validate ASU email
    if (!email.endsWith("@asu.edu")) {
      return new Response(
        JSON.stringify({ message: "Email must be an ASU email." }),
        { status: 400 }
      );
    }

    // Validate resume: ensure a resume is provided and it starts with the PDF mime type
    if (!resume || !resume.startsWith("data:application/pdf")) {
      return new Response(
        JSON.stringify({ message: "Resume must be a PDF file." }),
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // e.g., devils.adastra@gmail.com
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Must be your verified Gmail address
      to: process.env.EMAIL_TO, // The club email address
      subject: `Application from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nEducation: ${education}\nExperience: ${experience}\n\nWhy join:\n${message}`,
      // For demonstration, the resume is attached as a Base64 string in the email body.
      // In production, consider sending it as an actual attachment.
      html: `<p><strong>Resume (Base64):</strong></p><pre>${resume}</pre>`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Application sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending application:", error);
    return new Response(
      JSON.stringify({ message: "Application failed to send" }),
      { status: 500 }
    );
  }
}
