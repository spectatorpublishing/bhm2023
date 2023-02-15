import React from "react"
import styled from "styled-components"

const MainImage2 = styled.div`
    height: 293px;
    position: absolute;
    margin-left: 260px;
    width: 387px;
    margin-top: -125px;
    background-position: center;
    background-size: cover;
    background-image: url(${props => props.src});
    z-index: 2;
    left: 25px;
    @media screen and (max-width: 768px) {
        display: none;
    } 
`;

const RightArticleWrapper = styled.div`
    background: #5F415B;
    width: 683px;
    height:356px;
    margin-top:60px;
    margin-left:-237px;
    margin-bottom: 25px;
    @media screen and (max-width: 768px) {
        display: none;
    } 
`;

const OffSetRectangle2 = styled.div`
    background: #70586D;
    position: absolute;
    height: 293px;
    width: 387px;
    left: 375px;
    top: -50px;
    margin-top: 13px;
    z-index: 1;
    @media screen and (max-width: 768px) {
        display: none;
    } 
`;

const Column2 = styled.div`
    width: 35%;
    background-color: #5F415B;
    border-color: #5F415B;
    border: 2px;
    position: relative;
    border-radius: 0px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const ArticleInfo2 = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'EB Garamond';
    text-transform: capitalize;
    font-style: normal;
    font-weight: 600;
    position: relative;
    color: white;
    margin-left: -50px;
    margin-top: px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const ArticleTitle2 = styled(ArticleInfo2)`
    font-size: 40px;
    margin-top: 0px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const ArticleAuthor2 = styled(ArticleInfo2)`
    font-size: 16px;
    margin-top: 0px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const RightArticle = ({ article }) => {
    return (
        <RightArticleWrapper>
            <Column2>
                <ArticleInfo2>
                    <ArticleTitle2>{article.article_title}</ArticleTitle2>
                    <ArticleAuthor2>By {article.article_authors}</ArticleAuthor2>
                </ArticleInfo2>
            </Column2>
            <Column2>
                <MainImage2 src={article.image_url}></MainImage2>
                <OffSetRectangle2></OffSetRectangle2>
            </Column2>

        </RightArticleWrapper>
    )
}

export default RightArticle;