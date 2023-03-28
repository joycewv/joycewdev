import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Contact from './components/Contact';
import ContectMeSection from './components/ContactMeSection';
import ProjectsSection from './components/ProjectsSection';


function App() {
  return (
    <>
    <ChakraProvider>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <ContectMeSection></ContectMeSection>
      <Contact></Contact>
      <Footer></Footer>
    </ChakraProvider>
    </>
  );
}

export default App;
