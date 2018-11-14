import React from 'react';
import App, { Container } from 'next/app';

import styled from 'styled-components';
import Layout from './../components/PortfolioLayout';
// import { native } from './../.next/static/development/pages/index';

export default class MyApp extends App {
    state = {
        routeNav: [
            // { ref: 'left', path: '/portfolio', active: true },
            // { ref: 'right', path: '/post', active: true },
            { ref: 'top', path: '/about', active: true },
            { ref: 'bottom', path: '/', active: true }
        ]
    };

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    componentWillMount = () => {
        let { routeNav } = this.state;
        this.setNavigators(routeNav);
    };
    componentWillUpdate = () => {
        let { routeNav } = this.state;
        console.log('component is: ', this);
        this.setNavigators(routeNav);
    };

    setNavigators = routeNav => {
        routeNav.map(link => {
            link.path == this.props.router.route
                ? (link.active = false)
                : (link.active = true);
            return link;
        });
    };

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Positioner>
                    <Layout routeNav={this.state.routeNav}>
                        <Component {...pageProps} />
                    </Layout>
                </Positioner>
            </Container>
        );
    }
}

const Positioner = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
