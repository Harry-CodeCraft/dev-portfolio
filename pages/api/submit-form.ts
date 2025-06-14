import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { publicRuntimeConfig } = getConfig();
  if (!publicRuntimeConfig.emailJs) {
    return res.status(500).json({
      error: "EmailJS public key, service ID, and template ID not configured",
    });
  }
  const { publicKey, serviceId, templateId } = publicRuntimeConfig.emailJs;
  const { templateParams } = req.body;

  try {
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: { ...templateParams },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(200).json({ success: true, response: response.data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("EmailJS Error:", error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      error: error.response?.data || "Internal Server Error",
    });
  }
}
