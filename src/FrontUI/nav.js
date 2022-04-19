import logo from '../images/logo.png'
import Microphone from '../images/Microphone.png'
import Statistics from '../images/Statistics.png'
import Heart from '../images/Heart.png'
import Camera from '../images/Camera.png'
import { motion, AnimatePresence } from "framer-motion"
import home from '../images/Home.png'
import styled from 'styled-components'

const Nav =({isclosed,Setisplaying,isplaying})=>{ 
     
    return(
        <Cover>
            <Spotlogo>
                <img src={logo} alt="logo" />
            </Spotlogo>

            <Naav>
                <NavItem>
                    
                <img src={home} alt="home" />  
                <img src={Microphone} alt="Microphone" />  
                <img src={Statistics} alt="home" />  
                <img src={Heart} alt="home" />  
                <img src={Camera} onClick={() => isclosed(true)} alt="" />
                </NavItem>
            </Naav>
             
        </Cover>
             

    ) }



 

export default Nav;


const Cover = styled.div`
width:5vw;
height:100vh;
background-color:#0f0f0f;
 
`

const Spotlogo = styled.div` 
width: 5vw;
  img{

    object-fit:contain;
    width:78px;
    height:68px;
    margin-top:30px;
    margin-left:16px;


 }
`
const Naav = styled.div`

    width:100%;
    height:100%;
    display:flex;
     
     
    background-color:#0f0f0f;
     
     
   

`
const NavItem = styled.div`
margin-top:30px;
    width:100%;
    height:40%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    background-color:#0f0f0f;
    img{
         
        width:43px;
        height:48px;
        object-fit:contain;
        cursor: pointer;
        
        }
        `