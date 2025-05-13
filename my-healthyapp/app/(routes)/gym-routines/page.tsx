import GymRoutines from "./components/GymRoutines";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Routines for Strength and Health - FastFitGrow",
  description:
    "Explore our gym workout routines for upper body, lower body, and arms. Build strength, improve endurance, and stay healthy with FastFitGrow.",
  keywords: [
    "gym routines",
    "workout plans",
    "upper body workout",
    "lower body workout",
    "arm exercises",
    "fitness",
    "strength training",
    "FastFitGrow"
  ],
  openGraph: {
    title: "Gym Routines for Strength and Health - FastFitGrow",
    description:
      "Explore our gym workout routines for upper body, lower body, and arms. Build strength, improve endurance, and stay healthy with FastFitGrow.",
    url: "https://fastfitgrow.com/gymroutines",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://fastfitgrow.com/gymroutines",
  },
};

export default function GymRoutinesPage() {
  return (
    <div>
      <GymRoutines />
    </div>
  );
}
