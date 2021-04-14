import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Hero from "./menu/Hero";
import About from "./menu/About";
import Events from "./menu/Events";
import Mission from "./menu/Mission";
import Contact from "./menu/Contact";
import Footer from "./Footer";
import CompanyDetails from "./menu/CompanyDetails";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div>
      <Switch>
        <Route exact path="/about">
          <CompanyDetails />
        </Route>
      </Switch>
      <Route exact path="/">
        <Hero setShowContactForm={setShowContactForm} />
        <About />
        <Events />
        <Mission />
        <Contact
          showContactForm={showContactForm}
          setShowContactForm={setShowContactForm}
        />
        <Footer />
      </Route>
    </div>
  );
}
