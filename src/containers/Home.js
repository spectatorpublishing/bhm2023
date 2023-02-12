import { React} from 'react';
import Credits from './Credits';
import Letter from '../containers/LetterEditor';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import './Home.css';
import MobileNavBar from '../components/MobileNavBar';
import bhm from './bhm.JPG';

const HomeContainer = styled.div`
    height: 100%;
    width:100%;
    background: linear-gradient(#5F193E, #3F132e, #1D132b);
`;

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
                <NavBar/>
                <MobileNavBar/>
                <Letter/>
                <Credits/>
             </div>
        </HomeContainer>
    );
};

export default Home;