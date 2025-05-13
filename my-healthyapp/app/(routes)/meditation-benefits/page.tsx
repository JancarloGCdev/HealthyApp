// routes/meditation/page.tsx

import MeditationBenefits from "./components/MeditationBenefits";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Benefits of Meditation You Didn't Know - FastFitGrow",
  description:
    "Discover the surprising benefits of meditation for mental clarity, stress relief, and physical health. Start your practice today to unlock these benefits.",
  keywords: [
    "meditation benefits",
    "mental clarity",
    "stress relief",
    "mindfulness",
    "wellness",
    "fastfitgrow",
  ],
  openGraph: {
    title: "10 Benefits of Meditation You Didn't Know - FastFitGrow",
    description:
      "Discover the surprising benefits of meditation for mental clarity, stress relief, and physical health. Start your practice today to unlock these benefits.",
    url: "https://fastfitgrow.com/meditation",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://fastfitgrow.com/meditation",
  },
};

export default function MeditationPage() {
  return (
    <div>
      <MeditationBenefits />
    </div>
  );
}
