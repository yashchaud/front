import * as tf from "@tensorflow/tfjs";
import SpotifyPlayer from "react-spotify-web-playback";
import { useState, useEffect } from "react";
import styled from "styled-components";
import lapr from "../src/images/clearlyhappy.jpg";
import axios from "axios";

const CLIENT_ID = "74bbd63608b94a93a2864c80e91a0f54"; // insert your client id here from spotify
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/song";
const SPACE_DELIMITER = "%20";
const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private",
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    console.log(currentValue);
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};

const Model = () => {
  const [acessToken, setacessToken] = useState("");
  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  };

  const [result, setResult] = useState("");

  console.log(acessToken);
  const categories = [
    "anger",
    "disgust",
    "fear",
    "happy",
    "sadness",
    "surprise",
    "z",
  ];

  const LoadModel = async () => {
    const model = await tf.loadLayersModel("http://localhost:8000/model.json");

    const image = document.getElementById("image");

    let step1 = tf.browser
      .fromPixels(image)
      .resizeNearestNeighbor([48, 48])
      .mean(2)
      .toFloat()
      .expandDims(0)
      .expandDims(-1)
      .div(255.0);

    const prediction = model.predict(step1).argMax(-1).dataSync();

    setResult(categories[prediction[0]]);
  };

  //Use effect line
  useEffect(() => {
    if (result === "") {
      return null;
    } else {
      axios
        .post("http://localhost:5000/Model", {
          mood: result,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [result]);

  //to get accesstoken
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();
      setacessToken(access_token);
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });
  
  return (
    <div>
      <SpotifyPlayer
        token={acessToken}
        uris={["spotify:artist:6fOMl44jA4Sp5b9PpYCkzz"]}
      />
      ;<button onClick={handleLogin}>Loginspoti</button>
      <img id="image" src={lapr} alt="" />
      <button onClick={LoadModel}>click</button>
      <h2>{result}</h2>
    </div>
  );
};

export default Model;
