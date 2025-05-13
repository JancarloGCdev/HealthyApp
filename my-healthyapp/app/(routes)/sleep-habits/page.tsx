import SleepHabits from "./components/SleepHabits";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthy Sleep Habits – FastFitGrow",
  description:
    "Learn the best sleep habits for better rest, health, and productivity. Discover how to create a consistent routine, improve sleep quality, and boost well-being.",
  keywords: [
    "sleep habits",
    "healthy sleep",
    "how to sleep better",
    "bedtime routine",
    "insomnia",
    "wellbeing tips",
    "FastFitGrow"
  ],
  openGraph: {
    title: "Healthy Sleep Habits – FastFitGrow",
    description:
      "Discover how to improve your sleep and overall health with these science-backed habits.",
    url: "https://fastfitgrow.com/tips/sleep-habits",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://fastfitgrow.com/tips/sleep-habits",
  },
};

export default function SleepHabitsPage() {
  return <SleepHabits />;
}
