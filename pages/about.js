import React, { Fragment } from 'react';
import { Transition, Spring, Trail } from 'react-spring';
import { Parallax, ParallaxLayer } from 'react-spring';

import css from './../styles/about.scss';

const InfoPages = (props, state) => {
    const { offset, onClick, brandings, title, caption } = props;
    return (
        <Fragment key={`infopage_${offset}`}>
            <Parallax.Layer
                key={`infosub1_${offset}`}
                style={{ zIndex: -22 }}
                offset={offset}
                speed={-0.1}
                onClick={onClick}
            >
                <div className={css[brandings]} />
            </Parallax.Layer>
            <Parallax.Layer
                key={`infosub2_${offset}`}
                offset={offset}
                speed={0}
                onClick={onClick}
            >
                <span className={css.about_page}>
                    <h1 className="fadeIn animated">{title}</h1>

                    {caption}
                </span>
            </Parallax.Layer>
        </Fragment>
    );
};

const abouts = [
    {
        offset: 0,
        title: 'About Me',
        caption: (
            <>
                <p className="fadeInUp animated">
                    I'm Abhishek Mittal, a developer, programmer and JavaScript
                    Enthusiast, with over two years of experience. Tony Stark is
                    the source of my knowledge and all the adventure in me comes
                    from Han Solo.
                </p>
                <p className="fadeInUp animated">
                    I graduated from{' '}
                    <a href="https://www.lpu.in" target="_blank">
                        {' '}
                        Lovely Professional Univesrity{' '}
                    </a>{' '}
                    Computer Science School in August 2018 with B.Tech in
                    Computer Science Engineering and minors in Psychology.
                </p>
                <p className="fadeInUp animated">
                    I’m always open to exciting new job opportunities, with my
                    Curriculum Vitae available on request. Please{' '}
                    <a
                        href="mailto:abhishekmittaloffice@gmail.com"
                        onClick={() => {
                            return false;
                        }}
                    >
                        <span>get in touch</span>
                    </a>
                    , it would be great to hear from you.
                </p>
            </>
        ),
        sv: 1
    },
    {
        offset: 1,
        title: 'Experience',
        caption: (
            <Parallax
                className={css.experience_holder}
                horizontal={false}
                pages={2}
                onAnimationEnd={e => {
                    console.log('hello: ', e);
                }}
            >
                <Fragment key={`experience_ta`}>
                    <ParallaxLayer offset={0} style={{ opacity: 1 }}>
                        <div className={`${css.experience} fadeInUp animated`}>
                            <img
                                className={css.company_image}
                                src="./../static/images/venturepact.png"
                            />
                            <p>
                                Looorem sint occaecat quis proident
                                reprehenderit pariatur exercitation anim sunt.
                                Occaecat culpa veniam consequat non ut irure
                                voluptate elit. Cillum veniam officia consequat
                                eu ex sint ullamco sunt labore ut mollit
                                pariatur sint. In officia eiusmod laborum Lorem
                                sint magna commodo laborum fugiat eiusmod.
                                Consequat aliquip nostrud reprehenderit commodo
                                nulla commodo nostrud nisi reprehenderit velit
                                sit anim aliquip culpa. Incididunt aliquip duis
                                cupidatat non ullamco enim officia elit in amet
                                est laboris. Voluptate consectetur veniam irure
                                eu tempor. Deserunt aliquip fugiat eu sit
                                deserunt ea excepteur ex laborum officia
                                adipisicing reprehenderit cupidatat dolore.
                                Magna commodo cupidatat eiusmod excepteur
                                deserunt occaecat do deserunt. Proident nulla
                                aute laboris deserunt aute magna mollit laborum
                                occaecat veniam sit occaecat proident. Aliquip
                                enim elit reprehenderit anim aliquip dolore
                                incididunt magna cupidatat anim officia pariatur
                                ea. Consequat commodo ipsum aliqua cupidatat.
                                Dolore ipsum qui amet quis occaecat eiusmod
                                occaecat ullamco eiusmod do aliquip nulla. Ea
                                dolor adipisicing pariatur ex nulla cillum.
                            </p>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} style={{ opacity: 1 }}>
                        <div className={`${css.experience} fadeInUp animated`}>
                            <img
                                className={css.company_image}
                                src="./../static/images/venturepact.png"
                            />
                            <p>
                                Lorem sint occaecat quis proident reprehenderit
                                pariatur exercitation anim sunt. Occaecat culpa
                                veniam consequat non ut irure voluptate elit.
                                Cillum veniam officia consequat eu ex sint
                                ullamco sunt labore ut mollit pariatur sint. In
                                officia eiusmod laborum Lorem sint magna commodo
                                laborum fugiat eiusmod. Consequat aliquip
                                nostrud reprehenderit commodo nulla commodo
                                nostrud nisi reprehenderit velit sit anim
                                aliquip culpa. Incididunt aliquip duis cupidatat
                                non ullamco enim officia elit in amet est
                                laboris. Voluptate consectetur veniam irure eu
                                tempor. Deserunt aliquip fugiat eu sit deserunt
                                ea excepteur ex laborum officia adipisicing
                                reprehenderit cupidatat dolore. Magna commodo
                                cupidatat eiusmod excepteur deserunt occaecat do
                                deserunt. Proident nulla aute laboris deserunt
                                aute magna mollit laborum occaecat veniam sit
                                occaecat proident. Aliquip enim elit
                                reprehenderit anim aliquip dolore incididunt
                                magna cupidatat anim officia pariatur ea.
                                Consequat commodo ipsum aliqua cupidatat. Dolore
                                ipsum qui amet quis occaecat eiusmod occaecat
                                ullamco eiusmod do aliquip nulla. Ea dolor
                                adipisicing pariatur ex nulla cillum.
                            </p>
                        </div>
                    </ParallaxLayer>
                </Fragment>
            </Parallax>
        ),
        sv: 0,
        brandings: 'branding'
    }
];

class AboutPage extends React.Component {
    scroll = to => this.refs.parallax.scrollTo(to);

    constructor(props) {
        super(props);
        this.state = {
            resetExpSpring: Boolean
        };
    }

    render() {
        return (
            <section id="about_page">
                <Parallax
                    key="about_page_prll"
                    className="container"
                    ref="parallax"
                    pages={2}
                    horizontal
                    scrolling={false}
                >
                    {abouts.map(e => (
                        <InfoPages
                            {...this.state}
                            {...e}
                            onClick={() => this.scroll(e.sv)}
                        />
                    ))}
                </Parallax>
            </section>
        );
        // <Transition
        //     from={{ transform: { translateY: 0 }, opacity: 0, height: 0 }}
        //     enter={{
        //         transform: { translateY: 200 },
        //         opacity: 1,
        //         height: 100
        //     }}
        //     leave={{ transform: { translateY: 0 }, opacity: 0, height: 0 }}
        // >
        //     {styles => <staticCTX styles={styles} />}
        // </Transition>
    }
}

export default AboutPage;
