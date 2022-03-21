 
import Nav from '../FrontUI/nav';
import Slider from '../FrontUI/Slider';
import styled from 'styled-components';
import Recently from '../FrontUI/Recently';

const Home = () => {
  return (
    <StyledHome>
      <Nav />
      
      <Slider />
      <Recently />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
display:flex;
background: #0f0f0f;
`