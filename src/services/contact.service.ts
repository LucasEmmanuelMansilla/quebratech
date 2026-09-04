import { brand } from "@/content/marketing";
import type { ContactPayload, ContactResult } from "@/types/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload: ContactPayload): string | null {
  if (!payload.name.trim()) return "El nombre es obligatorio.";
  if (!payload.email.trim() || !EMAIL_PATTERN.test(payload.email)) {
    return "Ingresá un correo electrónico válido.";
  }
  if (!payload.message.trim() || payload.message.trim().length < 10) {
    return "Contanos un poco más sobre tu desafío (mínimo 10 caracteres).";
  }
  return null;
}

type FormSubmitResponse = {
  success?: boolean | string;
  message?: string;
};

function formSubmitEndpoint() {
  return `https://formsubmit.co/ajax/${encodeURIComponent(brand.email)}`;
}

function interpretFormSubmitResponse(data: FormSubmitResponse): ContactResult {
  const rawMessage = data.message?.trim() ?? "";
  const success = data.success === true || data.success === "true";

  if (success) {
    return { ok: true };
  }

  return {
    ok: false,
    message: rawMessage || "No pudimos enviar tu consulta.",
  };
}

/**
 * Sends the contact form from the browser to the personal inbox.
 * No Next.js API route or custom mail server is involved.
 */
export async function submitContact(
  payload: ContactPayload,
  honeypot = "",
): Promise<ContactResult> {
  const validationError = validateContactPayload(payload);
  if (validationError) {
    return { ok: false, message: validationError };
  }

  if (honeypot.trim()) {
    return { ok: true };
  }

  try {
    const response = await fetch(formSubmitEndpoint(), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Nombre: payload.name,
        email: payload.email,
        Empresa: payload.company.trim() || "No indicada",
        Mensaje: payload.message,
        _subject: `Nueva consulta de ${payload.name} — ${brand.displayName}`,
        _template: "table",
        _captcha: "false",
        _replyto: payload.email,
      }),
    });

    const data = (await response.json().catch(() => ({}))) as FormSubmitResponse;

    if (!response.ok && data.success === undefined) {
      return {
        ok: false,
        message: data.message ?? "No pudimos enviar tu consulta.",
      };
    }

    return interpretFormSubmitResponse(data);
  } catch {
    return { ok: false, message: "Error de conexión. Intentá nuevamente." };
  }
}
