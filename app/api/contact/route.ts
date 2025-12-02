import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const REQUIRED_ENV = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_RECIPIENT_EMAIL",
];

export async function POST(request: Request) {
  const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);

  if (missingEnv.length > 0) {
    console.warn(`Contact mailer missing env: ${missingEnv.join(", ")}`);
    return NextResponse.json(
      { message: "Email service unavailable. Please try again later." },
      { status: 503 }
    );
  }

  const formData = await request.formData();
  const getField = (key: string) => formData.get(key)?.toString().trim() || "";

  const fullName = getField("fullName");
  const email = getField("email");
  const message = getField("message");
  const phone = getField("phone");
  const serviceRequired = getField("serviceRequired");
  const projectDescription = getField("projectDescription");

  if (!fullName || !email || !message) {
    return NextResponse.json(
      { message: "Missing required fields." },
      { status: 400 }
    );
  }

  const attachments = formData
    .getAll("attachments")
    .filter((file): file is File => file instanceof File && file.size > 0);

  const summary = [
    `Full Name: ${fullName}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    serviceRequired ? `Service: ${serviceRequired}` : null,
    projectDescription ? `Project: ${projectDescription}` : null,
    `Message:\n${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.resend.com",
      secure: true,
      port: 465,
      auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY,
      },
    });

    await transporter.sendMail({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New contact inquiry from ${fullName}`,
      text: summary,
      attachments:
        attachments.length > 0
          ? await Promise.all(
              attachments.map(async (file) => ({
                filename: file.name || "attachment",
                content: Buffer.from(await file.arrayBuffer()),
                contentType: file.type || "application/octet-stream",
              }))
            )
          : undefined,
    });

    return NextResponse.json({ message: "Inquiry sent." });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error && error.message
            ? `We could not submit your inquiry: ${error.message}`
            : "We could not submit your inquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
