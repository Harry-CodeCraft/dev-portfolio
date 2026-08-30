"use client";

import { useTheme } from "@mui/material";
import React from "react";

import Footer from "@/app/components/portfolioComponents/footer";
import MainSection from "@/app/components/portfolioComponents/mainSection/mainSection";
import Projects from "@/app/components/portfolioComponents/projects";
import Skills from "@/app/components/portfolioComponents/skills/skills";
import TimelineSection from "@/app/components/portfolioComponents/timelineSection";
import ContactUsForm from "@/app/components/reusableComponents/contactUsForm";
import { useSiteContent } from "@/app/context/siteContentContext";

export default function PortfolioPage() {
  const theme = useTheme();
  const content = useSiteContent();

  return (
    <>
      <MainSection content={content.mainSection} />
      <TimelineSection
        jsonData={content.workExperience.items}
        heading={content.workExperience.title}
        theme={theme}
      />
      <br />
      <TimelineSection
        jsonData={content.personalDevExp.items}
        heading={content.personalDevExp.title}
        theme={theme}
      />
      <Skills content={content.skills} />
      <Projects content={content.projects} />
      <ContactUsForm />
      <Footer />
    </>
  );
}
