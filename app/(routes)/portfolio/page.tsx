"use client";

import { useTheme } from "@mui/material";
import React from "react";

import Footer from "@/app/components/portfolioComponents/footer";
import MainSection from "@/app/components/portfolioComponents/mainSection/mainSection";
import Projects from "@/app/components/portfolioComponents/projects";
import Skills from "@/app/components/portfolioComponents/skills/skills";
import TimelineSection from "@/app/components/portfolioComponents/timelineSection";
import ContactUsForm from "@/app/components/reusableComponents/contactUsForm";
import eduJson from "@/mock/education.json";
import expJson from "@/mock/experience.json";

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
