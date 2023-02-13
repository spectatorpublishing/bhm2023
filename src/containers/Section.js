import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';


const Container = styled.div` // container for all components
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


const AllRectangles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  position: relative;
  height: 50%;
  padding: 110px 350px 28px 45px;
  margin-right: 300px;
`;

const Rectangle = styled.div`
  height: 100%;
  width: 100%;
  margin: 15px;
`;

const Rectangle1 = styled(Rectangle)`
    background-color: #7A5470;
    height: 526px;
    width: 887px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    margin: 10px;
    margin-left: 100px;
`;

const LittleRectangle1 = styled.div`
    background: #907388;
    height: 293px;
    width: 356.8284912109375px;
    left: 118.0205078125px;
    top: 159px;
    border-radius: 0px;
    align-items: center;
    margin-left: 150px;
    margin-top: 100px;

`;

const Rectangle2 = styled(Rectangle)`
    background-color: #5F415B;
    height: 325px;
    width: 683px;
    right: 300px;
    top: 34px;
    border-radius: 0px;
    margin: 10px;
    margin-left: 225px;
    justify-content: right;
`;

const LittleRectangle2 = styled.div`
    background: #70586D;
    height: 293px;
    width: 356.8284912109375px;
    left: 118.0205078125px;
    top: 159px;
    border-radius: 0px;
    align-items: center;
    margin-left: 400px;
`;

const ArticleInfo1= styled.div`
    text-align: right;
    color: white;
    margin: 10px;
    font-family: 'EB Garamond';
    text-transform: capitalize;
    font-weight: 600;
    position: relative;
`;
const ArticleInfoTitle1 = styled(ArticleInfo1)`
    font-size: 30px;
`;
const ArticleInfoAuthor1 = styled(ArticleInfo1)`
    margin: 10px;
    color: white;
    font-size: 15px;
`;

const ArticleInfo2= styled.div`
    text-align: left;
    color: white;
    font-family: 'EB Garamond';
    font-weight: 600;
    text-transform: capitalize;
    height: 72px;
    width: 393px;
    left: 0px;
    top: 40px;

`;
const ArticleInfoTitle2 = styled(ArticleInfo2)`
    font-size: 30px;
`;
const ArticleInfoAuthor2 = styled(ArticleInfo2)`
    margin: 10px;
    color: white;
    font-size: 15px;
`;
const Section = () => {

    return (
        <Container id = "section">
            <NavBar isSection/>
            <HeaderDiv><Header>UNIVERSITY</Header></HeaderDiv>
            <AllRectangles>
            <Rectangle1><ArticleInfo1><ArticleInfoTitle1>This Article's Title
                </ArticleInfoTitle1><ArticleInfoAuthor1>By Some Person's Name</ArticleInfoAuthor1></ArticleInfo1><LittleRectangle1/></Rectangle1>


                <Rectangle2><ArticleInfo2><ArticleInfoTitle2>This Article's Title
                </ArticleInfoTitle2><ArticleInfoAuthor2>By Some Person's Name</ArticleInfoAuthor2></ArticleInfo2><LittleRectangle2/></Rectangle2>


            <Rectangle1><ArticleInfo1><ArticleInfoTitle1>This Article's Title
                </ArticleInfoTitle1><ArticleInfoAuthor1>By Some Person's Name</ArticleInfoAuthor1></ArticleInfo1><LittleRectangle1/></Rectangle1>
                <Rectangle2><ArticleInfo2><ArticleInfoTitle2>This Article's Title
                </ArticleInfoTitle2><ArticleInfoAuthor2>By Some Person's Name</ArticleInfoAuthor2></ArticleInfo2><LittleRectangle2/></Rectangle2>
            </AllRectangles>
        </Container>
    );
};

export default Section;