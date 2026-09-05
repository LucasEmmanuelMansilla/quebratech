import { brand, getCopy } from "@/content/marketing";
import type { Audience } from "@/content/types";
import type { ContactPayload, ContactResult } from "@/types/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload: ContactPayload): string | null {
  if (!payload.name.trim()) return "El nombre es obligatorio.";
  if (!payload.email.trim() || !EMAIL_PATTERN.test(payload.email)) {
    return "Ingresá un correo electrónico válido.";
  }
  if (!payload.message.trim() || payload.message.trim().length < 10) {
    return "Contanos un poco más sobre lo que querés resolver (mínimo 10 caracteres).";
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

function formPageUrl() {
  if (typeof window === "undefined") return undefined;
  return `${window.location.origin}${window.location.pathname}`;
}

function isFormSubmitAccepted(data: FormSubmitResponse): boolean {
  if (data.success === true || data.success === "true") return true;
  // FormSubmit often replies with this even after the inbox is already receiving mail.
  return /activat/i.test(data.message ?? "");
}

function interpretFormSubmitResponse(data: FormSubmitResponse): ContactResult {
  if (isFormSubmitAccepted(data)) {
    return { ok: true };
  }

  return {
    ok: false,
    message: "No pudimos enviar tu consulta.",
  };
}

type SubmitContactOptions = {
  source: Audience;
  companyLabel: string;
};

/**
 * Sends the contact form from the browser to the personal inbox.
 * No Next.js API route or custom mail server is involved.
 */
export async function submitContact(
  payload: ContactPayload,
  honeypot = "",
  options: SubmitContactOptions = {
    source: "comercios",
    companyLabel: "Negocio / Rubro",
  },
): Promise<ContactResult> {
  const validationError = validateContactPayload(payload);
  if (validationError) {
    return { ok: false, message: validationError };
  }

  if (honeypot.trim()) {
    return { ok: true };
  }

  const copy = getCopy(options.source);

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
        [options.companyLabel]: payload.company.trim() || "No indicado",
        Mensaje: payload.message,
        Origen: copy.sourceLabel,
        _subject: `Nueva consulta de ${payload.name} — ${brand.displayName} (${copy.sourceLabel})`,
        _template: "table",
        _captcha: "false",
        _replyto: payload.email,
        _url: formPageUrl(),
      }),
    });

    const data = (await response.json().catch(() => ({}))) as FormSubmitResponse;

    if (!response.ok && data.success === undefined) {
      return {
        ok: false,
        message: "No pudimos enviar tu consulta.",
      };
    }

    return interpretFormSubmitResponse(data);
  } catch {
    return { ok: false, message: "Error de conexión. Intentá nuevamente." };
  }
}
