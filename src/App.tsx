import Navbar from "./components/Navbar";
import Stack from "./components/Stack";
import Hero from "./components/Hero"
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menuhambuguer from "./components/Menuhambuguer";
import { useState,useEffect } from "react";

export default function App() {
  
  const [mobilemenu, setMobilemenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      const tela = window.innerWidth;
      if (tela < 768) {
        setMobilemenu(true);
      } else {
        setMobilemenu(false);
      }
    }

    window.addEventListener("resize", handleResize);

    // Chama a função uma vez para definir o estado inicial
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function menumobile() {
    if (mobilemenu==true) {
      return <Menuhambuguer />;
    }
    else{
      return <Navbar />;
    }
  }


  return(
  <>
  <header>{menumobile()}</header>
  <main>
  <Hero />
  <Projetos />
  <Stack />
  <Sobre />  
  <Contact />
  </main>
  <Footer />
  </>
  )
}