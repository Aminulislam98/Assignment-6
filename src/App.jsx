import "./App.css";
import Banner from "./Banner/Banner";
import CardSection from "./CardSection/CardSection";
import Navbar from "./Navbar/Navbar";
import Stats from "./Stats/Stats";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <CardSection></CardSection>
    </>
  );
}

export default App;
