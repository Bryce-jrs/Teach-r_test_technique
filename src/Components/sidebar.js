import './sidebar.css'
import logo from '../ressource/teachr.png';
import livre from '../ressource/livre.jpeg'
import green from '../ressource/green.png';
import deux from '../ressource/2-rond.png'
import trois from '../ressource/3-rond.png';


export default function Sidebar(){
  return (
    <div className="sidebar">
      <img alt="logo teach'r" className="teach" src={logo}/>
      <div className="set">
      <a href="#"> <img alt="logo" className="green" src={green}/> <p>Votre demande</p> </a>
      </div>
      <div className="set">
      <a href="./offer" target="blank">
      <img alt="logo" className="deux" src={deux}/> <p>Nos propositions</p></a>
      </div>
      <div className="set">
      <a href="/payment"> <img alt="logo" className="trois" src={trois} /> <p>Paiement</p></a>
      </div >
      <div className="illust">
      <img alt="logo illustration" className="livre" src={livre}/>
        </div>
    </div>
  )
}