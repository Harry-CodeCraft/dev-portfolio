/* eslint-disable @typescript-eslint/no-explicit-any */
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export function initEmailJS() {
  // eslint-disable-next-line no-console
  console.log("Initializing EmailJS...");
  // Initialize EmailJS with your public key

  emailjs.init({
    publicKey: "FV-A6ZV2rj9oxW4zN",
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: [""],
      // The variable contains the email address
      watchVariable: "email",
    },
  });
}

export async function sendEmail(
  templateParams: Record<string, any>,
  config: any
): Promise<EmailJSResponseStatus> {
  const { publicKey, serviceId, templateId } = config;
  try {
    // Send the email using EmailJS
    const response = await emailjs.send(
      serviceId, // Replace with your EmailJS service ID
      templateId, // Replace with your EmailJS template ID
      templateParams,
      publicKey // Replace with your EmailJS user ID
    );
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email.");
  }
}
