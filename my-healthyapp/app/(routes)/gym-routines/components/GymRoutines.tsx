import Section from "@/components/Section";
import AdPlaceholder from "@/components/Adplaceholder";
import ArticlePreview from "@/components/ArticlePreview";
import Image from "next/image";

export default function GymRoutines() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Your ultimate guide to Gym routines by muscle group</h1>
        <p className="text-lg text-gray-600">Updated May 2025 • 1 min read</p>
      </header>

      <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
        <Image
          src="/images/begin.png"
          alt="Glass of water with lemon"
          fill
          className="object-cover"
        />
      </div>
      <Section title="Gym Routines Overview">
        <p className="text-lg">
          Achieve your fitness goals with our structured gym routines. Whether you want to build strength, improve endurance,
          or tone specific muscle groups, we provide clear and effective workout plans tailored to your needs.
        </p>
      </Section>

      <AdPlaceholder />

    <Section title="Explore Workout Categories">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ArticlePreview
          title="Upper Body Workout Plan"
          excerpt="Target your chest, shoulders, and back with compound movements and isolation exercises designed for strength and tone."
          link="/routes/gymroutines/upperbody"
          imageSrc="/images/meditation.jpg" // Ruta a la imagen
          imageAlt="Upper Body Workout"  // Texto alternativo de la imagen
        />
        <ArticlePreview
          title="Lower Body Workout Plan"
          excerpt="Improve your power and stability with squats, lunges, and glute-focused routines for stronger legs."
          link="/routes/gymroutines/lowerbody"
          imageSrc="/images/meditation.jpg" // Ruta a la imagen
          imageAlt="Lower Body Workout"
        />
        <ArticlePreview
          title="Arm Toning Routine"
          excerpt="Define your biceps, triceps, and forearms with a focused routine using dumbbells, cables, and bodyweight."
          link="/routes/gymroutines/arms"
          imageSrc="/images/meditation.jpg" // Ruta a la imagen
          imageAlt="Arm Toning"
        />
      </div>
    </Section>



      <AdPlaceholder />

      <Section title="Tips Before You Begin">
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Warm up with 5–10 minutes of cardio to prevent injury.</li>
          <li>Focus on form over weight to ensure proper muscle engagement.</li>
          <li>Stay hydrated and rest between sets.</li>
          <li>Track your progress and adjust intensity as needed.</li>
        </ul>
      </Section>

      <AdPlaceholder />
    </main>
  );
}
