import React, { useState, useEffect } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import * as tf from "@tensorflow/tfjs";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import axios from "axios";
import Styled from "styled-components";

export default function Spotifyplayer({
  isClosed,
  setPhoto,
  photo,
  isPlaying,
  Setcomponentmount,
  componentmount,
}) {
  const [result, setResult] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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
    console.log(result);
    isPlaying(true);
  };
  useEffect(() => {
    if (result == "") {
    } else {
      axios
        .post("http://localhost:5000/mood", {
          mood: result,
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  }, [result]);

  const close = () => {
    isClosed(false);
  };
  const handleTakePhoto = (dataUri) => {
    setIsOpen(true);
    // Do stuff with the photo...
    setPhoto(dataUri);
  };
  function handleTakePhotoAnimationDone(dataUri) {}
  const handleOpen = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      <LayoutGroup>
        <Cover layout>
          <Caamera layout>
            {isOpen ? (
              <Image layout id="image" src={photo} alt="" />
            ) : (
              <Camera
                onTakePhotoAnimationDone={(dataUri) => {
                  handleTakePhotoAnimationDone(dataUri);
                }}
                isImageMirror={true}
                onTakePhoto={(dataUri) => {
                  handleTakePhoto(dataUri);
                }}
              />
            )}
          </Caamera>
          <motion.button
            layout
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => close()}
            className="Button1"
          >
            Close
          </motion.button>

          <Hcover layout>{result}</Hcover>

          <motion.button
            layout
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleOpen()}
            className="Button1 Button3"
          >
            Takeanothersnap
          </motion.button>

          <motion.button
            layout
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => LoadModel()}
            className=" Button1 Button2"
          >
            Recognize
          </motion.button>
        </Cover>
        /
      </LayoutGroup>
    </AnimatePresence>
  );
}

const Hcover = Styled.h1`
position:absolute;
bottom: -0.5rem;
left:30rem;
color: #dbdbdb
font-size:9rem;
`;
const Image = Styled(motion.img)`
position:absolute;
bottom:1rem;
left:1rem;
width: 50rem;;
height: 30rem;
`;
const Cover = Styled(motion.div)` 

position:fixed;
top:10rem;
left:30rem;
background-color: #100c08;

box-shadow: 5px 4px 18px #302112;

 

width:60rem;
height:40rem;
.Button1{
  padding:3rem;
  padding-top: 1rem;
  padding-bottom:1rem;
  position: absolute;
  top:33rem;
  left:25rem;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid $red;
  border-radius: 0.6em;
  color: $red;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
  }
  
  border-color: #4d4dff;
  color: #fff;
  box-shadow: 0 0 40px 40px #6495ED inset, 0 0 0 0 #6495ED;
  transition: all 150ms ease-in-out;
  
  &:hover {
    box-shadow: 0 0 10px 0 #4d4dff inset, 0 0 10px 4px #4d4dff;
  }
}
  
   
}
.Button2{
  position: absolute;
  top:33rem;
  left:44rem;
}
.Button3{
  position: absolute;
  top:33rem;
  left:2rem;
}
`;
const Caamera = Styled(motion.div)`
position:absolute;
left:4rem;
top:2rem;
width: 50rem;;
height: 30rem;
box-shadow: 5px 5px 18px #050402;
`;
