"use client";

import { useTheme } from "@mui/material";
import React from "react";

import Footer from "@/app/components/portfolioComponents/footer";
import MainSection from "@/app/components/portfolioComponents/mainSection/mainSection";
import Projects from "@/app/components/portfolioComponents/projects";
import Skills from "@/app/components/portfolioComponents/skills/skills";
import TimelineSection from "@/app/components/portfolioComponents/timelineSection";
import ContactUsForm from "@/app/components/reusableComponents/contactUsForm";
import fallbackContent from "@/app/content/siteContent.json";
import { useSiteContent } from "@/app/context/siteContentContext";

export default function PortfolioPage() {
  const theme = useTheme();
  const content = useSiteContent();
  const workExperience =
    content?.workExperience ?? fallbackContent.workExperience;
  const personalDevExp =
    content?.personalDevExp ?? fallbackContent.personalDevExp;

  return (
    <>
      <MainSection content={content.mainSection} />
      <TimelineSection
        jsonData={workExperience.items ?? []}
        heading={workExperience.title ?? "Work Experience"}
        theme={theme}
      />
      <br />
      <TimelineSection
        jsonData={personalDevExp.items ?? []}
        heading={personalDevExp.title ?? "Personal Development Experience"}
        theme={theme}
      />
      <Skills content={content.skills} />
      <Projects content={content.projects} />
      <ContactUsForm />
      <Footer />
    </>
  );
}
