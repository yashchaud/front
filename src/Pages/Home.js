import { useState } from "react";
import Nav from "../FrontUI/nav";
import Slider from "../FrontUI/Slider";
import styled from "styled-components";
import Recently from "../FrontUI/Recently";
import Spotifyplayer from "../FrontUI/Spotifyplayer";

const Home = () => {
  const [isOpen, isClosed] = useState(false);
  const [photo , setphoto] = useState()
  const [isplaying, setisplaying] = useState(false);
  const [componentmount, Setcomponentmount] = useState(false);
  console.log(isOpen);
  return (
    <StyledHome>
      <Nav isclosed={isClosed} Setcomponentmount={Setcomponentmount} isplaying={isplaying} Setisplaying={setisplaying}/>
      <Slider isopen={isOpen} componentmount={componentmount} photo = {photo} isclosed={isClosed} Setphoto= {setphoto} isplaying = {isplaying} Setisplaying={setisplaying} Setcomponentmount={Setcomponentmount}/>
      <Recently />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  display: flex;
  background: #0f0f0f;
  overflow: hidden;
`;
