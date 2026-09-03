"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import env from "../config/env";
import fallbackContent from "@/app/content/siteContent.json";

export type SiteContent = typeof fallbackContent;

const DEFAULT_GIST_URL = env.contentBaseUrl;
const USE_GIST_IN_PROD = process.env.NEXT_PUBLIC_USE_GIST_IN_PROD === "true";

const sharedState: {
  data: SiteContent | null;
  promise: Promise<SiteContent> | null;
} = {
  data: null,
  promise: null,
};

const SiteContentContext = createContext<SiteContent | null>(null);

function isValidSiteContent(value: unknown): value is SiteContent {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    !!candidate.mainSection &&
    !!candidate.studyRoomCard &&
    !!candidate.header &&
    !!candidate.footer &&
    !!candidate.socialMedia &&
    !!candidate.contact &&
    !!candidate.workExperience &&
    !!candidate.personalDevExp &&
    !!candidate.education &&
    !!candidate.projects &&
    !!candidate.skills
  );
}

async function fetchSiteContent(): Promise<SiteContent> {
  if (sharedState.data) {
    return sharedState.data;
  }

  if (sharedState.promise) {
    return sharedState.promise;
  }

  if (!USE_GIST_IN_PROD) {
    sharedState.data = fallbackContent as SiteContent;
    return sharedState.data;
  }

  sharedState.promise = axios
    .get<SiteContent>(DEFAULT_GIST_URL)
    .then((response) => {
      const rawContent = response?.data;
      const validContent = isValidSiteContent(rawContent)
        ? (rawContent as SiteContent)
        : fallbackContent;

      if (validContent === fallbackContent) {
        console.warn(
          "Site content gist response was empty or invalid; falling back to local JSON.",
          rawContent,
        );
      } else {
        // eslint-disable-next-line no-console
        console.log("Site content loaded from gist:", validContent);
      }

      sharedState.data = validContent as SiteContent;
      return validContent as SiteContent;
    })
    .catch((error) => {
      console.warn(
        "Site content gist failed, falling back to local JSON:",
        error,
      );
      sharedState.data = fallbackContent as SiteContent;
      return fallbackContent as SiteContent;
    })
    .finally(() => {
      sharedState.promise = null;
    });

  return sharedState.promise;
}

export function SiteContentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    let active = true;

    fetchSiteContent().then((data) => {
      if (active) {
        setContent(data);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const value = useMemo(() => content ?? fallbackContent, [content]);

  return (
    <SiteContentContext.Provider value={value}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  const context = useContext(SiteContentContext);

  if (!context) {
    return fallbackContent as SiteContent;
  }

  return context;
}
