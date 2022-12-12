import pikachu from "../assets/img/pikachu.jpg";
import '../assets/css/home.css'
const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Bienvenido maestro pokemón </h1>
      <img src={pikachu} alt="" className="home-imagen"/>
    </div>
  );
};

export default Home;
