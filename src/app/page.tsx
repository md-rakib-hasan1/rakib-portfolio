
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About/>
      </main>
    </>
  );
};

export default Home;
