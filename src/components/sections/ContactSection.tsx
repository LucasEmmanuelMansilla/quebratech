"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactSection } from "@/content/marketing";
import { cn } from "@/lib/cn";
import { submitContact } from "@/services/contact.service";
import type { ContactPayload } from "@/types/contact";

const initialState: ContactPayload = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<ContactPayload>(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    setFeedback("");

    const result = await submitContact(form);
    setLoading(false);

    if (result.ok) {
      setStatus("success");
      setFeedback(contactSection.successMessage);
      setForm(initialState);
      return;
    }

    setStatus("error");
    setFeedback(result.message ?? contactSection.errorMessage);
  };

  return (
    <section id="contacto" className="bg-surface py-16 sm:py-24">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          align="left"
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          description={contactSection.description}
        />

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-neutral-darker/50 bg-white p-6 shadow-xl shadow-primary/5 sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Nombre"
              name="name"
              value={form.name}
              onChange={onChange}
              required
              autoComplete="name"
            />
            <Field
              id="email"
              label="Correo electrónico"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              autoComplete="email"
            />
          </div>

          <div className="mt-5">
            <Field
              id="company"
              label="Empresa"
              name="company"
              value={form.company}
              onChange={onChange}
              autoComplete="organization"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-primary"
            >
              ¿Qué problema necesitás resolver?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
              required
              placeholder="Ej.: Estamos creciendo y la operación se nos va de las manos con planillas y procesos manuales..."
              className="w-full resize-none rounded-xl border border-neutral-darker/70 bg-white px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {feedback ? (
            <p
              role="status"
              className={cn(
                "mt-5 rounded-xl px-4 py-3 text-sm",
                status === "success"
                  ? "bg-tertiary/15 text-secondary"
                  : "bg-quaternary/10 text-quaternary-darker",
              )}
            >
              {feedback}
            </p>
          ) : null}

          <div className="mt-6 flex justify-end">
            <Button type="submit" variant="primary" size="lg" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar consulta
                  <Send size={16} />
                </>
              )}
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  name: keyof ContactPayload;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({
  id,
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-primary">
        {label}
        {required ? <span className="text-quaternary"> *</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-neutral-darker/70 bg-white px-4 py-3 text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
