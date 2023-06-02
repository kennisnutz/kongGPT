import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        KongGPT AI <br className="max-md:hidden" />
        <span className="blue_gradient text-center text-md">
          Empowering Crypto Users with Limitless AI Potential
        </span>
      </h1>
      <p className="desc text-center  m-auto">
        KongGPT AI is an SaaS platform revolutionizing productivity and
        accessibility for crypto users. Leverage AI-powered tools, seamless
        crypto payments, and unleash creativity in the digital world.
      </p>
    </section>
  );
}
