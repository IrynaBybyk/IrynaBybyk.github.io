import React from 'react';
import PersonalInfo from './PersonalInfo';
import LeftSideStyled from './styled/LeftSideStyled';

const LeftSide = () => {

    return (
        <LeftSideStyled>
            <PersonalInfo />           
        </LeftSideStyled>
    )
}

export default LeftSide;