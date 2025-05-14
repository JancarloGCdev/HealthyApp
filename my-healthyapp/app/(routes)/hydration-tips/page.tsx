import HydrationTipsPage from "./components/hydration-tips";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 7 Hydration Tips for a Healthier Day - FastFitGrow",
  description:
    "Discover 7 practical and science-backed hydration tips to help you stay energized, focused, and healthy throughout your day.",
  keywords: [
    "hydration tips",
    "how to drink more water",
    "hydration and health",
    "water intake",
    "healthy lifestyle",
    "fastfitgrow"
  ],
  openGraph: {
    title: "Top 7 Hydration Tips for a Healthier Day - FastFitGrow",
    description:
      "Discover 7 practical and science-backed hydration tips to help you stay energized, focused, and healthy throughout your day.",
    url: "https://fastfitgrow.com/hydration-tips",
    type: "article",
    locale: "en_US"
  },
  alternates: {
    canonical: "https://fastfitgrow.com/hydration-tips"
  }
};

export default function HydrationTips() {
  return <HydrationTipsPage />;
}
