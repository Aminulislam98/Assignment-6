import { useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import CardSection from "./CardSection/CardSection";
import Navbar from "./Navbar/Navbar";
import Stats from "./Stats/Stats";

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
      ></CardSection>
    </>
  );
}

export default App;
