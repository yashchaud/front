import styled from "styled-components";
import lapr from "../images/lapr.jpg";

const Items = () => {
  return (

    <Itemcover>
      <Styledimg>
        <img src={lapr} alt="" />
      </Styledimg>
      <div>
        <h2>Blinding Lights</h2>
        <p>The Weekend</p>
      </div>
    </Itemcover>
  
  );
  };

export default Items;
const Itemcover = styled.div`
margin: auto;
margin-top: 1.5rem;
width:90%;
height:5vh;
display:flex;
justify-content:flex-start;
align-items:center;
gap:1rem;
color: white;


`

const Styledimg = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
background-color: #0f0f0f;

  img {
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:50%;
  }
`;

