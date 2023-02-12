import React from 'react';
import styled from 'styled-components';
import './MobileNavigation.css';
import {sections} from '../data/sections';

const UL = styled.ul` 
    justify-content: right;
    direction: rtl
    direction: ltr; unicode-bidi: embed;
    color: #EAD1D1;
    width: 85%;
`;
const NavWrap = styled.div`
    display: flex;
    width: 15%;
    margin-left: 82%;
    padding: 1%;
    padding-right: 1%;
    text-align: right;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 32px;
    background-color: #92718A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: #F8BEB9;
`;
const Button = styled.button`
    font-size: 20px;
    padding: 1%;
    color: white;
    background-color: #92718A;
    border: 0px;
    border-radius: 3px;
    &:hover{
        color: #F8BEB9;
        cursor:pointer;
        font-weight: bold;
    } 
`;
const MobileNavBar = () => {
    return (
    <NavWrap>
  
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
            </style>
           
            <UL dir ='rtl'>
                <li><a href ="https://www.columbiaspectator.com/"><Button>HOME</Button></a></li>
                <li><a href ="https://www.columbiaspectator.com/news/"><Button>UNIVERSITY</Button></a></li>
                <li><a href ="https://www.columbiaspectator.com/city-news/"><Button>CITY</Button></a></li>
                <li><a href ="https://www.columbiaspectator.com/opinion/"><Button>OPINION</Button></a></li>
                <li><a href ="https://www.columbiaspectator.com/arts-and-culture/"><Button>A&C</Button></a></li>
                <li><a href ="https://www.columbiaspectator.com/sports/"><Button>SPORTS</Button></a></li>
            </UL>
        </NavWrap>     
    );
};
export default MobileNavBar;