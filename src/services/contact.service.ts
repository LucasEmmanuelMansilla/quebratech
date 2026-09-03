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

/**
 * Facade over the contact transport.
 * Keeps UI free of API details and enables swapping providers later.
 */
export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const validationError = validateContactPayload(payload);
  if (validationError) {
    return { ok: false, message: validationError };
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => ({}))) as {
      message?: string;
    };

    if (!response.ok) {
      return {
        ok: false,
        message: data.message ?? "No pudimos enviar tu consulta.",
      };
    }

    return { ok: true, message: data.message };
  } catch {
    return { ok: false, message: "Error de conexión. Intentá nuevamente." };
  }
}
