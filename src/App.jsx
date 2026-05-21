import { useState } from "react";
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
