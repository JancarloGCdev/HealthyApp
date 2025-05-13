import AdPlaceholder from "@/components/Adplaceholder";
import Section from "@/components/Section";
import Image from "next/image";

export default function FiveMinutesStretch() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Título principal del artículo */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">5-Minute morning stretches to boost energy</h1>
        <p className="text-lg text-gray-600">Updated May 2025 • 3 min read</p>
      </header>
      <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
        <Image
          src="/images/begin.png"
          alt="Glass of water with lemon"
          fill
          className="object-cover"
        />
      </div>
      <Section title="Why Stretch in the Morning?">
        <p className="text-gray-700 mb-4">
          Waking up can be difficult, especially when your body feels stiff or sluggish. Morning stretching is one of the most effective ways to gently awaken your muscles and stimulate blood flow. Not only does it reduce physical tension, but it also helps clear your mind and prepare you mentally for the day ahead.
        </p>
        <p className="text-gray-700">
          Studies have shown that light physical activity in the morning, such as stretching, can help regulate cortisol levels, improve posture, and promote long-term mobility. Plus, it’s a simple habit that requires no equipment and minimal time.
        </p>
      </Section>

      <Section title="What You’ll Need">
        <p className="text-gray-700">
          You don’t need a yoga mat or fancy gear. Just a comfortable space where you can move freely. If you prefer, you can do this routine on your bed, on the floor, or even standing in your room. Wearing loose, breathable clothing is recommended.
        </p>
      </Section>
      <AdPlaceholder />
      <Section title="The 5-Minute Stretch Routine">
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Reach for the Sky (30 seconds):</strong> Stand tall, feet shoulder-width apart, and raise your arms overhead. Stretch upward as far as you can, elongating your spine and taking a deep breath. This opens up the body and helps activate the nervous system.
          </li>
          <li>
            <strong>Neck Rolls (1 minute):</strong> Gently tilt your head forward, then rotate it slowly in a circle. Go clockwise for 30 seconds, then switch directions. This stretch helps relieve tension in the neck and shoulders, especially useful if you sleep in awkward positions.
          </li>
          <li>
            <strong>Shoulder Rolls (45 seconds):</strong> With your arms relaxed by your sides, roll your shoulders backward in slow, big circles. After 20 seconds, switch to forward rolls. This increases blood flow and flexibility in the shoulder joints.
          </li>
          <li>
            <strong>Standing Forward Fold (1 minute):</strong> Bend forward at the hips, letting your head and arms hang toward the ground. You can bend your knees slightly if needed. This stretch targets your hamstrings and lower back, perfect after hours of sleep.
          </li>
          <li>
            <strong>Cat-Cow Pose (1 minute):</strong> On all fours, alternate between arching your back (cat) and lowering your belly while looking up (cow). This movement loosens your spine and activates your core and back muscles.
          </li>
        </ol>
      </Section>
      <AdPlaceholder />
      <Section title="Optional Bonus: Deep Breathing (30 seconds)">
        <p className="text-gray-700">
          After completing the routine, take a moment to sit or stand quietly. Close your eyes, inhale deeply through your nose, hold for a second, and exhale slowly through your mouth. Repeat for a few cycles. Deep breathing centers your mind and reduces stress levels.
        </p>
      </Section>
    
      <Section title="Benefits of a Morning Stretch Routine">
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Boosts blood circulation and oxygen flow to muscles</li>
          <li>Increases flexibility and joint mobility</li>
          <li>Improves focus and mental clarity for the day</li>
          <li>Enhances posture and balance over time</li>
          <li>Reduces stress and muscle tension caused by sleep</li>
        </ul>
      </Section>
      <AdPlaceholder />
      <Section title="Make It a Habit">
        <p className="text-gray-700 mb-4">
          Starting your day with a 5-minute stretch routine is a small commitment with big returns. The key is consistency. Try setting an alarm 5 minutes earlier or including it in your bathroom or coffee ritual. Over time, your body will begin to crave the movement and the clarity it brings.
        </p>
        <p className="text-gray-700">
          Remember, wellness doesn’t have to be complicated. It starts with simple, intentional actions—like a stretch, a breath, and a better morning.
        </p>
      </Section>
      <AdPlaceholder />
    </main>
  );
}
