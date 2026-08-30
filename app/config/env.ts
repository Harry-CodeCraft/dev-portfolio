// app/config/env.ts
const env = {
  linkedInProfilePic:
    process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_PIC || "/images/profile2.avif",
  useGistInProdContent: process.env.NEXT_PUBLIC_USE_GIST_IN_PROD || "false",
  contentBaseUrl:
    process.env.NEXT_PUBLIC_GITHUB_GIST_CONTENT_URL ||
    "https://gist.githubusercontent.com/Harry-CodeCraft/32b0226f809c245dabb920e07141267e/raw/7daeb3d35d2d61c4266e1241279003cd8d04f1ff/portfolio-main-home.json",
  emailJs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "",
  },
};

export default env;
