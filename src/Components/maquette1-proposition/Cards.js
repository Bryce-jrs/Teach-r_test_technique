import logo from '../../ressource/anonyme.jpg';
import hat from '../../ressource/hatdeegre.png';
import conv from '../../ressource/conv.png';
import check from '../../ressource/check.png';
import lieu from '../../ressource/lieu.jpg';
import './Cards.css'



export default function Card() {

  function handleClick(){
    alert("choix pris en compte")
  }

  return (
    <div className="cards">
      <div className="profil" id="1">
      <img className="photo" alt="profil" src={logo}/>
      <div className="card">
      <h2>Marie Dardell</h2>
      <h6>20 heures données</h6>
      <div className="set">
        <img alt="degree" src={hat} width="20px"/>
        <p> HEC, 1 ère année </p>
        </div>
        <div className="set">
        <img alt="degree" src={conv} width="20px"/>
          <p> Bilingue </p>
          </div>
        <div className="set">
        <img alt="degree" src={check} width="20px"/>
          <p> Diplôme vérifié </p>
          </div>
        <div className="set">
        <img alt="degree" src={lieu} width="20px"/>
          <p> Paris</p>
          </div>
      <h4>Description</h4>
      <span>Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. </span>
      </div>
      <button className="choix" onClick={()=>handleClick()}>Choisir</button>
      </div>
      <div className="profil">
      <img className="photo" alt="profil" src={logo}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      <div className="card">
      <h2>Marie Dardell</h2>
      <h6>20 heures données</h6>
      <div className="set">
        <img alt="degree" src={hat} width="20px"/>
        <p> HEC, 1 ère année </p>
        </div>
        <div className="set">
        <img alt="degree" src={conv} width="20px"/>
          <p> Bilingue </p>
          </div>
        <div className="set">
        <img alt="degree" src={check} width="20px"/>
          <p> Diplôme vérifié </p>
          </div>
        <div className="set">
        <img alt="degree" src={lieu} width="20px"/>
          <p> Paris</p>
          </div>
      <h4>Description</h4>
      <span>Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua.</span>
      </div>
      <button className="choix" onClick={()=>handleClick()}>Choisir</button>
      </div>
      <div className="profil">
      <img className="photo" alt="profil" src={logo}/>
      <div className="card">
      <h2>Marie Dardell</h2>
      <h6>20 heures données</h6>
      <div className="set">
        <img alt="degree" src={hat} width="20px"/>
        <p> HEC, 1 ère année </p>
        </div>
        <div className="set">
        <img alt="degree" src={conv} width="20px"/>
          <p> Bilingue </p>
          </div>
        <div className="set">
        <img alt="degree" src={check} width="20px"/>
          <p> Diplôme vérifié </p>
          </div>
        <div className="set">
        <img alt="degree" src={lieu} width="20px"/>
          <p> Paris</p>
          </div>
      <h4>Description</h4>
      <span>Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. </span>
      </div>
      <button className="choix" onClick={()=>handleClick()}>Choisir</button>
      </div>
      </div>
  )
}