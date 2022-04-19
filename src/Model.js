import * as tf from "@tensorflow/tfjs";
import { useState, useEffect } from "react";
import styled from "styled-components";
import lapr from "../src/images/ksk.jpg";
import axios from "axios";
import SpotifyPlayer from "react-spotify-web-playback";

// Getting tracks from db

 

 
 
const Model = () => {
  const handleLogin = () => {
    window.location =
      "https://accounts.spotify.com/en/authorize?response_type=token&client_id=adaaf209fb064dfab873a71817029e0d&redirect_uri=https:%2F%2Fdeveloper.spotify.com%2Fdocumentation%2Fweb-playback-sdk%2Fquick-start%2F&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&show_dialog=true";
  };

  const [result, setResult] = useState("");

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

  


   
   
  return (
    <div>
      
      <button onClick={handleLogin}>Loginspoti</button>
      <img id="image" src={lapr} alt="" />
      <button onClick={LoadModel}>click</button>
      <h2>{result}</h2>
    </div>
  );
};

export default Model;
