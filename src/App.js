import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sales from "./components/Sales";
import { heroapi, topratesales, popularsales } from "./data/data.js";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero heroapi={heroapi} />
        <Sales ifExists endpoint={popularsales} />
        <Sales endpoint={topratesales} />
      </main>
    </>
  );
}

export default App;
