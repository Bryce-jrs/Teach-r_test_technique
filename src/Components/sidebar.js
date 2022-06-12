import './sidebar.css'
import logo from '../ressource/teachr.png';
import livre from '../ressource/livre.jpeg'
import green from '../ressource/green.png';
import deux from '../ressource/2-rond.png'
import trois from '../ressource/3-rond.png';

export default function Sidebar(){
  return (
    <div class="sidebar">
      <img alt="logo teach'r" src={logo} width="100px"/>
      <div className="set">
      <a href=""> <img alt="logo" src={green} width="35px"/> Votre demande </a>
      </div>
      <div className="set">
      
      <a href="">
      <img alt="logo" src={deux} width="45px"/> Nos propositions</a>
      </div>
      <div className="set">
      <a href=""> <img alt="logo" src={trois} width="45px" height="50px"/> Paiement</a>
      </div >
      <div className="illust">
      <img alt="logo illustration" src={livre} width="250px"/>
        </div>
    </div>
  )
}