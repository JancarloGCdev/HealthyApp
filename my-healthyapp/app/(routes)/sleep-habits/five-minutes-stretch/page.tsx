// app/routes/five-minute-stretch/page.tsx
import FiveMinutesStretch from './components/FiveMinutesStretch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5-Minute Morning Stretches to Boost Energy | FastFitGrow',
  description: 'Start your day with this quick 5-minute stretch routine designed to wake up your body, improve flexibility, and boost morning energy.',
  keywords: ['morning stretch', '5-minute stretch', 'boost energy', 'flexibility routine', 'fastfitgrow', 'healthy habits', 'wake up exercises'],
  openGraph: {
    title: '5-Minute Morning Stretches to Boost Energy',
    description: 'Start your day with this quick 5-minute stretch routine designed to wake up your body, improve flexibility, and boost morning energy.',
    type: 'article',
    url: 'https://fastfitgrow.com/five-minute-stretch',
    images: [
      {
        url: '/image/morning-stretch-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Person stretching in the morning sunlight',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5-Minute Morning Stretches to Boost Energy',
    description: 'Wake up your body and boost energy with a quick, easy stretch routine. Only takes 5 minutes!',
    images: ['/image/morning-stretch-cover.jpg'],
  },
};

export default function Page() {
  return <FiveMinutesStretch />;
}
