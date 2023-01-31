import { React} from 'react';
import Credits from './Credits';
import Letter from '../components/LetterFromEditor';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';

const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(#5F193E, #3F132e, #1D132b);
`;

const Home = () => {

    return (
        <HomeContainer>
            <NavBar/>
            <MobileNavBar/>
            <Letter/>
            <Credits/>
        </HomeContainer>
    );
};

export default Home;