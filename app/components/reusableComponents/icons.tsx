import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { JSX } from "react";

export interface ISocialMediaIcon {
  icon: JSX.Element;
  href: string;
  label: string;
}

export const socialMediaIconArray: ISocialMediaIcon[] = [
  {
    icon: <MailOutlineIcon fontSize="large" />,
    href: "mailto:harrusingh81@gmail.com",
    label: "Email",
  },
  {
    icon: <LinkedInIcon fontSize="large" />,
    href: "https://www.linkedin.com/in/harsh-singh10352/",
    label: "LinkedIn",
  },
  {
    icon: <GitHubIcon fontSize="large" />,
    href: "https://github.com/Harry-CodeCraft",
    label: "GitHub",
  },
  {
    icon: <FacebookIcon fontSize="large" />,
    href: "https://facebook.com/yourprofile",
    label: "Facebook",
  },
  {
    icon: <InstagramIcon fontSize="large" />,
    href: "https://instagram.com/rajput.harshh",
    label: "Instagram",
  },
];
