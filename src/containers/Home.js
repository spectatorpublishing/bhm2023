import { React} from 'react';
import Credits from './Credits';
import Letter from '../containers/LetterEditor';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import './Home.css'
import MobileNavBar from '../components/MobileNavBar';
import bhm from "./BHM_digital.png"

/*
const Home = () => {


   return (
       <HomeContainer>
           <SpecLogo></SpecLogo>
           <Line></Line>
           <TopWrapper>
           <Photo></Photo>
               <Title>BLACK HISTORY MONTH</Title>
           </TopWrapper>
           {/*
           <NavBar/>
           <MobileNavBar/>
           <Letter/>
   <Credits/>
       </HomeContainer>
   );
};*/


const Home = () => {


   return (
        <HomeContainer>
           <div className='background'>
          
           <div className = "spec-logo">
           <img src = "https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png" alt = "Columbia Spectator logo" width = "24.375%" height = "auto"></img>
           </div>
           <div className = "line"></div>
           <div className = "wrapper">
           <div className = "photo"><img src = {bhm} alt = "black history month graphic" width = "100%"></img></div>
           <div className = "title">BLACK HISTORY<br></br>MONTH</div>
           </div>


               </div>
            <NavBar/>
           <MobileNavBar/>
           <Letter/>
            <Credits/>
        </HomeContainer>

   );
};


export default Home;
