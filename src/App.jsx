import { useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import CardSection from "./CardSection/CardSection";
import Navbar from "./Navbar/Navbar";
import Stats from "./Stats/Stats";
import { ToastContainer } from "react-toastify";

const productsData = async () => {
  const response = await fetch("/public/productsData.json");
  return response.json();
};
const productsList = productsData();

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [toggleHandler, setToggleHandler] = useState("Products");
  const [isBought, setIsBought] = useState([]);

  return (
    <>
      <Navbar cartItem={cartItem}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <CardSection
        toggleHandler={toggleHandler}
        setToggleHandler={setToggleHandler}
        productsList={productsList}
        cartItem={cartItem}
        setCartItem={setCartItem}
        isBought={isBought}
        setIsBought={setIsBought}
      ></CardSection>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
