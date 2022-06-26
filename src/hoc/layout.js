import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styled from 'styled-components';

const Layout = (props) => {
    return(
        <React.Fragment>
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </React.Fragment>
    );
}

const Container = styled.div`
    margin: 0 16px;
`;

export default Layout;