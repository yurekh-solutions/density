import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Blog } from "@/components/Blog";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>

        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Blog />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
