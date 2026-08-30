import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { JSX } from "react";

import content from "@/app/content/siteContent";

export interface ISocialMediaIcon {
  icon: JSX.Element;
  href: string;
  label: string;
}

const socialItems = content.socialMedia.items;

export const socialMediaIconArray: ISocialMediaIcon[] = [
  {
    icon: <MailOutlineIcon fontSize="large" />,
    href: socialItems[0].href,
    label: socialItems[0].label,
  },
  {
    icon: <LinkedInIcon fontSize="large" />,
    href: socialItems[1].href,
    label: socialItems[1].label,
  },
  {
    icon: <GitHubIcon fontSize="large" />,
    href: socialItems[2].href,
    label: socialItems[2].label,
  },
  {
    icon: <FacebookIcon fontSize="large" />,
    href: socialItems[3].href,
    label: socialItems[3].label,
  },
  {
    icon: <InstagramIcon fontSize="large" />,
    href: socialItems[4].href,
    label: socialItems[4].label,
  },
];
