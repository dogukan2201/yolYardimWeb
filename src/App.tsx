import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EmergencyCTA from "./components/EmergencyCTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <EmergencyCTA />
    </div>
  );
}

export default App;
