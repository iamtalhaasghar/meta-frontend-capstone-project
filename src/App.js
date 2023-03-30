import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import WithSubnavigation from "./components/NavBar";
function App() {
  return (
    <>
      <ChakraProvider>
        <WithSubnavigation></WithSubnavigation>
      </ChakraProvider>
    </>
  );
}

export default App;
