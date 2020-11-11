import styled from 'styled-components';
import Icon from 'js/components/Icon'
import { getColor } from 'js/utils/themeUtils';

const HeaderWrapper = styled.div`
    align-items: center;
    background-color: ${getColor('grey', '800')};
    display: flex;
    height: 100px;
`;

const TopSideBar = styled.div`
    color: ${getColor('common', 'white')};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
`;

const Logo = styled.img`
    background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vhv.rs%2Fviewpic%2FTiTwiJo_logo-ninja-gamer-gaming-freetoedit-ninja-gaming-logo%2F&psig=AOvVaw0Hr78fU4aM3agfZRqN9IF0&ust=1604943152924000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIj13qe98-wCFQAAAAAdAAAAABAD')
`;


const Nav = styled.nav``;

const NavLinks = styled.a`
    color: ${getColor('common', 'white')};
    margin: 5px;
    text-decoration: none;
`;

const Login = styled.div``;

const LogIcon = styled(Icon)`
    padding-left: 10px;
    fill: ${getColor('common', 'white')};
`;

export default {
    HeaderWrapper,
    Logo,
    Nav,
    NavLinks,
    Login,
    TopSideBar,
    LogIcon
}