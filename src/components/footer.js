import styled from 'styled-components';

const Footer = () => {
    return(
        <FooterContainer>FOOTER</FooterContainer>
    );
}

const FooterContainer = styled.footer`
    display: flex;
    align-self: flex-end;
    width: 100%;
    height: 200px;
    background-color: #2B2220;
    padding: 16px;
    box-sizing: border-box;
    color: white;
`;

export default Footer;