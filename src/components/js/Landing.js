import React from 'react';
import '../css/Landing.css';
import MainContainer from './MainContainer';
import { TweenMax } from 'gsap';

export default class Landing extends React.Component{

    componentDidMount(){
        // Effect to nav tag in MainContainer
        TweenMax.to("nav", 2, {
            delay: 6.6,
            opacity: 1
        });
      
        // Effect to nav ul li a tag in MainContainer
        TweenMax.to("nav ul li a", 2, {
            delay: 6.6,
            cursor: "pointer"
        });

        // TweenMax.to(".landing-pic", 1, {
        //     delay: 7.5,
        //     opacity: 1
        // });

        // TweenMax.to(".landing-label-width-yellow", 1, {
        //     delay : 8,
        //     width: "70%",
        //     height: "35%",
        //     opacity: 1
        // });

        TweenMax.to(".text1", 1, {
            delay: 7.5,
            opacity: 1
        });

        TweenMax.to(".front-f", .3, {opacity: 1, delay : 7.7});
        TweenMax.to(".front-r", .3, {opacity: 1, delay : 7.9});
        TweenMax.to(".front-o", .3, {opacity: 1, delay : 8.1});
        TweenMax.to(".front-n", .3, {opacity: 1, delay : 8.3});
        TweenMax.to(".front-t", .3, {opacity: 1, delay : 8.5});

        TweenMax.to(".text2", 1, {
            delay: 9,
            opacity: 1
        });

        TweenMax.to(".developer-w", .3, {opacity: 1, delay : 9.5});
        TweenMax.to(".developer-e", .3, {opacity: 1, delay : 10});
        TweenMax.to(".developer-b", .3, {opacity: 1, delay : 10.1});
        TweenMax.to(".developer-d", .3, {opacity: 1, delay : 9.5});
        TweenMax.to(".developer-ee", .3, {opacity: 1, delay : 10.2});
        TweenMax.to(".developer-v", .3, {opacity: 1, delay : 10.3});
        TweenMax.to(".developer-eee", .3, {opacity: 1, delay : 10.4});
        TweenMax.to(".developer-l", .3, {opacity: 1, delay : 10.5});
        TweenMax.to(".developer-o", .3, {opacity: 1, delay : 10.6});
        TweenMax.to(".developer-p", .3, {opacity: 1, delay : 10.7});
        TweenMax.to(".developer-eeee", .3, {opacity: 1, delay : 10.8});
        TweenMax.to(".developer-r", .3, {opacity: 1, delay : 10.9});

        TweenMax.to(".text1", .8, {
            delay: 11.5,
            x: 50
        });

        TweenMax.to(".text2", .8, {
            delay: 11.5,
            x: 90,
            textShadow: "5px 5px 10px darkgray"
        });

        TweenMax.to(".rev-block", 1, {

        });
    }

    render(){
        return(
            <MainContainer>
                <div className="temp">

                </div>
                <div className="first-block">

                </div>
                <div className="second-block">

                </div>
                <div className="loader">
                    <ul>
                        <li>S</li>
                        <li>U</li>
                        <li>N</li>
                        <li>G</li>
                        <li>J</li>
                        <li>U</li>
                        <li>N</li>
                    </ul>
                </div>
                <div className="content-outside">
                    <div className="content-inside">
                        <div className="text1">
                            <span className="front-f">F</span>
                            <span className="front-r">R</span>
                            <span className="front-o">O</span>
                            <span className="front-n">N</span>
                            <span className="front-t">T</span>
                        </div>
                        <div className="text2">
                            <span className="developer-w">W</span>
                            <span className="developer-e">e</span>
                            <span className="developer-b">b</span>
                            &nbsp;&nbsp;
                            <span className="developer-d">D</span>
                            <span className="developer-ee">e</span>
                            <span className="developer-v">v</span>
                            <span className="developer-eee">e</span>
                            <span className="developer-l">l</span>
                            <span className="developer-o">o</span>
                            <span className="developer-p">p</span>
                            <span className="developer-eeee">e</span>
                            <span className="developer-r">r</span>
                        </div>
                        <div className="rev-block">
                            <span>Sungjun Hong</span>
                        </div>
                    </div>
                </div>
                
                {/* <div className="landing-label-width-yellow">

                </div> */}
                {/* <div className="landing-pic">
                    
                </div> */}
            </MainContainer>
        )
    }
}