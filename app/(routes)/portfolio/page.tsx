"use client";

import React from "react";
import MainSection from "@/app/components/portfolioComponents/mainSection/mainSection";
import TimelineSection from "@/app/components/portfolioComponents/timelineSection";
import expJson from "@/mock/experience.json";
import eduJson from "@/mock/education.json";
import Skills from "@/app/components/portfolioComponents/skills/skills";
import { useTheme } from "@mui/material";
import ContactUsForm from "@/app/components/reusableComponents/contactUsForm";
import Footer from "@/app/components/portfolioComponents/footer";
import Projects from "@/app/components/portfolioComponents/projects";

export default function PortfolioPage() {
  const theme = useTheme();
  return (
    <>
      <MainSection />
      <TimelineSection
        jsonData={expJson}
        heading="My Work Experience"
        theme={theme}
      />
      <TimelineSection jsonData={eduJson} heading="Education" theme={theme} />
      <Skills />
      <Projects />
      <ContactUsForm />
      <Footer />
    </>
  );
}
