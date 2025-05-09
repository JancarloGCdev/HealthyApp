import HomePage from '@/components/Home'

export default function Home() {
  return (
    <>
        <HomePage/>
    </>
  )
}

export const metadata = {
  title: "Wellness Life, Health & Wellbeing Tips",
  description: "Learn practical wellness, nutrition, and mental health strategies to improve your daily life. Trusted advice and tips from experts.",
  openGraph: {
    title: "Wellness Life, Health & Wellbeing Tips",
    description: "Trusted advice on wellness, nutrition, mental health, and fitness.",
    url: "https://yourdomain.com/",
    siteName: "Wellness Life",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wellness Life - Healthy Living",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Life – Health & Wellbeing Tips",
    description: "Daily wellness tips, fitness advice, and more.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};
