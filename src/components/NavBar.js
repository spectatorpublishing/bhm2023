import React, {useState} from 'react';
import styled from 'styled-components';
import {sections} from '../data/sections';
import { NavHashLink } from 'react-router-hash-link';

const NavWrapper = styled.div`
    a {
        text-decoration: none;
    }
    @media only screen and (max-width: 1023px){
        display: none;
    }
`;

const VertNav = styled.div`
    right: 5.5vw;
    top:190px;
    z-index:100;
    padding:1rem 0rem;
    background-color: ${props => props.isSection ? 'rgba(99, 55, 84, 1)' : 'transparent'};
    border-radius: ${props => props.isSection ? '25px' : 'none'};
    box-shadow: ${props => props.isSection ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' : 'none'};
    position: ${props => props.isSection ? 'absolute' : 'absolute'};
    margin-right: 0.1rem;
    padding-right: 1.2rem;
`;

const Tab = styled.a`
    display:block;
    text-align:right;
    padding:  0.75rem 1rem 0.75rem 1.5rem;
    color: ${props => props.currentSection ? '#F8BEB9' : 'white'};
    font-weight: ${props => props.currentSection ? 700 : 400};
    div {
        width: 10rem;
        font-size:15px;
    }
    :hover {
        color: #F8BEB9;
        cursor:pointer;
    }
`;

const NavText = styled.div`
    font-style: normal;
    margin-right:1.5rem;
    text-transform: uppercase;
`;

const Bullet = styled.span`
    position:absolute;
    width: 7px;
    height: 7px;
    background-color: #EAD1D1;
    border-radius: 50%;
    margin-top: 0.38rem;
`


const NavBar = ({isSection}) => {
    const [currentSection, setSection] = useState("/");
    return(
        <NavWrapper>
            <VertNav isSection={isSection}>
            {sections.map((section, index) => (
                <NavHashLink smooth to={section.url}>
                    <Tab currentSection = {currentSection == section.url} onClick = {() => setSection(section.url)} key={index}>
                        <Bullet></Bullet><NavText>{section.title} {currentSection==section.url}</NavText>  
                    </Tab>
                </NavHashLink>
            ))}
            </VertNav>
        </NavWrapper>
        
    );
};

export default NavBar;