import styled from 'styled-components';
import { getColor } from 'js/utils/themeUtils';

const FooterWrapper = styled.div`
    heigth: 400px;
    background-color: ${getColor('grey', '800')}
`;

export default {
    FooterWrapper
}