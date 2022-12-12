import { useContext, useState } from "react";
import { PikachuContext } from "../context/PikachuProvider";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const { pokemons } = useContext(PikachuContext);
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    const pokeName = e.target.value;
    if (pokeName && pokeName != "") {
      setNombre(pokeName);
    } else {
      alert("No existe");
    }
  };

  const searchPokemonByName = (e) => {
    e.preventDefault();
    navigate(`${nombre}`);
  };
  return (
    <div className="search">
      <h2 className="h2">Selecciona un pokemon</h2>
      <select name="" id="" onChange={handleSearch}>
        <option>
           Pokemones
        </option>
        {pokemons.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <Btn onClick={searchPokemonByName} text="Ver Detalle" className="search-btn" />
    </div>
  );
};

export default Search;
