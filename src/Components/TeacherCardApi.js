import logo from "../ressource/anonyme.jpg";
import rating from "../ressource/rating.png";
import hat from "../ressource/hatdeegre.png";
import conv from "../ressource/conv.png";
import check from "../ressource/check.png";
import lieu from "../ressource/lieu.jpg";
import "./TeacherCard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TeacherCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.data.gouv.fr/api/1/users/?page=1&page_size=200"
      );

      setData(result.data.data);
    };
    fetchData();
  });
  function handleClick() {
    alert("choix pris en compte");
  }
  function description(person) {
    if (person.about === null) return "pas de description";
    else {
      if (person.about.length < 100) {
        return person.about;
      } else {
        return person.about.slice(0, 100);
      }
    }
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5
        }
      }
    ]
  };

  return (
    <div className="profile-teachcards">
      <Slider {...settings}>
        {data.map((person) => (
          <div className="profile-teachcard">
            <div className="profil-photo">
              <img alt="" src={logo} />
            </div>
            <div className="Name">
              <div>
                {person.first_name} {person.last_name}
              </div>
            </div>
            <div className="rating-photo">
              <img alt="" src={rating} />
            </div>
            <div className="horaire">
              <span>20 heures données</span>
            </div>
            <div className="details">
              <div className="hat">
                <img alt="" src={hat} />
                <span>HEC, 1 ère année</span>
              </div>
              <div className="conv">
                <img alt="" src={conv} />
                <span>Bilingue</span>
              </div>
              <div className="check">
                <img alt="" src={check} />
                <span> Diplôme vérifié</span>
              </div>
              <div className="lieu">
                <img alt="" src={lieu} />
                <span>Paris</span>
              </div>
            </div>

            <div className="description">
              <h3>Description</h3>
              <div>
                <p>{description(person)}</p>
              </div>
            </div>
            <div className="btn-teachcard">
              <button onClick={() => handleClick()}>Choisir</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
