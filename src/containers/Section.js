import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const SectionWrapper = styled.div`
     height: 100vh;
     width: 100vw;
     background: linear-gradient(#5F193E, #3F132e, #1D132b); 
     background: linear-gradient(180deg, #661949 0%, #10071D 100%), #3F132E;
`;

const Section = () => {

    return (
        <SectionWrapper>
            <NavBar isSection/>
        </SectionWrapper>
    );
};

export default Section;