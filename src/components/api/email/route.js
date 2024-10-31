import { Resend } from "resend";
import WelcomeEmail from "../../email/welcome";

const resend = new Resend("re_9FbUMKVW_9vZsMwEGGGgyiHUytERdwfAo");

export async function POST() {
  try {
    await resend.emails.send({
      from: "",
      to: "ogagahopesontega@gmail.com",
      subject: "hello world",
      react: WelcomeEmail(),  
    });
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
