import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Areas from "../components/Areas";
import Properties from "../components/Properties";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = ({ theme }) => {
  return (
    <>
      {/* <Navbar theme={theme} /> */}
      <HeroSection/>
      <About/>
      <Areas/>
      <Properties/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer />
    </>
  );
};

export default Home;
