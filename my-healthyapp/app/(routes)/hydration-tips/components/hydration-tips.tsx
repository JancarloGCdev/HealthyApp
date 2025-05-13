import Image from "next/image";

export default function HydrationTipsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Top 7 Hydration Tips for a Healthier Day</h1>
        <p className="text-lg text-gray-600">Updated May 2025 • 7 min read</p>
      </header>

      <Image
        src="/images/hydration.jpg"
        alt="Glass of water with lemon"
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />

      <section className="space-y-6 text-lg leading-relaxed text-gray-800">
        <p>
          Water is essential to every function in your body—from digestion to cognition. Yet, many people
          don't consume enough daily. Here are 7 practical hydration tips to improve your health.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Start Your Morning with Water</h2>
        <p>
          Drinking a glass of water after waking up jumpstarts your metabolism and rehydrates your body after hours of rest.
        </p>

        {/* 👉 Aquí podrías insertar un bloque de anuncios */}
        <div className="my-6 bg-gray-100 p-4 rounded text-center text-sm text-gray-500">
          [Publicidad: Espacio para anuncios automáticos o banner personalizado]
        </div>

        <h2 className="text-2xl font-semibold">2. Carry a Reusable Water Bottle</h2>
        <p>
          Having water on hand makes it easier to sip throughout the day. Reusable bottles also help reduce plastic waste.
        </p>

        <h2 className="text-2xl font-semibold">3. Add Natural Flavors</h2>
        <p>
          Infuse your water with lemon, cucumber, mint, or berries to make it more appealing and refreshing.
        </p>

        {/* Segundo espacio de anuncio */}
        <div className="my-6 bg-gray-100 p-4 rounded text-center text-sm text-gray-500">
          [Publicidad: Espacio para anuncio intermedio o nativo]
        </div>

        <h2 className="text-2xl font-semibold">4. Set Reminders</h2>
        <p>
          Use a hydration app or simple phone alarm to remind you to take regular sips.
        </p>

        <h2 className="text-2xl font-semibold">5. Eat Water-Rich Foods</h2>
        <p>
          Fruits like watermelon, oranges, and cucumbers are rich in water and help you stay hydrated naturally.
        </p>

        <h2 className="text-2xl font-semibold">6. Monitor Your Urine Color</h2>
        <p>
          Light yellow is a good sign of hydration; dark yellow or amber indicates you may need more fluids.
        </p>

        <h2 className="text-2xl font-semibold">7. Avoid Sugary and Caffeinated Drinks</h2>
        <p>
          While tasty, these beverages can lead to dehydration. Water should always be your primary drink.
        </p>

        {/* Final espacio de anuncio */}
        <div className="my-6 bg-gray-100 p-4 rounded text-center text-sm text-gray-500">
          [Publicidad: Banner de cierre o llamado a la acción patrocinado]
        </div>

        <footer className="mt-12 text-gray-500 text-sm">
          Published by Fast Fit Grow. This article is for informational purposes only and not medical advice.
        </footer>
      </section>
    </article>
  );
}
