import Perfil from "../components/Perfil"
import BasicExample from "../components/NavBar/Navbar"
import FaixaImage from "../components/faixaImage/FaixaImage"
import Blog from "./Blog"

const Home = () => {


  return (
    <div>
      <FaixaImage />
      <BasicExample />
      <Perfil />
      <Blog />
    </div>
  )
}

export default Home