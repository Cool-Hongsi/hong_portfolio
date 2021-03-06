import React from 'react';
import '../css/Skill.css';
import MainContainer from './MainContainer';
import { TweenMax } from 'gsap';
import { Container, Row, Col } from 'reactstrap';
import frontendImage from '../image/monitor.jpg';
import backendImage from '../image/server.png';
import etcImage from '../image/etc.png';

export default class Skill extends React.Component{

    componentDidMount(){

        TweenMax.to(".skill-show-outside", 1, {
            delay: 3.8,
            display: "none"
        });

        // Effect to nav tag in MainContainer
        TweenMax.to("nav", 2, {
            delay: 4.5,
            opacity: 1
        });
        
        // Effect to nav ul li a tag in MainContainer
        TweenMax.to("nav ul li a", 2, {
            delay: 4.5,
            cursor: "pointer"
        });

        TweenMax.to(".skill-outside-frontend", 2, {
            delay: 5.5,
            display: "block",
            opacity: 1
        });

        TweenMax.to(".skill-outside-backend", 2, {
            delay: 6,
            display: "block",
            opacity: 1
        });

        TweenMax.to(".skill-outside-etc", 2, {
            delay: 6.5,
            display: "block",
            opacity: 1
        });
    }

    render(){
        return(
            <MainContainer>

                <div className="skill-show-outside">
                    <div className="skill-show-inside">
                        What I Have ?
                    </div>
                </div>

                <div className="skill-outside-frontend">
                    <div className="skill-inside-frontend">
                        <Container>
                            <Row>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    {/* <div data-aos="fade-up" className="left"> */}
                                    <div className="left">
                                        <div className="front-main-title">
                                            Frontend
                                        </div>
                                        <img className="frontendImage" src={frontendImage} alt="frontendImage"/>
                                    </div>
                                </Col>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    {/* <div data-aos="fade-up" className="right"> */}
                                    <div className="right">
                                        <p className="front-title">HTML , CSS</p>
                                        <span className="front-content">Bootstrap | Responsive (Grid, Media Query)<br/>Cross Browser | SCSS Preprocessor</span>
                                        <hr/>
                                        <p className="front-title">Javascript</p>
                                        <span className="front-content">ES6, 7 | DOM | JSON | Integrate Third Party API</span>
                                        <hr/>
                                        <p className="front-title">ReactJS</p>
                                        <span className="front-content">React Hook | Axios | Router | LifeCycle | REST API<br/>SPA | Redux (with Saga)</span>
                                        <hr/>
                                        <p className="front-title">Mobile</p>
                                        <span className="front-content">Flutter | React Native</span>                                        
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

                <div className="skill-outside-backend">
                    <div className="skill-inside-backend">
                        <Container>
                            <Row>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    {/* <div data-aos="fade-up" className="left"> */}
                                    <div className="left">
                                        <div className="back-main-title">
                                            Backend
                                        </div>
                                        <img className="backendImage" src={backendImage} alt="backendImage"/>
                                    </div>
                                </Col>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    {/* <div data-aos="fade-up" className="right"> */}
                                    <div className="right">
                                        <p className="back-title">NodeJS</p>
                                        <span className="back-content">Express | MVC Design | REST API<br/>Socket.io | Asyn (Promise) | Combine DB</span>
                                        <hr/>
                                        <p className="back-title">Firebase</p>
                                        <span className="back-content">Auth with OAuth<br/></span>
                                        <span className="back-content">Cloud Firestore<br/></span>
                                        <span className="back-content">Firebase Functions (REST API)<br/></span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

                <div className="skill-outside-etc">
                    <div className="skill-inside-etc">
                        <Container>
                            <Row>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    {/* <div data-aos="fade-up" className="left"> */}
                                    <div className="left">
                                        <div className="etc-main-title">
                                            etc
                                        </div>
                                        <img className="etcImage" src={etcImage} alt="etcImage"/>
                                    </div>
                                </Col>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    {/* <div data-aos="fade-up" className="right"> */}
                                    <div className="right">
                                        <p className="etc-title">Version Control</p>
                                        <span className="etc-content">Git (Work Flow, Commit, Push, Pull, Branch, Merge)</span>
                                        <hr/>
                                        <p className="etc-title">CMS</p>
                                        <span className="etc-content">Wordpress (WooCommerce & Website) | Shopify</span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </MainContainer>
        )
    }
}