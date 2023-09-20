import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Vite + React</h1> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
