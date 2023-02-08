import React, {useState} from 'react';
import styled from 'styled-components';
import {sections} from '../data/sections';

const NavWrapper = styled.div`
`;

const VertNav = styled.div`
    position: absolute;
    right: 5.5vw;
    top:190px;
    z-index:100;
    padding:1rem 0rem;
`;

const Tab = styled.a`
    display:block;
    text-align:right;
    padding:  0.75rem 1rem 0.75rem 1.5rem;
    color: ${props => props.current ? 'rgba(248, 190, 185, 1)' : 'white'};
    font-weight: ${props => props.current ? 800 : 400};
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
    margin-right:2rem;
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

const NavBar = () => {
    const [current, setCurrent] = useState("/#");
    return(
        <NavWrapper>
            <VertNav>
            {sections.map((section, index) => (
                <Tab current = {current == section.url} onClick = {()=>setCurrent(section.url)} key={index}>
                     <Bullet></Bullet> <NavText>{section.title} {current==section.url}</NavText>  
                </Tab>
            ))}
            </VertNav>
        </NavWrapper>
    );
};

export default NavBar;