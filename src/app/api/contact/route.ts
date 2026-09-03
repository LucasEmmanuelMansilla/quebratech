import { NextResponse } from "next/server";
import { validateContactPayload } from "@/services/contact.service";
import type { ContactPayload } from "@/types/contact";

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Solicitud inválida." },
      { status: 400 },
    );
  }

  const validationError = validateContactPayload(payload);
  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  const contactApiUrl = process.env.CONTACT_API_URL;

  if (contactApiUrl) {
    try {
      const upstream = await fetch(contactApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData: payload }),
      });

      if (!upstream.ok) {
        return NextResponse.json(
          { message: "El servicio de correo no respondió correctamente." },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { message: "No pudimos contactar el servicio de correo." },
        { status: 502 },
      );
    }
  } else if (process.env.NODE_ENV === "production") {
    console.info("[contact]", {
      name: payload.name,
      email: payload.email,
      company: payload.company,
      messageLength: payload.message.length,
    });
  }

  return NextResponse.json({
    message: "Consulta recibida correctamente.",
  });
}
