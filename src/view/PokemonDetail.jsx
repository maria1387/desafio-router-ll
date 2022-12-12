
import Btn from "../components/Btn";
import '../assets/css/pokemon.css'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Container, Row, Col } from 'reactstrap';
const PokemonDetail = () => {
	const { name } = useParams();

  const [pokemon, setPokemon] = useState(null);
  const navitate = useNavigate()
	
	;


  const getData = async () => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await result.json();
    setPokemon(data);
  };

  useEffect(() => {
    getData();
  }, [name])
	  const handleBack = () => {
		navitate(-1)
	   }
	  return (
		<div className="pokemon-detail">
      
<Container>
<Row className="pokemon-row" >
      {pokemon && (
        <>
        <Col lg='6'>
          <div className="pokemon-detail_img">
            <img src={pokemon.sprites.other.home.front_default} alt="" className="img-pokemon"/>
          </div>
          </Col>
          <Col lg='6' >
          <div className="pokemon-context">
            <h1 className="">{pokemon.name.toUpperCase()}</h1>
            <h2>{pokemon.types[0]?.type.name}</h2>
        
          <div className="pokemon-table">
            <table className=" ">
              <thead>
                <tr>
                  <th>Descripcion</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
                {pokemon.stats?.map((item, i) => (
                  <tr key={i}>
                    <td>{item.stat.name}</td>
                    <td>{item.base_stat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
          <div className="btn-container"><Btn  onClick={handleBack} text='volver' className='pokemon-details-btn'/></div>
          
          </Col>
        </>
      )}
   
      </Row>
      </Container>
    </div>
	)
};

export default PokemonDetail;
