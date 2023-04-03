import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ContectSection from './components/ContactSection';
import V2ProjectsSection from './components/V2ProjectSection';



function App() {
  return (
    <>
    <ChakraProvider>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <V2ProjectsSection />
      <ContectSection></ContectSection>
      <Footer></Footer>
    </ChakraProvider>
    </>
  );
}

export default App;
