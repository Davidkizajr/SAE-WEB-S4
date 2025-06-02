import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import ComposantGeo from "./ComposantGeo";
import Map from "./Map";
import Data from "./Data";
import Stats from "./Stats";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/geolocalisation" element={<ComposantGeo />}></Route>
        <Route path="/cartographie" element={<Map />}></Route>
        <Route path="/donnees" element={<Data />}></Route>
        <Route path="/statistiques" element={<Stats />}></Route>
      </Routes>
      <main></main>
    </>
  );
}

export default App;
