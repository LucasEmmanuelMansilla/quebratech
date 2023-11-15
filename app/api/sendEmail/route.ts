import { NextResponse } from "next/server";
import { NextApiResponse } from "next";

const nodemailer = require("nodemailer");

export async function POST(req: Request, response: NextApiResponse): Promise<NextResponse> {
  const res = await req.json();

  const HOST = process.env.HOST_MAIL;
  const MAIL = process.env.USER_MAIL;
  const PASSWORD = process.env.PASSWORD_MAIL;
  try {
    const transporter = nodemailer.createTransport({
      host: "l0020126.ferozo.com",
      port: 465,
      secure: true,
      address: "l0020126.ferozo.com",
      auth: {
        user: "info@quebratech.com.ar",
        pass: "Luc@s12031203",
      },
    });
    // Email content
    const mailData = {
      from: res.formData.email,
      to: "info@quebratech.com.ar",
      subject: `From ${res.formData.email}`,
      text: res.formData.subject + " Sent from: " + res.formData.email,
      html: `<div>First Name: ${res.formData.name}<br>Last Name: ${res.formData.name}<br><br>Message: ${res.formData.message}</div>`,
    };
    await transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        return response.status(500).json({
          message: "error",
        });
      } else {
        return response.status(200).json({
          message: "success",
        });
      }
    });
    return NextResponse.json({
      message: "success",
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      message: "error",
    });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {});
  const product = await res.json();

  return Response.json({ product });
}
