// components/MeditationBenefits.tsx

import React from "react";
import ArticlePreview from "@/components/ArticlePreview";
import Image from "next/image";

const MeditationBenefits = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">10 Benefits of Meditation You Didn't Know</h1>
        <p className="text-lg text-gray-600">Updated May 2025 • 6 min read</p>
      </header>
        <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
            <Image
            src="/images/begin.png"
            alt="Mature person walking on a peaceful path in a modern fitness center, symbolizing the start of a wellness journey."
            fill
            className="object-cover"
            />
        </div>

      <section className="mb-8">
        <p className="text-lg mb-6">
          Meditation has long been celebrated for its mental and physical benefits, but did you know that it can do more than just help you relax? Here are 10 surprising benefits that might inspire you to start a meditation practice.
        </p>

            <ol className="pl-12 space-y-2 text-gray-800 list-decimal">
            <li>Improves brain function and cognitive performance.</li>
            <li>Enhances emotional health and reduces stress.</li>
            <li>Boosts your immune system, helping you stay healthy.</li>
            <li>Increases focus and concentration.</li>
            <li>Helps regulate your sleep patterns and improves rest quality.</li>
            <li>Reduces symptoms of anxiety and depression.</li>
            <li>Improves your ability to cope with pain.</li>
            <li>Promotes a sense of well-being and inner peace.</li>
            <li>Improves heart health by reducing blood pressure.</li>
            <li>Increases self-awareness and mindfulness in daily life.</li>
            </ol>

      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why You Should Start Meditating</h2>
        <p className="mb-4">
          If you're looking to reduce stress, improve your focus, or simply feel more balanced, meditation offers an easy yet highly effective way to boost your mental and physical health.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ArticlePreview
            title="How to Get Started with Meditation"
            excerpt="Discover simple meditation techniques to integrate into your daily routine for better health and well-being."
            link="/routes/meditation/start"
            imageSrc="/images/meditation-start.jpg" // Ruta a la imagen
            imageAlt="Getting Started with Meditation" // Texto alternativo de la imagen
            />
            <ArticlePreview
            title="Pre-Workout Nutrition: What to Eat Before Exercising for Maximum Energy"
            excerpt="Fuel your body with the right nutrients before hitting the gym. Learn about the best foods to eat to boost your energy and performance during workouts."
            link="/routes/nutrition/pre-workout"
            imageSrc="/images/pre-workout-nutrition.jpg" // Ruta a la imagen
            imageAlt="Pre-Workout Nutrition" // Texto alternativo de la imagen
            />
            <ArticlePreview
            title="The Best Post-Workout Meals to Replenish Your Body and Recover Faster"
            excerpt="Learn what to eat after exercising to speed up recovery, rebuild muscle, and stay energized for your next workout."
            link="/routes/nutrition/post-workout"
            imageSrc="/images/post-workout-meals.jpg" // Ruta a la imagen
            imageAlt="Post-Workout Nutrition" // Texto alternativo de la imagen
            />
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Meditation Tips for Beginners</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Start with 5 minutes each day and gradually increase the time.</li>
          <li>Focus on your breath and gently bring your mind back when it wanders.</li>
          <li>Choose a quiet, comfortable space where you won’t be disturbed.</li>
          <li>Don’t judge your thoughts; simply observe them and return to your breath.</li>
        </ul>
      </section>
    </main>
  );
};

export default MeditationBenefits;
