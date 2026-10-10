import Navbar from "./components/Navbar";
import Stack from "./components/Stack";
import Hero from "./components/Hero"
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return(
  <>
  <Navbar />
  <Hero />
  <Projetos />
  <Stack />
  <Sobre />  
  <Contact />
  <Footer />
  </>
  )
}