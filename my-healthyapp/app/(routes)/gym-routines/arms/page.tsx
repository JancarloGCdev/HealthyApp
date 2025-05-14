// app/arms/page.tsx
import ArmsWorkoutPlan from "./components/ArmsWorkout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arms Workout Plan | FastFitGrow",
  description:
    "Build strong, toned arms with our expert-approved arms workout plan. Includes biceps, triceps, and forearms exercises for all levels.",
  keywords: [
    "arms workout",
    "biceps exercises",
    "triceps workout",
    "forearms routine",
    "arm day",
    "shoulders workout",
    "shoulders routine",
    "muscle building arms",
    "FastFitGrow fitness",
  ],
  openGraph: {
    title: "Arms Workout Plan | FastFitGrow",
    description:
      "Build strong, toned arms with our expert-approved arms workout plan. Includes biceps, triceps, and forearms exercises for all levels.",
    url: "https://fastfitgrow.com/arms",
    siteName: "FastFitGrow",
    images: [
      {
        url: "https://fastfitgrow.com/images/arms-workout.jpg",
        width: 1200,
        height: 630,
        alt: "Arms Workout Routine",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arms Workout Plan | FastFitGrow",
    description:
      "Build strong, toned arms with our expert-approved arms workout plan. Includes biceps, triceps, and forearms exercises.",
    images: ["https://fastfitgrow.com/images/arms-workout.jpg"],
  },
};

export default function ArmsWorkoutPage() {
  return <ArmsWorkoutPlan />;
}
