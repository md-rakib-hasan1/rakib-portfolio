
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About/>
        <Education />
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
