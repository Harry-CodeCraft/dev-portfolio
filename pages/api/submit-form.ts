import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type TemplateParams = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const requestLog = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const MAX_FIELD_LENGTH = 2000;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10kb",
    },
  },
};

function getClientKey(req: NextApiRequest) {
  const forwardedFor = req.headers["x-forwarded-for"];
  const forwardedIp = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : forwardedFor?.split(",")[0];

  return forwardedIp?.trim() || req.socket.remoteAddress || "unknown";
}

function isTemplateParams(value: unknown): value is TemplateParams {
  if (!value || typeof value !== "object") {
    return false;
  }

  const params = value as Record<string, unknown>;
  return ["name", "email", "subject", "message"].every(
    (field) =>
      typeof params[field] === "string" &&
      params[field].trim().length > 0 &&
      params[field].length <= MAX_FIELD_LENGTH,
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const now = Date.now();
  const clientKey = getClientKey(req);
  const current = requestLog.get(clientKey);
  const entry =
    current && current.resetAt > now
      ? current
      : { count: 0, resetAt: now + RATE_WINDOW_MS };

  if (entry.count >= RATE_LIMIT) {
    res.setHeader("Retry-After", Math.ceil((entry.resetAt - now) / 1000));
    return res.status(429).json({ error: "Too many requests" });
  }

  entry.count += 1;
  requestLog.set(clientKey, entry);

  const publicKey = process.env.EMAILJS_PUBLIC_KEY || "";
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

  if (!publicKey || !serviceId || !templateId) {
    return res.status(500).json({ error: "Email service unavailable" });
  }
  const templateParams = req.body?.templateParams;

  if (!isTemplateParams(templateParams)) {
    return res.status(400).json({ error: "Invalid contact form data" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(templateParams.email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      },
    );

    return res.status(200).json({ success: true });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "EmailJS request failed with status:",
        error.response?.status,
      );
    } else {
      console.error("EmailJS request failed");
    }

    return res.status(502).json({
      success: false,
      error: "Unable to send your message",
    });
  }
}
