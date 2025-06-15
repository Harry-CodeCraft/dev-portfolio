"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const router = useRouter();
  const [browserInfo, setBrowserInfo] = useState({
    appName: "",
    appVersion: "",
    platform: "",
    userAgent: "",
    language: "",
  });

  useEffect(() => {
    // Access `window.navigator` only in the browser
    setBrowserInfo({
      appName: window.navigator.appName, // Browser name
      appVersion: window.navigator.appVersion, // Browser version
      platform: window.navigator.platform, // Operating system
      userAgent: window.navigator.userAgent, // User agent string
      language: window.navigator.language, // Browser language
    });
  }, []);

  const createUrlWithQueryParams = () => {
    const queryParams = new URLSearchParams(browserInfo).toString();
    return `/?${queryParams}`;
  };

  const urlWithParams = createUrlWithQueryParams();
  useEffect(() => {
    // Log the generated URL with query parameters
    router.push(urlWithParams);
  }, [browserInfo]);

  return (
    <div>
      <h1>Landing Page</h1>
      <p>Browser Info:</p>
      <ul>
        <li>App Name: {browserInfo.appName}</li>
        <li>App Version: {browserInfo.appVersion}</li>
        <li>Platform: {browserInfo.platform}</li>
        <li>User Agent: {browserInfo.userAgent}</li>
        <li>Language: {browserInfo.language}</li>
      </ul>
      <p>Generated URL:</p>
    </div>
  );
};

export default LandingPage;
