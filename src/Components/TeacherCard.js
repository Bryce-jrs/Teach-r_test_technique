import people from "../page/teachers.json";
import logo from "../ressource/anonyme.jpg";
import rating from "../ressource/rating.png";
import hat from "../ressource/hatdeegre.png";
import conv from "../ressource/conv.png";
import check from "../ressource/check.png";
import lieu from "../ressource/lieu.jpg";
import "./TeacherCard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function TeacherCards() {
  function handleClick() {
    alert("choix pris en compte");
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
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
        {people.map((person) => (
          <div className="profile-teachcard">
            <div className="profil-photo">
              <img alt="" src={logo} />
            </div>
            <div className="Name">
              <div>{person.name}</div>
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
                <span>{person.school}</span>
              </div>
              <div className="conv">
                <img alt="" src={conv} />
                <span>{person.language}</span>
              </div>
              <div className="check">
                <img alt="" src={check} />
                <span>{person.check}</span>
              </div>
              <div className="lieu">
                <img alt="" src={lieu} />
                <span>{person.area}</span>
              </div>
            </div>

            <div className="description">
              <h3>Description</h3>
              <div>
                <p>{person.description}</p>
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
