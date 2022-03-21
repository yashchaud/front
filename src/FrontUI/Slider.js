import happy from "../images/clearlyhappy.jpg";
import home from "../images/PlayButton.png";
import pat from "../images/pat.jpg";
import cat from "../images/cat.jpg";
import last from "../images/last.jpg";
import styled from "styled-components";
import Searchbar from "../FrontUI/searchbar";
import { useEffect, useState } from "react";

const Slider = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setName(data));
  }, []);
  
console.log(name);
  return (
    <div>
      <Searchbar />
      <Slidercontainer>
        <Slidercomponent>
          <img className="Coverimg" src={happy} alt="" />
          <div className="Play-text">
            <img className="playbutton" src={home} alt="" />
            <h4>Be more clear about your mood</h4>
            <p>Ed sheren</p>
          </div>
        </Slidercomponent>

        <Slidercomponent>
          <img className="Coverimg" src={pat} alt="" />
          <div className="Play-text">
            <img className="playbutton" src={home} alt="" />
            <h4>Be more clear about your mood</h4>
            <p>Ed sheren</p>
          </div>
        </Slidercomponent>

        <Slidercomponent>
          <img className="Coverimg" src={cat} alt="" />
          <div className="Play-text">
            <img className="playbutton" src={home} alt="" />
            <h4>Be more clear about your mood</h4>
            <p>Ed sheren</p>
          </div>
        </Slidercomponent>

        <Slidercomponent>
          <img className="Coverimg" src={last} alt="" />
          <div className="Play-text">
            <img className="playbutton" src={home} alt="" />
            <h4>Be more clear about your mood</h4>
            <p>Ed sheren</p>
          </div>
        </Slidercomponent>
      </Slidercontainer>
    </div>
  );
};

export default Slider;

const Slidercontainer = styled.div`
  width: 70vw;
  height: 46.4vh;
  margin-left: 55px;
  margin-top: 85px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1rem;
`;
const Slidercomponent = styled.div`
  border-radius: 50px;
  width: 350px;
  height: 500px;
  background: white;
  position: relative;
  z-index: 0;
  .Coverimg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
  }
  .Play-text {
    display: flex;

    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    position: relative;

    bottom: 25%;
    z-index: 1;

    .playbutton {
      width: 50px;
      height: 50px;
    }
  }
`;
