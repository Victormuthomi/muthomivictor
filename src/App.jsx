import { useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom"; // <- added
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import TechnicalTrace from "./components/TechnicalTrace";
import Contact from "./components/Contact";
import MyBlogs from "./components/Blogs";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [step, setStep] = useState(0);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToTopOfSection = (element) => {
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBannerComplete = () => {
    setStep(1);
    setTimeout(() => scrollToTopOfSection(aboutRef.current), 300);
  };

  const handleAboutComplete = () => {
    setStep(2);
  };

  return (
    <BrowserRouter>
      {" "}
      {/* <- wrapped here */}
      <div className="bg-black text-white font-mono min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow space-y-16">
          <section id="banner">
            <Banner onComplete={handleBannerComplete} />
          </section>

          {step >= 1 && (
            <section id="about" ref={aboutRef}>
              <AboutMe onComplete={handleAboutComplete} />
            </section>
          )}

          {step >= 2 && (
            <section id="skills" ref={skillsRef}>
              <Skills />
            </section>
          )}

          {step >= 2 && (
            <>
              <section id="technical">
                <TechnicalTrace />
              </section>

              {/* My Blogs Section */}
              <section id="my-blogs">
                <MyBlogs authorId="691f0f2d531c6c2c7080d221" />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </>
          )}
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
      <Analytics />
    </BrowserRouter>
  );
}
