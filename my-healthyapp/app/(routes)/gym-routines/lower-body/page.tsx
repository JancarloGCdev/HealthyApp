import LowerBodyWorkout from "./components/LowerBodyWorkout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lower body workout plan - FastFitGrow",
  description:
    "Discover an effective lower body workout plan to strengthen your legs, glutes, and calves. Includes squats, lunges, glute bridges, and more.",
  keywords: [
    "lower body workout",
    "leg day",
    "glute exercises",
    "fitness routine",
    "home workout",
    "fastfitgrow"
  ],
  openGraph: {
    title: "Lower Body Workout Plan - FastFitGrow",
    description:
      "Discover an effective lower body workout plan to strengthen your legs, glutes, and calves. Includes squats, lunges, glute bridges, and more.",
    url: "https://fastfitgrow.com/gym-routines/lower-body",
    type: "article",
    locale: "en_US"
  },
  alternates: {
    canonical: "https://fastfitgrow.com/gym-routines/lower-body"
  }
};

export default function LowerBodyPage() {
  return <LowerBodyWorkout />;
}
