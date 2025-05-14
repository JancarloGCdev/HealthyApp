import Section from "@/components/Section";
import AdPlaceholder from "@/components/Adplaceholder";
import ArticlePreview from "@/components/ArticlePreview";
import Image from "next/image";

export default function UpperBodyWorkoutPlan() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Upper Body Workout Plan</h1>
        <p className="text-lg text-gray-600">Updated May 2025 • 6 min read</p>
      </header>

      <Image
        src="/images/upper-body.jpg"
        alt="Upper body workout"
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />

      <Section title="Plan Overview">
        <p className="text-lg">
          Our Upper Body Workout Plan is designed to target your chest, shoulders, and back muscles to help you build
          strength and tone. Whether you're a beginner or experienced, this plan includes a mix of compound movements and
          isolation exercises for optimal results.
        </p>
      </Section>

      <AdPlaceholder />

      <Section title="Workout Routine">
        <ul className="space-y-8 text-gray-800">
          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/bench-press.jpg"
                alt="Barbell Bench Press"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Barbell Bench Press – 3 sets of 10 reps</h3>
              <p className="text-lg">
                A classic compound exercise that targets your chest, shoulders, and triceps. Ensure proper form to
                maximize the movement and avoid injury.
              </p>
            </div>
          </li>
          
          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/incline-dumbbell-press.jpg"
                alt="Incline Dumbbell Press"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Incline Dumbbell Press – 3 sets of 10 reps</h3>
              <p className="text-lg">
                Targets the upper chest and shoulders, providing a great way to build strength and muscle mass in these
                areas.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/pull-ups.jpg"
                alt="Pull-ups"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Pull-ups – 3 sets of 8 reps</h3>
              <p className="text-lg">
                A great upper body exercise for targeting the back and biceps. If you're unable to do a pull-up, try
                using an assisted pull-up machine or a resistance band.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/seated-row.jpg"
                alt="Seated Row"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Seated Row – 3 sets of 12 reps</h3>
              <p className="text-lg">
                Focuses on your back muscles and biceps. Adjust the weight to match your fitness level and keep the form
                strict.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/shoulder-press.jpg"
                alt="Overhead Shoulder Press"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Overhead Shoulder Press – 3 sets of 10 reps</h3>
              <p className="text-lg">
                An excellent exercise for targeting the shoulders, particularly the deltoid muscles. Perform with dumbbells
                or a barbell.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/bicep-curls.jpg"
                alt="Bicep Curls"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Bicep Curls – 3 sets of 12 reps</h3>
              <p className="text-lg">
                Focuses on building your biceps. Use either a barbell, dumbbells, or a cable machine to perform this
                exercise.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/tricep-dips.jpg"
                alt="Tricep Dips"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Tricep Dips – 3 sets of 10 reps</h3>
              <p className="text-lg">
                A great exercise for isolating the triceps. You can perform this on parallel bars or a bench.
              </p>
            </div>
          </li>
        </ul>
      </Section>

      <AdPlaceholder />

      <Section title="Tips for Success">
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Focus on proper form to avoid injury and maximize results.</li>
          <li>Rest 60–90 seconds between sets to allow muscles to recover.</li>
          <li>Gradually increase the weight as you build strength.</li>
          <li>Incorporate cardio and nutrition to complement your strength training.</li>
        </ul>
      </Section>

      <AdPlaceholder />
    </main>
  );
}
