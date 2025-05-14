// components/ArmsWorkoutPlan.tsx
import Section from "@/components/Section";
import AdPlaceholder from "@/components/Adplaceholder";
import Image from "next/image";

export default function ArmsWorkoutPlan() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Arms workout plan</h1>
        <p className="text-lg text-gray-600">Updated May 2025 • 5 min read</p>
      </header>

      <Image
        src="/images/arms-workout.jpg"
        alt="Arms workout"
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />

      <Section title="Plan Overview">
        <p className="text-lg">
          The Arms Workout Plan focuses on building strong, defined biceps, triceps, and forearms. This routine is great for all fitness levels and can be done at the gym or at home with minimal equipment.
        </p>
      </Section>

      <AdPlaceholder />

      <Section title="Workout Routine">
        <ul className="space-y-8 text-gray-800">
          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/barbell-curl.jpg"
                alt="Barbell Curl"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Barbell Curl – 3 sets of 10 reps</h3>
              <p className="text-lg">
                A staple biceps builder. Keep your elbows close to your body and focus on controlled movements.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/hammer-curl.jpg"
                alt="Hammer Curl"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Hammer Curl – 3 sets of 12 reps</h3>
              <p className="text-lg">
                Targets both the biceps and forearms. A great variation for balanced arm development.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/concentration-curl.jpg"
                alt="Concentration Curl"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Concentration Curl – 3 sets of 10 reps</h3>
              <p className="text-lg">
                Focuses intensely on the peak of the biceps. Perform slowly and with precision for best results.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/tricep-pushdown.jpg"
                alt="Tricep Pushdown"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Tricep Pushdown – 3 sets of 12 reps</h3>
              <p className="text-lg">
                Great for targeting the triceps. Use a rope or straight bar on a cable machine and keep your elbows stationary.
              </p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/tricep-kickback.jpg"
                alt="Tricep Kickbacks"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Tricep Kickbacks – 3 sets of 10 reps</h3>
              <p className="text-lg">
                This isolation move targets the back of your arms. Use light to moderate weights with strict form.
              </p>
            </div>
          </li>
          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
                <Image
                src="/images/lateral-raises.jpg"
                alt="Lateral Raises"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
                />
            </div>
            <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold">Lateral Raises – 3 sets of 15 reps</h3>
                <p className="text-lg">
                Great for targeting the medial (side) deltoids, helping to create that wide-shoulder look. Use light to moderate weights and control the movement.
                </p>
            </div>
            </li>

            <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
                <Image
                src="/images/front-raises.jpg"
                alt="Front Raises"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
                />
            </div>
            <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold">Front Raises – 3 sets of 12 reps</h3>
                <p className="text-lg">
                Focuses on the front (anterior) deltoid. Use dumbbells or a plate, and raise arms slowly to shoulder level.
                </p>
            </div>
            </li>

            <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
                <Image
                src="/images/rear-delt-fly.jpg"
                alt="Rear Delt Fly"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
                />
            </div>
            <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold">Rear Delt Fly – 3 sets of 15 reps</h3>
                <p className="text-lg">
                Strengthens the posterior deltoids and upper back. Perform seated or bent over, maintaining strict form throughout.
                </p>
            </div>
            </li>

            <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
                <Image
                src="/images/arnold-press.jpg"
                alt="Arnold Press"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
                />
            </div>
            <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold">Arnold Press – 3 sets of 10 reps</h3>
                <p className="text-lg">
                A variation of the shoulder press that works all three heads of the deltoids. Rotate your wrists during the press for full activation.
                </p>
            </div>
            </li>


          <li className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/images/wrist-curl.jpg"
                alt="Wrist Curl"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Wrist Curls – 3 sets of 15 reps</h3>
              <p className="text-lg">
                Focuses on the forearms. Perform seated with a barbell or dumbbells, allowing your wrists to extend fully.
              </p>
            </div>
          </li>
        </ul>
      </Section>

      <AdPlaceholder />

      <Section title="Tips for Success">
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Don’t overload the weight—focus on form for maximum contraction.</li>
          <li>Train arms 1–2 times per week for optimal recovery and growth.</li>
          <li>Combine with compound lifts to stimulate arm growth indirectly.</li>
          <li>Fuel your body with protein-rich meals post-workout.</li>
        </ul>
      </Section>

      <AdPlaceholder />
    </main>
  );
}
