import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import LeftArticle from '../components/LeftArticle';
import RightArticle from '../components/RightArticle';

const Container = styled.div` // container for all components
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(180deg, #945F80 0%, #10071D 100%), #3F132E; 
`;

const HeaderDiv = styled.div`
    color: white;
    font-family: EB Garamond;
    font-size: 70px;
    font-weight: 600;
    line-height: 91px;
    letter-spacing: 0em;
    text-align: left;
    display: flex;

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`;

const Header = styled.div`
    font-family: 'EB Garamond';
    font-style: normal;
    font-weight: 600;
    font-size: 70px;
    line-height: 91px;
    text-transform: capitalize;
    justify-content: center;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
`;

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  position: relative;
  height: 100%;
  padding-top: 25px;
    @media screen and (max-width: 768px) {
        margin: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Section = ({ header, articles }) => {
    return (
        <Container>
            <NavBar isSection />
            <MobileNavBar />
            <HeaderDiv>
                <Header>{header}</Header>
            </HeaderDiv>
            <ArticlesContainer>
                {articles.map((article, index) => (
                    (index % 2 == 0) ? <RightArticle article={article} /> : <LeftArticle article={article} />
                ))}
            </ArticlesContainer>
        </Container>
    );
};


export default Section;


