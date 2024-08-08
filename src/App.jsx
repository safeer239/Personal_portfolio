import { Toaster } from "react-hot-toast";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import { useState } from "react";

function App() {
  const [lightmode,setLightmode]=useState(true)
  return (
    <div className="overflow-x-hidden text-nuetral-300 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className={lightmode? "absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" : "absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"}></div>
      </div>
      <div className="container mx-auto px-8">
      <Navbar lightmode={lightmode} setLightmode={setLightmode}/>
      <Home lightmode={lightmode} setLightmode={setLightmode}/>
      <About lightmode={lightmode} setLightmode={setLightmode}/>
      <Education lightmode={lightmode} setLightmode={setLightmode}/>
      <Skills lightmode={lightmode} setLightmode={setLightmode}/>
      <Experience lightmode={lightmode} setLightmode={setLightmode}/>
      <Project lightmode={lightmode} setLightmode={setLightmode}/>
      <Contact lightmode={lightmode} setLightmode={setLightmode}/>
      <Footer lightmode={lightmode} setLightmode={setLightmode}/>
      <Toaster/>
      </div>  
    </div>
  );
}

export default App;
