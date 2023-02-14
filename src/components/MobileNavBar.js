import React, {useState} from 'react';
import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import {sections} from '../data/sections';


const NavWrap = styled.div`
    color: white;
    position: absolute;
    top: 3rem;
    right: 0rem;
    a {
        text-decoration: none;
    }
    @media only screen and (max-width: 1023px){
    display: flex;
    flex-direction: row;
    }
`;

const MobileNav = styled.div`
    display: none;
    padding: 0.25rem;
    @media only screen and (max-width: 1023px){
        display: flex;
        flex-direction: row;
    }
`;

const MobileMenu = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    margin: 2rem 1rem 1rem 1rem;
    border-radius: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
    text-align: right;
    background-color: #92718A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #F8BEB9;
    @media only screen and (max-width: 1023px){
        display: flex;
        flex-direction: column;
    }
`;

const MobileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0 30px 0;
`;

const MenuIcon = styled.div`
    margin-left: auto;
    margin-right:0.5rem;
    display: flex;
    color: ${props => props.color};
    .menu {
        font-size: 30px;
    }
`;

const Link = styled.a`
    font-size: 18px;
    padding-left: 50px;
    margin-right: 35px;
    color: white;
    background-color: #92718A;
    border: 0px;
    border-radius: 20px;
    &:hover{
         color: #F8BEB9;
         cursor:pointer;
         font-weight: bold;
    }
`;

const NavText = styled.div`
    display: inline;
    margin-right: 10px;
    font-style: normal;
    text-transform: uppercase;
`;

const Bullet = styled.span`
    position:absolute;
    width: 5px;
    height: 5px;
    background-color: #EAD1D1;
    border-radius: 50%;
    margin-top: .8rem;
`;

const MobileNavBar = () => {
    const [currentSection, setSection] = useState("/");
    const [show, setToggle] = useState(false);

    return (
        <NavWrap>
            <MobileNav>
                <MenuIcon>
                    <IconContext.Provider value={{ className: 'menu' }} >
                        {show ? <MdClose onClick={() => setToggle(!show)} /> : <GiHamburgerMenu onClick={() => setToggle(!show)} />}
                    </IconContext.Provider>
                </MenuIcon>
            </MobileNav>
            <MobileMenu>
                <MobileWrapper>
                    {sections.map((section, index) => {
                        return (
                            <>
                                {(show) ?
                                    <NavHashLink smooth to={section.url} style={{marginTop: '6px'}}>
                                        <Link currentSection = {currentSection == section.url} onClick={() => setSection(section.url)} key={index}>
                                            <NavText>{section.title}</NavText><Bullet></Bullet>
                                        </Link>
                                    </NavHashLink> : null}
                            </>
                        )
                    })}
                </MobileWrapper>
            </MobileMenu>
        </NavWrap>
    );
};

export default MobileNavBar;