import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
// import HeroVideo from "./components/HeroVideo";
// import Services from "./components/Services";
import HomePage from "./pages/HomePage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Internship from "./pages/Internship";
import Technologies from "./pages/Technologies";
import DigitalMarketing from "./pages/DigitalMarketing";
import SEO from "./pages/SEO";
import Services from "./pages/Services";
import "./index.css";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import TeamMembers from "./pages/TeamMembers";
import Reviews from "./pages/Reviews";
import Skills from "./pages/Skills";
import Clients from "./pages/Clients";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Pay from "./pages/Pay";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/teammembers" element={<TeamMembers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pay" element={<Pay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
