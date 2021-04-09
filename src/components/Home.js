import React from "react";
import Hero from "./menu/Hero";
import About from "./menu/About";
import Events from "./menu/Events";
import Mission from "./menu/Mission";
import Contact from "./menu/Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Events />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
}
