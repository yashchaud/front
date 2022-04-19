import happy from "../images/clearlyhappy.jpg";
import axios from "axios";
import home from "../images/PlayButton.png";
import pat from "../images/pat.jpg";
import cat from "../images/cat.jpg";
import last from "../images/last.jpg";
import styled from "styled-components";
import Searchbar from "../FrontUI/searchbar";
import Spotifyplayer from "../FrontUI/Spotifyplayer";
import { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

var token =
  "BQDKpjCoF5YsT_kux8VOAvWO7B7KIVMG5i3488FRyhABdI5e43osOJ6NEj-esRPEt1x3N3JnS3h8PJpHoJQtc1G1ETKAVkDCWmHhihryh3M964jKG_7IXbmdfeGcNYP9rfJ1ie9EGIKrQRbESJOsAuMr02M_c8lbv20542h9wUmLU5kzN8Zt9g_UsXDj26IuURnGCzutoHDxIlQX_Q";

const Slider = ({
  isopen,
  isclosed,
  photo,
  Setphoto,
  isplaying,
  Setisplaying,
  Setcomponentmount,
  componentmount,
}) => {
  const [tracks, settracks] = useState([]);

  useEffect(() => {
    const Retrive = async () => {
      //get tracks

      await axios
        .get("http://localhost:5000/home")
        .then(function (response) {
          settracks([]);
          settracks(response.data);
          Setisplaying(false);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    };
    Retrive();
  }, [isplaying]);

  const component = () => {
    Setcomponentmount(true);
  };
  if (isplaying) {
    setTimeout(component, 7000);
  }
  console.log(tracks);
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
      {isopen && (
        <Spotifyplayer
          setPhoto={Setphoto}
          photo={photo}
          isClosed={isclosed}
          isPlaying={Setisplaying}
          componentmount={componentmount}
          Setcomponentmount={Setcomponentmount}
        />
      )}
      <PlayerCover>
        {componentmount && (
          <SpotifyPlayer
            styles={{
              activeColor: "#fff",
              bgColor: "#0f0f0f",
              color: "#fff",
              loaderColor: "#fff",
              sliderColor: "#1cb954",
              trackArtistColor: "#ccc",
              trackNameColor: "#fff",
            }}
            className="player"
            playerPosition="bottom"
            magnifySliderOnHover={true}
            autoPlay
            token={token}
            uris={tracks.map((track, index) => {
              return `spotify:track:${track}`;
            })}
          />
        )}
      </PlayerCover>
    </div>
  );
};

export default Slider;
const PlayerCover = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
`;

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
  border-color: #0f0f0f;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px rgba(176, 209, 56, 0.5);
  }

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
