import css from './../styles/index.scss';
const skillHeroObj = require('./../static/data/skill.json');

import React, { Component } from 'react';

export default class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = { skillHero: 1 };
    }

    render() {
        return (
            <div id={css.frame_container}>
                <div id={css.frame}>
                    <i className={css.beam} />
                    <i className={css.beam} />
                    <i className={css.beam} />
                    <i className={css.beam} />
                    <i className={css.beam} />
                    <div className={css.detailHero}>
                        <h1
                            className={css.myname}
                            onMouseOver={this.activateFrame.bind(this)}
                            onMouseOut={this.deactivateFrame.bind(this)}
                        >
                            Abhishek Mittal
                        </h1>
                        <h3>Programmer, Developer and Designer.</h3>
                    </div>
                    {/* {document.querySelector('#frame.myname')} */}
                </div>
                <div id={css.hero_circle} title="Ziet: 95%">
                    <span className={css.hero_separator} />
                    <div className={css.hero_circle_img} />
                </div>
            </div>
        );
    }

    activateFrame() {
        document.querySelectorAll('#frame > i.beam').forEach(e => {
            if (e) {
                e.classList.add('mynameActive');
                console.log(e);
            }
        });

        console.log('skillhero', skillHeroObj);
        // let skillHero = [{ PosX: -20, skillLevel: 50, skill: 'typescript' }];

        let skillHeroPosX = skillHeroObj.map(e => e.PosX);

        let { skillHero } = this.state;
        skillHero = setInterval(() => {
            let randNo = Math.floor(Math.random() * skillHeroPosX.length);
            var randPosX = skillHeroPosX[randNo];
            let skillL = skillHeroObj[randNo].skillLevel;
            let skillN = skillHeroObj[randNo].skill;

            // Changing Levels
            let levelCtx = document.getElementById('hero_circle');
            levelCtx &&
                (levelCtx.style.backgroundImage = `linear-gradient(to top right, #66ffcc ${
                    skillL < 50 ? (50 - skillL) * 2 : -((skillL - 50) * 2)
                }%, #003366 100%)`);
            levelCtx.title = `${skillN}: ${skillL}%`;
            // levelCtx = 'blue';
            var ctx = (document.querySelector(
                '#hero_circle > .hero_circle_img'
            ).style.backgroundPositionX = `${randPosX}px`);
            console.log(ctx);
        }, 2500);

        this.setState({ skillHero: skillHero });
    }

    deactivateFrame() {
        document.querySelectorAll('#frame > i.beam').forEach(e => {
            if (e) {
                e.classList.remove('mynameActive');
                console.log(e);
            }
        });
        // console.log('skillHero;', props.skillHero);
        clearInterval(this.state.skillHero);
        console.log('ctx');
    }
}
