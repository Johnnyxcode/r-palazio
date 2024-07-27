import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <div>
      {/* <Nav /> */}
      <Hero />
      <Services />
      <Portfolio />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
