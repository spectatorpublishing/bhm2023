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
    z-index: 1;
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
    z-index: 2;
`;

const View1 = styled.image`
    max-width:100%;
    height:auto;
    z-index: 100;
    margin-right: 700px;
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
    z-index: 1;
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
    margin-top: 10px;
    z-index: 2;
`;

const ArticleInfo1= styled.div`
    text-align: right;
    color: white;
    font-family: 'EB Garamond';
    text-transform: capitalize;
    font-weight: 600;
    position: relative;
    z-index: 10;
    margin-top: 100px;
`;
const ArticleInfoTitle1 = styled(ArticleInfo1)`
    font-size: 40px;
`;
const ArticleInfoAuthor1 = styled(ArticleInfo1)`
    color: white;
    font-size: 20px;
`;

const View2 = styled.image`
    margin-left: 700px;
    max-width:100%;
    height:auto;
    z-index: 100;
    position: absolute;
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
    z-index: 10;
    margin-right: 300px;
    margin-top: 50px;

`;
const ArticleInfoTitle2 = styled(ArticleInfo2)`
    font-size: 40px;
    z-index: 10;
`;
const ArticleInfoAuthor2 = styled(ArticleInfo2)`
    color: white;
    font-size: 20px;
    z-index: 10;
`;
const Section = () => {

    return (
        <Container id = "section">
            <NavBar isSection/>
            <HeaderDiv><Header>UNIVERSITY</Header></HeaderDiv>
            <AllRectangles>
            <ArticleInfo1><ArticleInfoTitle1>This Article's Title
                </ArticleInfoTitle1><ArticleInfoAuthor1>By Some Person's Name</ArticleInfoAuthor1></ArticleInfo1>
                <View1>
                    <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk0OTA1OTY4ODg1MTE0Mzky/hero-crop-gettyimages-459534214.jpg" alt="Dr. King"></img>
                    </View1>
            <Rectangle1><LittleRectangle1/></Rectangle1>

                <ArticleInfo2><ArticleInfoTitle2>This Article's Title
                </ArticleInfoTitle2><ArticleInfoAuthor2>By Some Person's Name</ArticleInfoAuthor2></ArticleInfo2>
                <View2>
                    <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk0OTA1OTY4ODg1MTE0Mzky/hero-crop-gettyimages-459534214.jpg" alt="Dr. King"></img>
                </View2>
                <Rectangle2><View2/><LittleRectangle2/></Rectangle2>


                <ArticleInfo1><ArticleInfoTitle1>This Article's Title
                </ArticleInfoTitle1><ArticleInfoAuthor1>By Some Person's Name</ArticleInfoAuthor1></ArticleInfo1>
                <View1>
                    <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk0OTA1OTY4ODg1MTE0Mzky/hero-crop-gettyimages-459534214.jpg" alt="Dr. King"></img>
                    </View1>
            <Rectangle1><LittleRectangle1/></Rectangle1>
            

            <ArticleInfo2><ArticleInfoTitle2>This Article's Title
                </ArticleInfoTitle2><ArticleInfoAuthor2>By Some Person's Name</ArticleInfoAuthor2></ArticleInfo2>
                <View2>
                    <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk0OTA1OTY4ODg1MTE0Mzky/hero-crop-gettyimages-459534214.jpg" alt="Dr. King"></img>
                </View2>
                <Rectangle2><LittleRectangle2/></Rectangle2>
            </AllRectangles>
        </Container>
    );
};

export default Section;