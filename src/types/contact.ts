export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export type ContactResult = {
  ok: boolean;
  message?: string;
};
