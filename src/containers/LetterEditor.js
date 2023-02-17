import React from 'react';
import styled from 'styled-components';

const LetterWrapper = styled.div`
    padding:3rem 11rem 10rem 11rem; 
    
    @media only screen and (max-width: 768px){
        padding: 3rem 3rem 0rem 3rem;
    }
`;

const LetterEditor = () => {
    return (
        <LetterWrapper>
            <Title>Letter From The Editor ~</Title>
            <MobileTitle>Letter From The Editor</MobileTitle>
            
            <Text>
                <p>Every February, we celebrate Black History Month by coming together to highlight the voices, stories, and accomplishments of Black Americans and Black culture at Columbia and in West Harlem. We hope you’ll join us in this annual tradition with Spectator’s 2023 Black History Month edition. </p>
                <p> In this special issue, dive into the Black Residential Space Collective’s groundbreaking win of Columbia’s first residential building designated for Black students and how Law School professor Kimberlé Crenshaw is at the center of the national Advanced Placement African American History controversy. Explore the ways local West Harlem schools are piloting a Black studies curriculum program and how Columbia’s Irving Medical Center launched a diversity in clinical trials training program to address patient mistrust. Enjoy an archival dig into “Columbia Comet” Ben Johnson’s unparalleled athletic career at Columbia in the 1930s and a feature on the women’s basketball team’s dedication to supporting Black-women-owned local businesses. Hear from Candice Hoyes, Law ’04, whose musical work memorializes Zora Neale Hurston, BC 1928, and from Spectator’s own Colin Roedl, CC ’25, who in his op-ed emphasizes that “remaining silent about Black oppression is an act of violence.”</p>
                <p> We hope you come away from this edition with a better understanding of the crucial stories and long-overlooked contributions of Black Columbia affiliates and community members as we continue to take deep stock in the ways institutionalized anti-Blackness manifests itself in our daily lives—this month, and every month.</p>
                <p>All the very best,</p>
            </Text>
            <Signatures>
                <Signature className='left'><div className='name'>Irie Sentner</div><div className='title'>Editor in Chief</div></Signature>
                <Spacing/>
                <Signature><div className='name'>Andrew Park</div><div className='title'>Managing Editor</div></Signature>
            </Signatures>
        </LetterWrapper>
    );    
};

const Title = styled.div`
    color: white;
    font-family: 'Farro';
    font-style: normal;
    font-weight: 43.75rem;
    font-size: 3.125rem;
    line-height: 4rem;
    text-transform: capitalize;

    @media only screen and (max-width: 768px) {
        font-size: 1.88rem;
    }
  
    @media only screen and (max-width: 570px) {
        display: none;
    }

    @media only screen and (max-width: 400px) {
        padding: 0;
        font-size: 1.6rem;
        display: inline-block;
        display: none;
    }
`;

const MobileTitle = styled.div`
    
    color: white;
    font-family: 'Farro';
    font-style: normal;
    font-weight: 43.75rem;
    font-size: 3.125rem;
    line-height: 4rem;
    text-transform: capitalize;

    @media only screen and (max-width: 768px) {
        font-size: 1.88rem;
    }
  
    @media only screen and (min-width: 570px) {
        display: none;
    }
`;

const Text = styled.div`
    p{
    color: #EAF5FF;
    font-family: 'Khula';
    font-style: normal;
    font-weight: 25rem;
    font-size: 1.29rem;
    line-height: 2rem;
    
    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
    @media only screen and (max-width: 400px) {
        padding: 0;
        font-size: 0.9rem;
        display: inline-block;
    }
    }
`;

const Signatures = styled.div`
    font-family: 'Nothing You Could Do', cursive;
    font-weight: 25rem;
    font-size: 2.375rem;
    line-height: 3.188rem;
    
    @media only screen and (max-width: 768px){
        font-size: 1.88rem;
        text-align: left;
    }    
`;

const Spacing = styled.div`
    width: 8rem;
    height: 1.4rem;  
`;

const Signature = styled.div`
    .name {
        color: white;
        font-style: normal;
        font-weight: 25rem;
        font-size: 2.4rem;
        line-height: 3.188rem;
        text-transform: capitalize;
        text-align: left;
        
        @media only screen and (max-width: 768px) {
            font-size: 2rem;
            line-height: 3px;
            padding-top: 15px;
        }
       
    }
    .title {
        color: white;
        font-style: normal;
        font-family: Khula;
        font-weight: 25rem;
        font-size: 1.125rem;
        line-height: 1.813rem;
        margin: 0rem;

        @media only screen and (max-width: 768px){
            font-size: 1rem;
            display: inline-block;
        }
    }
    margin: 0rem;
`;

export default LetterEditor;