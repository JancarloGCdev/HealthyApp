import Section from "@/components/Section";
import AdPlaceholder from "@/components/Adplaceholder";
import Image from "next/image";

export default function LowerBodyWorkoutPlan() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Lower Body Workout Plan</h1>
        <p className="text-lg text-gray-600">Updated May 2025 • 6 min read</p>
      </header>

      <Image
        src="/images/lower-body.jpg"
        alt="Lower body workout"
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />

      <Section title="Plan Overview">
        <p className="text-lg">
          Our Lower Body Workout Plan focuses on strengthening your glutes, hamstrings, quads, and calves. It includes a mix of compound and isolation exercises designed to improve muscle tone, endurance, and overall leg power.
        </p>
      </Section>

      <AdPlaceholder />

      <Section title="Workout Routine">
        <ul className="space-y-8 text-gray-800">
          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/squats.jpg"
                alt="Barbell Squats"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Barbell Squats – 3 sets of 10 reps</h3>
              <p className="text-lg">
                A foundational compound movement targeting the quads, glutes, and hamstrings. Maintain good form and core engagement.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/lunges.jpg"
                alt="Walking Lunges"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Walking Lunges – 3 sets of 12 reps (each leg)</h3>
              <p className="text-lg">
                Great for unilateral leg strength and balance, engaging the glutes, hamstrings, and core.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/deadlift.jpg"
                alt="Romanian Deadlift"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Romanian Deadlift – 3 sets of 10 reps</h3>
              <p className="text-lg">
                Emphasizes the hamstrings and glutes. Use moderate weight and keep your back flat throughout the motion.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/hip-thrust.jpg"
                alt="Hip Thrusts"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Hip Thrusts – 3 sets of 12 reps</h3>
              <p className="text-lg">
                A powerful glute activation exercise that also targets the hamstrings and lower back.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/calf-raises.jpg"
                alt="Standing Calf Raises"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Standing Calf Raises – 3 sets of 15 reps</h3>
              <p className="text-lg">
                Targets the calves for balance and stability. Perform slowly for maximum contraction.
              </p>
            </div>
          </li>
        </ul>
      </Section>

      <AdPlaceholder />

      <Section title="Tips for Success">
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Warm up thoroughly to prevent injury and activate muscles.</li>
          <li>Control each movement to maximize tension and results.</li>
          <li>Stretch after your workout to aid recovery.</li>
          <li>Track progress and adjust weights as needed over time.</li>
        </ul>
      </Section>

      <AdPlaceholder />
    </main>
  );
}
