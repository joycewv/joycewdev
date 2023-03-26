import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <ChakraProvider>
      <Navbar></Navbar>
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </ChakraProvider>
    </>
  );
}

export default App;
