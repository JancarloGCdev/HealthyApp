
import Section from "@/components/Section";
import ArticlePreview from "@/components/ArticlePreview";
import AdPlaceholder from "@/components/Adplaceholder";

export default function HomePage() {
  return (
    <>
      <main className="container mx-auto p-6">
        <Section title="Welcome to Fast Fit Grow">
          <p className="text-lg">
            Discover how to improve your physical and mental wellbeing through curated content, expert tips,
            and evidence-based strategies. Our mission is to guide you toward a healthier, more balanced lifestyle.
          </p>
        </Section>

        <AdPlaceholder />

        <Section title="Featured Articles">
          <ArticlePreview
            title="10 Benefits of Meditation You Didn't Know"
            excerpt="Meditation improves focus, reduces stress, and can even strengthen your immune system. Discover how a few minutes a day can change your life."
            link="/routes/meditation"
          />
          <ArticlePreview
            title="Nutrition Tips for a Stronger Immune System"
            excerpt="What you eat directly impacts your immune health. Learn which foods boost your defenses and how to build a resilient body."
            link="/routes/nutrition"
          />
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
