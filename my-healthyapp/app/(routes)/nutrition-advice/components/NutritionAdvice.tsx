"use client"
import React from "react";

export default function NutritionAdvice() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <article>
        <h1 className="text-4xl font-bold mb-4 text-center">Nutrition Advice for a Healthier Life</h1>

        {/* Disclaimer Section */}
        <div className="bg-yellow-200 p-4 mb-6 rounded-md text-center">
          <p className="text-lg font-semibold">
            Disclaimer: This article provides general nutrition advice. Always consult a healthcare professional before making significant changes to your diet or lifestyle. The information provided is for informational purposes only.
          </p>
        </div>

        <p className="text-lg mb-6">
          Proper nutrition plays a crucial role in maintaining health and preventing chronic diseases. In this article, we’ll dive into evidence-based nutrition advice to help you make informed dietary choices. Remember, the best nutrition plan is personalized to your unique needs and lifestyle.
        </p>

        {/* Ad Slot */}
        <div className="my-8 text-center">
          <p className="text-sm text-gray-500">[Ad placement]</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The Importance of a Balanced Diet</h2>
        <p className="mb-4">
          A balanced diet includes a variety of foods from all food groups: proteins, carbohydrates, fats, vitamins, and minerals. It’s essential to consume foods that provide the right balance of these nutrients to maintain energy levels, enhance cognitive function, and support overall health.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Protein: Essential for muscle repair, immune function, and enzyme production.</li>
          <li>Carbohydrates: The body's primary energy source, especially for the brain.</li>
          <li>Fats: Support cell structure, hormone production, and brain health.</li>
          <li>Vitamins and Minerals: Crucial for immune function, bone health, and metabolism.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Recommended Daily Intake of Nutrients</h2>
        <p className="mb-4">
          Nutritional needs vary by age, gender, and level of physical activity. Below is a general guide:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Adults should consume around 0.8 grams of protein per kilogram of body weight per day.</li>
          <li>The average adult needs about 45-65% of their daily calories from carbohydrates.</li>
          <li>Healthy fats should make up about 20-35% of total daily calories.</li>
          <li>For vitamins and minerals, a varied diet with fruits, vegetables, and whole grains is essential.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Foods to Prioritize</h2>
        <p className="mb-4">
          A nutritious, balanced diet is rich in whole foods. Here are some key foods to prioritize in your diet:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Leafy greens like spinach and kale for vitamins A, C, and K.</li>
          <li>Lean protein sources such as chicken, fish, tofu, and legumes.</li>
          <li>Whole grains like quinoa, brown rice, and oats for fiber.</li>
          <li>Fruits like berries, apples, and citrus for antioxidants and fiber.</li>
          <li>Healthy fats from avocados, nuts, seeds, and olive oil.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Hydration is Key</h2>
        <p className="mb-4">
          Staying hydrated is just as important as eating well. Water supports all of the body’s vital functions, including digestion, nutrient absorption, and temperature regulation. Aim for at least 8 glasses (about 2 liters) of water a day, more if you’re physically active.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Supplements and Their Role</h2>
        <p className="mb-4">
          While whole foods should be your primary source of nutrients, supplements can help fill gaps in your diet. However, it’s important to consult a healthcare provider before taking any supplements, as they may interact with medications or conditions.
        </p>
        <p className="mb-4">
          Common supplements include vitamin D, omega-3 fatty acids, and multivitamins. Research suggests that most people can benefit from omega-3s (especially EPA and DHA) for heart and brain health.
        </p>

        {/* Ad Slot */}
        <div className="my-8 text-center">
          <p className="text-sm text-gray-500">[Ad placement]</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Debunking Nutrition Myths</h2>
        <ul className="list-disc list-inside mb-6">
          <li>"Carbs are bad" – Not all carbs are created equal. Whole grains and fruits are healthy sources of carbs.</li>
          <li>"Fat makes you fat" – Healthy fats like those from avocados and olive oil are vital for your health.</li>
          <li>"Protein is only for bodybuilders" – Protein is essential for everyone’s body function, not just muscle growth.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="mb-6">
          <h3 className="font-bold">How much protein should I eat?</h3>
          <p className="mb-4">It depends on your activity level, but aim for around 0.8 grams per kilogram of body weight for general health.</p>

          <h3 className="font-bold">Should I avoid sugar completely?</h3>
          <p>Sugar in moderation is fine, but it's important to limit added sugars from processed foods.</p>
        </div>

        {/* Final Ad Slot */}
        <div className="my-10 text-center">
          <p className="text-sm text-gray-500">[Ad placement]</p>
        </div>

        <p className="text-lg mt-8 font-semibold text-center">
          Prioritize your health with good nutrition – small changes can lead to big results.
        </p>
      </article>
    </section>
  );
}
