import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContectSection from './components/ContactSection';



function App() {
  return (
    <>
    <ChakraProvider>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <ContectSection></ContectSection>
      <Footer></Footer>
    </ChakraProvider>
    </>
  );
}

export default App;
