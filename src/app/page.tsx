import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Chat from '@/components/Chat';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Reviews />
        <Chat />
      </main>
      <Footer />
    </div>
  );
}
