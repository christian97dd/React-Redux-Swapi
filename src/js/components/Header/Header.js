import React from 'react';
import styled from './styled';

const Header = () => {
    return (
        <styled.HeaderWrapper>
            <styled.TopSideBar>
                <styled.Logo />
                <styled.Nav>
                    <styled.NavLinks href="#">Inicio</styled.NavLinks>
                    <styled.NavLinks href="#">About</styled.NavLinks>
                    <styled.NavLinks href="#">Media</styled.NavLinks>
                </styled.Nav>
                <styled.Login>
                    Log In
                    <styled.LogIcon name="user" />
                </styled.Login>
            </styled.TopSideBar>
        </styled.HeaderWrapper>
    );
};

export default Header;
