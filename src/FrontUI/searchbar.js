import styled from "styled-components";
import circle from "../images/circle.png";

const Searchbar = () => {
  return (
    <Searchcover>
      <SearchbarContainer>
        <input type="text" name="" id="" placeholder=""/>

      
        <button className="Filters">Filters</button>
      </SearchbarContainer>
    </Searchcover>
  );
};

export default Searchbar;

const Searchcover = styled.div`
margin-top:35px;
margin-left:40px;
background:#171717;
border-radius:10rem;

  width: 72vw;
  height: 5vh;
`;
const SearchbarContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
gap:1rem;
align-items: center;
border-radius:10rem;
 

input{
    border-radius:10rem;

    width:70%;
    height:91%;
    border:none;
    background: #171717;
    input#search{
 background-image: url(${circle});
 width:20px;
 background-size:20px;
 background-repeat: no-repeat;
 text-indent: 20px;
  background-position: right;
  background-size: 20px;
  padding-right: 20px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-left:10px;
  margin-top:10px;
  margin-bottom:10px;
    }
}
button{
    padding: 0.8rem;
    padding-right:1.5rem;
    padding-left:1.5rem;
    border:none;
    border-radius:0.3rem;
    background: #1c1d1f;
    color:#c7c7c7;
}
.Filters{
    margin-left:7rem;
}
`;
