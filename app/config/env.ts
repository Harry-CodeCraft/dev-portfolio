// app/config/env.ts
const env = {
  linkedInProfilePic:
    process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_PIC || "/images/profile2.avif",
  emailJs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "",
  },
};

export default env;
