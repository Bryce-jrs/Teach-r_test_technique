import Searchbar from '../Components/Searchbar';
import BookData from "../page/Matiere.json"
import "./Header.css"

const Header = () => {
  return (
    <div className="Header">
      <h2>En quelle matière avez-vous besoin d'aide ?</h2>
      <Searchbar placeholder="SVT, piano, anglais, math..." data={BookData}/>
    </div>
  )
}

export default Header;