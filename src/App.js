import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { heroapi } from "./data/data";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero heroapi={heroapi} />
      </main>
    </>
  );
}

export default App;
