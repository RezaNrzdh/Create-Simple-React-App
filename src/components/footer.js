import styled from 'styled-components';

const Footer = () => {
    return(
        <FooterCointaner>FOOTER</FooterCointaner>
    );
}

const FooterCointaner = styled.footer`
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