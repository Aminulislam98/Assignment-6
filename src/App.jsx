import { useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import CardSection from "./CardSection/CardSection";
import Navbar from "./Navbar/Navbar";
import Stats from "./Stats/Stats";

const productsData = async () => {
  const response = await fetch("/public/productsData.json");
  return response.json();
};
const productsList = productsData();

function App() {
  const [toggleHandler, setToggleHandler] = useState("Products");
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <CardSection
        toggleHandler={toggleHandler}
        setToggleHandler={setToggleHandler}
        productsList={productsList}
      ></CardSection>
    </>
  );
}

export default App;
