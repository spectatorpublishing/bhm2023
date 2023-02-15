import React from "react";
import styled from "styled-components";

const Rectangle = styled.div`
  height: 100%;
  width: 100%;
  margin: 15px;
`;

const LeftArticleWrapper = styled(Rectangle)`
    display: flex;
    background-color: #7A5470;
    height: 526px;
    width: 887px;
    left: 0px;
    top: 0px;
    margin: 10px;
    margin-left: -275px;
    z-index: 1;
    @media screen and (max-width: 768px) {
        height: 182px;
        width: 300px;
        justify-content: center;
        margin-left: 0px;
    }
`;

const Column1 = styled.div`
    width: 50%;
    background-color: #7A5470;
    border: 2px #7A5470;
    position: relative;
    border-color: #7A5470;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const MainImage1 = styled.div`
    height: 55%;
    position: absolute;
    width: 350px;
    background-position: center;
    background-size: cover;
    background-image: url(${props => props.src});
    z-index: 2;
    margin-top: 50px;
    left: 25px;
    @media screen and (max-width: 768px) {
        height: 103.80228424072266px;
        width: 70%;
        left: 7.658203125px;
        top: 23.1826171875px; 
        margin-top: 0px;
        margin-left: 20px;
    }
`;

const OffSetRectangle1 = styled.div`
    background: #907388;
    height: 55%;
    position: absolute;
    width: 350px;
    z-index: 1;
    margin-left: 100px;
    top: 150px;
    @media screen and (max-width: 768px) {
            height: 101.38021850585938px;
            width: 123.5020751953125px;
            left: 40.84765625px;
            top: 55.01513671875px;
            margin-top: 5px;
            margin-left: 20px;
    } 
`;

const ArticleInfo1 = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'EB Garamond';
    text-transform: capitalize;
    font-style: normal;
    font-weight: 600;
    color: white;
    width: fit-content;
    margin-right: 100px;
    margin-bottom: 0px;
    margin-top: 30px;
    margin-left: -15px;
    @media screen and (max-width: 768px) {
        margin-right: -600px;
        position: relative;
        margin-top: 10px;
        margin-left: 0px;
    }
`;

const ArticleTitle1 = styled(ArticleInfo1)`
    font-size: 40px;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

const ArticleAuthor1 = styled(ArticleInfo1)`
    font-size: 16px;
    margin-top: 0px;
    @media screen and (max-width: 768px) {
        font-size: 8px;
        margin-top: 0px;
    }
`;

const LeftArticle = ({ article }) => {
    return (
        <LeftArticleWrapper>
            <Column1>
                <MainImage1 src={article.image_url}></MainImage1>
                <OffSetRectangle1></OffSetRectangle1>
            </Column1>
            <Column1>
                <ArticleInfo1>
                    <ArticleTitle1>{article.article_title}</ArticleTitle1>
                    <ArticleAuthor1>By {article.article_authors}</ArticleAuthor1>
                </ArticleInfo1>
            </Column1>
        </LeftArticleWrapper>
    );
}

export default LeftArticle;