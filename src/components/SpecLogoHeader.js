import React from "react";
import styled from "styled-components";

const SpecLogo = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    padding-top: 3.813rem;
    margin-bottom: 1.75rem;
`;

const Image = styled.img`
    display: block;
    width: 24.375%;
    height: auto;
`;

const Line = styled.div`
    width: 93.75%;
    height: 0.063rem;
    background-color: white;
    margin-bottom: 3.75rem;
    align-self: center;
`;

const SpecLogoHeader = () => {
    return (
        <div>
            <SpecLogo><Image src="https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png" alt="Columbia Spectator logo" ></Image></SpecLogo>
            <Line></Line>
        </div>
    )
}

export default SpecLogoHeader;