
import Section from "@/components/Section";
import ArticlePreview from "@/components/ArticlePreview";
import AdPlaceholder from "@/components/Adplaceholder";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Your Path to Wellness Starts Here</h1>
      </header>

      <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
        <Image
          src="/images/begin.png"
          alt="Mature person walking on a peaceful path in a modern fitness center, symbolizing the start of a wellness journey."
          fill
          className="object-cover"
        />
      </div>
        <Section title="Welcome to Fast Fit Grow">
          <p className="text-lg">
            Discover how to improve your physical and mental wellbeing through curated content, expert tips,
            and evidence-based strategies. Our mission is to guide you toward a healthier, more balanced lifestyle.
          </p>
        </Section>

        <AdPlaceholder />

        <Section title="Featured Articles">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ArticlePreview
              title="10 Benefits of Meditation You Didn't Know"
              excerpt="Meditation improves focus, reduces stress, and can even strengthen your immune system. Discover how a few minutes a day can change your life."
              link="/meditation"
              imageSrc="/images/meditation.png" // Ruta a la imagen
              imageAlt="Individual practicing meditation in a calm, minimalist room with soft lighting, plants, and a peaceful aura."
            />
            <ArticlePreview
              title="Nutrition Tips for a Stronger Immune System"
              excerpt="What you eat directly impacts your immune health. Learn which foods boost your defenses and how to build a resilient body."
              link="/nutrition-advice"
              imageSrc="/images/inmune.png" // Ruta a la imagen
              imageAlt="Person with a strong immune system fighting off a virus, depicted through vibrant energy and protective aura surrounding them."
            />
            <ArticlePreview
            title="5-Minute Morning Stretches to Boost Energy"
            excerpt="Start your day with simple stretches that awaken your body and reduce stiffness."
            link="sleep-habits/five-minutes-stretch"
            imageSrc="/images/meditation.jpg"
            imageAlt="Person stretching in the morning"
            />
          </div>
        </Section>

        <AdPlaceholder />

        <Section title="Daily Habits for Longevity">
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Start your day with 15 minutes of sunlight and hydration.</li>
            <li>Walk at least 6,000 steps daily to maintain cardiovascular health.</li>
            <li>Practice gratitude to reduce stress and improve mood.</li>
            <li>Eat more whole foods and reduce processed sugar.</li>
            <li>Sleep 7–8 hours consistently to support body repair.</li>
          </ul>
        </Section>

        <AdPlaceholder />

        <Section title="Trending Wellness Topics">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow rounded-lg">
              <h4 className="font-semibold mb-2">Breathwork & Anxiety</h4>
              <p className="text-sm text-gray-700">
                How breathing techniques are becoming a natural tool to fight daily anxiety.
              </p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
              <h4 className="font-semibold mb-2">Cold Showers</h4>
              <p className="text-sm text-gray-700">
                Can cold showers really improve circulation and alertness? The science says yes.
              </p>
            </div>
          </div>
        </Section>
      </main>

    </>
  );
}
