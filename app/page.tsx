import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Areas from '@/components/Areas';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Reviews />
        <Areas />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
