import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'KongGPT AI',
  description:
    'KongGPT AI is a powerful Software-as-a-Service (SaaS) platform that harnesses the capabilities of artificial intelligence to revolutionize productivity and accessibility for cryptocurrency users. By providing a range of AI-powered tools, such as a text-to-image generator, social media post generator, article summarizer, and more, KongGPT AI empowers individuals residing in countries with card usage restrictions to leverage cryptocurrencies for accessing paid AI technologies and services. With a seamless payment system based on cryptocurrencies and a user-centric approach, KongGPT AI opens up new horizons for users to enhance their productivity and creativity in the digital world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
