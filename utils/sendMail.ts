import axios from "axios";

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export async function sendMail(formData: FormData): Promise<boolean> {
  let ok: boolean = false;
  try {
    const res = await axios.post("https://quebratech-server.onrender.com/api/sendMail", {
      formData,
    });
    if (res.status === 200) {
      ok = true;
    }
    return ok;
  } catch (error) {
    return false;
  }
}
