import NutritionAdvice from "./components/NutritionAdvice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutrition Advice for a Healthier Life - FastFitGrow",
  description:
    "Get evidence-based nutrition advice to help improve your overall health and well-being. Consult with a doctor before making any dietary changes.",
  keywords: [
    "nutrition",
    "healthy eating",
    "diet advice",
    "wellness",
    "fastfitgrow"
  ],
  openGraph: {
    title: "Nutrition Advice for a Healthier Life - FastFitGrow",
    description:
      "Get evidence-based nutrition advice to help improve your overall health and well-being. Consult with a doctor before making any dietary changes.",
    url: "https://fastfitgrow.com/nutrition-advice",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://fastfitgrow.com/nutrition-advice",
  },
};

export default function NutritionPage() {
  return (
    <div>
      <NutritionAdvice />
    </div>
  );
}
