import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import ComposantGeo from './ComposantGeo';
import Map from './Map';
import Data from './Data';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/geolocalisation" element={<ComposantGeo />}></Route>
        <Route path="/cartographie" element={<Map />}></Route>
        <Route path="/donnees" element={<Data />}></Route>
      </Routes>
      <main>
      </main>
    </>
  )
}

export default App
