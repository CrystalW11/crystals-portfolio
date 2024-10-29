import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import React, { Suspense } from "react";
import ComputersCanvas from "./canvas/Computers.jsx";
import CanvasLoader from "./canvas/Loader.jsx"; // Correct path for the loader

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Suspense fallback={<CanvasLoader />}>
              <ComputersCanvas />
            </Suspense>
            <Hero />
          </div>
          <About />
          <Works />
          <Experience />
          <Tech />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
