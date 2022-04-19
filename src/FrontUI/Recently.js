import Properties from '../images/Properties.png';
import lapr from '../images/lapr.jpg';
import styled from 'styled-components'
import Items from '../FrontUI/Recently-items';


const Recently = () => {
    return (
        <StyledRecently>
            <Recentlycontainer>
                <h2>Recently Played</h2>
                <img className="properties" src={Properties} alt="" />
            </Recentlycontainer>
            <div>
                <Items />
                <Items />
                <Items />
                <Items />
                 
                <Items />
            </div>
            <ViewAll>
                <a href="#">View All</a>
            </ViewAll>
        </StyledRecently>
    )
}

export default Recently;

const StyledRecently = styled.div`
 
margin-left:2rem;
border-radius: 1rem;
background-color:#161616;
border: 1px solid transparent;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
width:90%;
height:auto;
 



width: 18vw;
height: 55vh;
color: white;

margin-top: 10rem;
.properties{
    width:20px;
    height:20px;
}
    `

 const Recentlycontainer = styled.div`
 margin:auto;
 margin-top: 2rem;
    width: 90%;
    height:5vh;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    `

const ViewAll = styled.div`

    width: 90%;
    
    height:5vh;
    margin:auto;
    border-radius:0.9rem;
    background-color: #1c1d1f;
    
    color:white;
    margin-top:2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        text-decoration:none;
        color:white;
    }

    
`