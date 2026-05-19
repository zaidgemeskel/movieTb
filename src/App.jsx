import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Hader/Header";
import Banner from "./components/Banner/Banner";
import DispalyRow from "./components/DisplayRow/DispalyRow";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <DispalyRow />
      <Footer />
    </>
  );
}

export default App;
