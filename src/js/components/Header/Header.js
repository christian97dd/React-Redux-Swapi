import React, { useEffect } from 'react';
import styled from './styled';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPeople } from 'js/redux/SearchParam/api.js'

const Header = ({ fetchPeople, personName, isLoading }) => {
    useEffect(() => {
        fetchPeople();
    }, []);

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
                    {isLoading && <>Loading</>}
                    {personName}
                    <styled.LogIcon name="user" />
                </styled.Login>
            </styled.TopSideBar>
        </styled.HeaderWrapper>
    );
};

const mapStateToProps = state => {
    return {
        personName: state.SearchParam.people.name,
        isLoading: state.SearchParam.isLoading,
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPeople,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Header);
