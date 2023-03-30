import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <Testimonials></Testimonials>
      </ChakraProvider>
    </>
  );
}

export default App;
