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

        TweenMax.to(".landing-pic", 1, {
            delay: 7.5,
            opacity: 1
        });

        // TweenMax.to(".landing-label-width-yellow", 1, {
        //     delay : 8,
        //     width: "70%",
        //     height: "35%",
        //     opacity: 1
        // });

        TweenMax.to(".text1", 1, {
            delay: 8.4,
            opacity: 1
        });

        TweenMax.to(".junior-j", .3, {opacity: 1, delay : 8.5});
        TweenMax.to(".junior-u", .3, {opacity: 1, delay : 8.9});
        TweenMax.to(".junior-n", .3, {opacity: 1, delay : 9.1});
        TweenMax.to(".junior-i", .3, {opacity: 1, delay : 9.3});
        TweenMax.to(".junior-o", .3, {opacity: 1, delay : 9.5});
        TweenMax.to(".junior-r", .3, {opacity: 1, delay : 8.5});

        TweenMax.to(".text2", 1, {
            delay: 9.9,
            opacity: 1
        });

        TweenMax.to(".developer-w", .3, {opacity: 1, delay : 10});
        TweenMax.to(".developer-e", .3, {opacity: 1, delay : 10.4});
        TweenMax.to(".developer-b", .3, {opacity: 1, delay : 10.5});
        TweenMax.to(".developer-d", .3, {opacity: 1, delay : 10});
        TweenMax.to(".developer-ee", .3, {opacity: 1, delay : 10.6});
        TweenMax.to(".developer-v", .3, {opacity: 1, delay : 10.7});
        TweenMax.to(".developer-eee", .3, {opacity: 1, delay : 10.8});
        TweenMax.to(".developer-l", .3, {opacity: 1, delay : 10.9});
        TweenMax.to(".developer-o", .3, {opacity: 1, delay : 11});
        TweenMax.to(".developer-p", .3, {opacity: 1, delay : 11.1});
        TweenMax.to(".developer-eeee", .3, {opacity: 1, delay : 11.2});
        TweenMax.to(".developer-r", .3, {opacity: 1, delay : 11.3});

        TweenMax.to(".text1", .8, {
            delay: 12,
            x: 50
        });

        TweenMax.to(".text2", .8, {
            delay: 12,
            x: 100,
            textShadow: "5px 5px 10px darkgray"
        });
    }

    render(){
        return(
            <MainContainer>
                <div className="temp"></div>
                    <div className="first-block"></div>
                    <div className="second-block"></div>
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
                                <span className="junior-j">J</span>
                                <span className="junior-u">U</span>
                                <span className="junior-n">N</span>
                                <span className="junior-i">I</span>
                                <span className="junior-o">O</span>
                                <span className="junior-r">R</span>
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
                        </div>
                    </div>
                    {/* <div className="landing-label-width-yellow">

                    </div> */}
                    <div className="landing-pic">
                        
                    </div>
            </MainContainer>
        )
    }
}