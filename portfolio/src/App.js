import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ContectMeSection from './components/ContactMeSection';
import ProjectsSection from './components/ProjectsSection';
import Card from './components/Card';


function App() {
  return (
    <>
    <ChakraProvider>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <Card></Card>
      <ProjectsSection></ProjectsSection>
      <ContectMeSection></ContectMeSection>
      <Footer></Footer>
    </ChakraProvider>
    </>
  );
}

export default App;
