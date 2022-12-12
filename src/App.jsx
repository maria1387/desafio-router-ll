

import Navbar from './components/Navbar'
import {
 
  Routes,
  Route,
} from "react-router-dom";
import Home from './view/Home';
import Pokemon from './view/Pokemon';
import PokemonDetail from './view/PokemonDetail';
function App() {


  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/pokemones" element={<Pokemon />}/>
      <Route path="/pokemones/:name" element={<PokemonDetail />}/>
    </Routes>
    </div>
  )
}

export default App
