import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';


const Container = styled.div` // container for all components
    height: 100vh;
    width: 100vw;
    background: linear-gradient(#5F193E, #3F132e, #1D132b); 
`;
const HeaderDiv = styled.div`
    color: white;
    font-family: EB Garamond;
    font-size: 70px;
    font-weight: 600;
    line-height: 91px;
    letter-spacing: 0em;
    text-align: left;
`;

const Header = styled.div`
    font-family: 'EB Garamond';
    font-style: normal;
    font-weight: 600;
    font-size: 70px;
    line-height: 91px;
    text-transform: capitalize;
`;

const AllArticlesBox = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    border-radius: 0px;
`;  

const View1 = styled.img` 
    height: 75%;
    width: 50%;
    left: 118.02099609375px;
    top: 159px;
    border-radius: 0px;
    background-size: cover;
    z-index: 1;
`;

const View2 = styled.img`
    position: absolute;
    left: 44.82%;
    right: 8.61%;
    top: 0%;
    bottom: 23.08%;
    z-index: 1;
`;
const ArticleInfo1 = styled.div` 
    left: 50.06%;
    right: 6.88%;
    top: 12.93%;
    bottom: 73.38%;
    font-family: 'EB Garamond';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;
    text-transform: capitalize;
    color: #FFFFFF;
    z-index: 1;
`;
const ArticleInfo2 = styled.div`
    height: 72px;
    width: 393px;
    left: 100px;
    top: 40px;
    font-family: 'EB Garamond';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;
    text-transform: capitalize;
    color: #FFFFFF;
    z-index: 1;
`;

const ArticleTitle = styled.div`
    font-size: 1.5rem;
`;

const ArticleAuthor = styled.div`
    font-size: 1.5rem;
`;

const BigBox1 = styled.div`
    position: absolute;
    background: #7A5470;
    height: 526px;
    width: 887px;
    left: 0px;
    top: 600px;
    border-radius: 0px;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    z-index: 3;
`;

const LittleBox1= styled.div`
    position: absolute;
    background: #907388;
    height: 293px;
    width: 356.8284912109375px;
    left: 118.02099609375px;
    top: 159px;
    border-radius: 0px;
    z-index: 2;
`;

const BigBox2 = styled.div`
    background: #5F415B;
    height: 356px;
    width: 683px;
    left: 121px;
    top: 34px;
    border-radius: 0px;
    position: absolute;
    left: 14.09%;
    right: 6.4%;
    top: 8.72%;
    bottom: 0%;
    z-index: 3;
`;
const LittleBox2= styled.div`
    background: #70586D;
    height: 293px;
    width: 387px;
    left: 472px;
    top: 76px;
    border-radius: 0px;
    position: absolute;
    left: 54.95%;
    right: 0%;
    top: 19.49%;
    bottom: 5.38%;
    z-index: 2;

`;
const Section = () => {

    return (
        <Container id = "section">
            <HeaderDiv><Header>UNIVERSITY</Header></HeaderDiv>
            <AllArticlesBox>
            <ArticleInfo1>
                <BigBox1>
                <ArticleTitle>Title</ArticleTitle>
                <ArticleAuthor>By: Author</ArticleAuthor>
                <View1>
                    <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk0OTA1OTY4ODg1MTE0Mzky/hero-crop-gettyimages-459534214.jpg"></img>
                </View1>
                <LittleBox1>                
                </LittleBox1></BigBox1>
            </ArticleInfo1>

            <ArticleInfo2>
                <BigBox2>
                <ArticleTitle>Title</ArticleTitle>
                <ArticleAuthor>By: Author</ArticleAuthor>
                <View2>
                    <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk0OTA1OTY4ODg1MTE0Mzky/hero-crop-gettyimages-459534214.jpg"></img>
                </View2>
                    <LittleBox2></LittleBox2></BigBox2>
            </ArticleInfo2>
            </AllArticlesBox>
        </Container>
    );
};

export default Section;