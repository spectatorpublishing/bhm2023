import { React} from 'react';
import Credits from './Credits';
import Letter from '../containers/LetterEditor';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
import bhm from './bhm.JPG';

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #661949 0%, #10071D 100%), #3F132E;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SpecLogo = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 3.813rem;
    margin-bottom: 1.75rem;
`;

const Image = styled.img`
    display: block;
    width: 24.375%;
    height: auto;
`;

const Line = styled.div`
    width: 93.75%;
    height: 0.063rem;
    background-color: white;
    margin-bottom: 3.75rem;
    align-self: center;
`;

const Wrapper =styled.div`
    display: flex;
`;

const Photo = styled.div`
    display: flex;
    width: 72%;
    height: auto;
    margin-left: 7.3%;
    position: relative;
    margin-bottom: 9.375vw;
`;

const Title = styled.div`
    display: flex;
    position: absolute;
    margin-top: 35%; 
    color: white;
    margin-left: 29%;
    font-family: "EB Garamond";
    font-weight: 600;
    line-height: 8.125rem;
    font-size: 7.8vw;
    text-align: right;
`;

const Home = () => {

    return (
        <HomeContainer>
                <SpecLogo><Image src = "https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png" alt = "Columbia Spectator logo" ></Image></SpecLogo>
                <MobileNavBar/>
                <Line></Line>
                <Wrapper>
                    <Photo><img src = {bhm} alt = "black history month graphic" width = "100%"></img></Photo>
                    <Title>BLACK HISTORY<br></br>MONTH</Title>
                </Wrapper>
                <NavBar/>
                <MobileNavBar/>
                <Letter/>
                <Credits/>
        </HomeContainer>
    );
};

export default Home;