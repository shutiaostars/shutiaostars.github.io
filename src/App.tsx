import { useEffect } from "react";
import { ModalProvider } from "./context/ModalContext";
import GrainOverlay from "./components/layout/GrainOverlay";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ChapterOne from "./components/sections/ChapterOne";
import ChapterTwo from "./components/sections/ChapterTwo";
import ChapterThree from "./components/sections/ChapterThree";
import ServicesSection from "./components/sections/ServicesSection";
import CollaborationsSection from "./components/sections/CollaborationsSection";

import Epilogue from "./components/sections/Epilogue";
import Lightbox from "./components/modals/Lightbox";
import VideoModal from "./components/modals/VideoModal";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".chapter-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ModalProvider>
      <div className="relative">
        <GrainOverlay />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
        <ServicesSection />
        <CollaborationsSection />

        <Epilogue />
        <Footer />
        <Lightbox />
        <VideoModal />
      </div>
    </ModalProvider>
  );
}
