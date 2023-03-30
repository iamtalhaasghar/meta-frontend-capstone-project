import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ProductGrid from "./components/ProductGrid";
import ProductCard from "./components/ProductCard";
import { products } from "./_data";
import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        {/* <ProductAddToCart></ProductAddToCart> */}
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: "4",
            md: "8",
            lg: "12",
          }}
          py={{
            base: "6",
            md: "8",
            lg: "12",
          }}
        >
          <Text
            textTransform={"uppercase"}
            color={"green.400"}
            fontWeight={600}
            fontSize={"2xl"}
            // bg={useColorModeValue("yellow.50", "yellow.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Specials
          </Text>
          <ProductGrid>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </Box>
        <Testimonials></Testimonials>
        <AboutUs></AboutUs>
        <Footer></Footer>
      </ChakraProvider>
    </>
  );
}

export default App;
