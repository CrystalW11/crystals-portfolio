import { BrowserRouter } from "react-router-dom";

import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
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
          <p> If this does not work from you android phone, download the Firefox browser app.</p>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
