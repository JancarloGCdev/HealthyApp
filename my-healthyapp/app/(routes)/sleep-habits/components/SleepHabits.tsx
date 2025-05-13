import Image from "next/image";
import React from "react";

export default function SleepHabits() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Healthy sleep habits for a better life</h1>
        <p className="text-lg text-gray-600">Updated May 2025 • 4 min read</p>
      </header>
      <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
        <Image
          src="/images/begin.png"
          alt="Glass of water with lemon"
          fill
          className="object-cover"
        />
      </div>
      <article>
        <p className="text-lg mb-6">
          Sleep is a fundamental pillar of health, just like diet and exercise. In this article, we’ll explore practical, science-backed sleep habits to improve your quality of rest, mood, and overall well-being.
        </p>

        {/* Ad Slot */}
        <div className="my-8 text-center">
          {/* Aquí podrías insertar un bloque de AdSense */}
          <p className="text-sm text-gray-500">[Ad placement]</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Why Sleep Matters</h2>
        <p className="mb-4">
          Getting enough sleep helps your brain function properly, boosts your immune system, balances hormones, and supports emotional regulation. Chronic lack of sleep is linked to serious health problems like heart disease, obesity, and depression.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Recommended Sleep Duration</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Children (6–13 years): 9–11 hours</li>
          <li>Teenagers (14–17 years): 8–10 hours</li>
          <li>Adults (18–64 years): 7–9 hours</li>
          <li>Older adults (65+): 7–8 hours</li>
        </ul>

        {/* Ad Slot */}
        <div className="my-8 text-center">
          <p className="text-sm text-gray-500">[Ad placement]</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Habits That Promote Better Sleep</h2>
        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li>Stick to a consistent sleep schedule, even on weekends.</li>
          <li>Limit exposure to screens at least 1 hour before bedtime.</li>
          <li>Create a relaxing pre-sleep routine: reading, meditation, or warm baths.</li>
          <li>Keep your room dark, quiet, and cool.</li>
          <li>Avoid caffeine, alcohol, and heavy meals late in the day.</li>
          <li>Exercise regularly (but not right before bed).</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Sleep Aids & Natural Remedies</h2>
        <p className="mb-4">
          Some people benefit from herbal teas (like chamomile or valerian root), magnesium supplements, or melatonin. Always consult a doctor before starting any supplement.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Apps That Can Help</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Calm – For guided meditations and sleep stories</li>
          <li>Sleep Cycle – To track sleep patterns and optimize wake-up time</li>
          <li>Headspace – For mindfulness and relaxation</li>
        </ul>

        {/* Ad Slot */}
        <div className="my-8 text-center">
          <p className="text-sm text-gray-500">[Ad placement]</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Common Myths About Sleep</h2>
        <ul className="list-disc list-inside mb-6">
          <li>"I can catch up on weekends" – Sleep debt isn’t so easily repaid.</li>
          <li>"Alcohol helps me sleep" – It disrupts deep REM cycles.</li>
          <li>"Everyone needs 8 hours" – Needs vary by age and genetics.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="mb-6">
          <h3 className="font-bold">Is it bad to use my phone before bed?</h3>
          <p className="mb-4">Yes, blue light from screens can delay melatonin production, making it harder to fall asleep.</p>

          <h3 className="font-bold">What if I can’t fall asleep after 30 minutes?</h3>
          <p>Get out of bed, do something relaxing (no screens), and return when sleepy.</p>
        </div>

        {/* Final Ad Slot */}
        <div className="my-10 text-center">
          <p className="text-sm text-gray-500">[Ad placement]</p>
        </div>

        <p className="text-lg mt-8 font-semibold text-center">
          Prioritize your sleep – your body and mind will thank you!
        </p>
      </article>
    </main>
  );
}
