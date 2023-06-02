import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import ToasterProvider from './providers/ToasterProvider';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import Provider from './components/provider';
import getCurrentUser from './actions/getCurrentUser';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'KongGPT AI',
  description:
    'KongGPT AI is a powerful Software-as-a-Service (SaaS) platform that harnesses the capabilities of artificial intelligence to revolutionize productivity and accessibility for cryptocurrency users. By providing a range of AI-powered tools, such as a text-to-image generator, social media post generator, article summarizer, and more, KongGPT AI empowers individuals residing in countries with card usage restrictions to leverage cryptocurrencies for accessing paid AI technologies and services. With a seamless payment system based on cryptocurrencies and a user-centric approach, KongGPT AI opens up new horizons for users to enhance their productivity and creativity in the digital world.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <Provider>
        <body className={font.className}>
          <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <Navbar currentUser={currentUser} />
          </ClientOnly>
          <div className="pb-20 pt-28">{children}</div>
        </body>
      </Provider>
    </html>
  );
}
