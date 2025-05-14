import { Metadata } from "next";
import UpperBodyWorkoutPlan from "./components/UpperBody";

export const metadata: Metadata = {
  title: "Upper Body Workout Plan - FastFitGrow",
  description:
    "Build strength and tone your upper body with our effective workout plan. Target your chest, shoulders, and back for optimal results.",
  keywords: [
    "upper body workout",
    "chest workout",
    "shoulder workout",
    "back workout",
    "strength training",
    "fastfitgrow"
  ],
  openGraph: {
    title: "Upper Body Workout Plan - FastFitGrow",
    description:
      "Build strength and tone your upper body with our effective workout plan. Target your chest, shoulders, and back for optimal results.",
    url: "https://fastfitgrow.com/gymroutines/upperbody",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://fastfitgrow.com/gymroutines/upperbody",
  },
};

export default function UpperBodyPage() {
  return (
    <div>
      <UpperBodyWorkoutPlan />
    </div>
  );
}
