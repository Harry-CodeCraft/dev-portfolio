"use client";

import React from "react";
import MainSection from "@/app/components/portfolioComponents/mainSection/mainSection";
import TimelineSection from "@/app/components/portfolioComponents/timelineSection";
import expJson from "@/mock/experience.json";
import eduJson from "@/mock/education.json";
import Skills from "@/app/components/portfolioComponents/skills";

export default function PortfolioPage() {
  return (
    <>
      <MainSection />
      <TimelineSection jsonData={expJson} heading="My Work Experience" />
      <TimelineSection jsonData={eduJson} heading="Education" />
      <Skills />
    </>
  );
}
