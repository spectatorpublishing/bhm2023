import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';

const SectionWrapper = styled.div`
     height: 100vh;
     width: 100vw;
     background: linear-gradient(180deg, #945F80 0%, #10071D 100%), #3F132E;
`;

const Section = ({header}) => {
    return (
        <SectionWrapper>
            <NavBar isSection/>
            <MobileNavBar/>
            {header}
        </SectionWrapper>
    );
};

export default Section;