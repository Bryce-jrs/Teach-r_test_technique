import "./Sidebar-formulaire.css";
import logo from "../../ressource/teachr.png";
import livre from "../../ressource/livre.jpeg";
import green from "../../ressource/green.png";
import six from "../../ressource/6-rond.png";

export default function Sidebarform() {
  return (
    <div className="sidebarform">
      <img alt="logo teach'r" className="teachform" src={logo} />
      <div className="set">
        <a href="#">
          {" "}
          <img alt="logo" className="greenform" src={green} /> Quelle matière ?
        </a>
      </div>
      <div className="set">
        <a href="#">
          {" "}
          <img alt="logo" className="greenform" src={green} /> Quelle classe ?
        </a>
      </div>
      <div className="setform">
        <a href="#">
          {" "}
          <img alt="logo" className="greenform" src={green} /> Domicile ou
          distance ?
        </a>
      </div>
      <div className="setform">
        <a href="#">
          {" "}
          <img alt="logo" className="greenform" src={green} /> Quel type de
          cours ?
        </a>
      </div>
      <div className="setform">
        <a href="#">
          {" "}
          <img alt="logo" className="greenform" src={green} /> A qui s'adresse
          le cours ?
        </a>
      </div>
      <div className="setform">
        <a className="active" href="./offer" target="blank">
          <img alt="logo" className="deuxform" src={six} /> Presque finit !
        </a>
      </div>
      <div className="illustform">
        <img alt="logo illustration" className="livreform" src={livre} />
      </div>
    </div>
  );
}
