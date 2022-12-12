import { createContext, useEffect, useState } from "react";


export const PikachuContext = createContext();

const PikachuProvider = ({ children }) => {

	const [pokemons, setPokemons] = useState([]);
	// const { name } = useParams();

	//  const [pokemon, setPokemon] = useState(null);
  const baseURL = `https://pokeapi.co/api/v2/pokemon?limit=1154`;
  useEffect(() => {
    const getImg = async () => {
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        console.log(data.results);
		setPokemons(data.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    getImg();
  }, []);
  // const getData = async () => {
  //   const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  //   const data = await result.json();
  //   setPokemon(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, [name]);

  return (
    <PikachuContext.Provider value={{ pokemons, setPokemons, }}>
      {children}
    </PikachuContext.Provider>
  );
};

export default PikachuProvider;
