// app/config/env.ts
const env = {
  linkedInProfilePic:
    process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_PIC || "/images/profile2.avif",
  useGistInProdContent: process.env.NEXT_PUBLIC_USE_GIST_IN_PROD || "false",
  contentBaseUrl: process.env.NEXT_PUBLIC_GITHUB_GIST_CONTENT_URL || "",
  emailJs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "",
  },
};

export default env;
