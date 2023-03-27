import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <ChakraProvider>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </ChakraProvider>
    </>
  );
}

export default App;
