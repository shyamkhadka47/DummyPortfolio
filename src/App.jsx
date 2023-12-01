import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div id="home">
          <Home/>
        </div>

        <div id="about">
          <About/>
        </div>
        <div id="services">
          <Services/>
        </div>
        <div id="education">
          <Education/>
        </div>
       
      </div>
      <Footer/>
    </div>
  );
};

export default App;
