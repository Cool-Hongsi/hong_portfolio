import React from 'react';
import '../css/About.css';
import MainContainer from './MainContainer';
import { TweenMax } from 'gsap';
import { Container, Row, Col } from 'reactstrap';
import Face from '../image/Face.png';

export default class About extends React.Component{

    componentDidMount(){

        TweenMax.to(".about-show-outside", 1, {
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

        TweenMax.to(".about-outside-face", 2, {
            delay: 5.5,
            display: "block",
            opacity: 1
        });

        TweenMax.to(".about-outside-education", 2, {
            delay: 6,
            display: "block",
            opacity: 1
        });

        TweenMax.to(".about-outside-experience", 2, {
            delay: 6.5,
            display: "block",
            opacity: 1
        });

    }

    render(){
        return(
            <MainContainer>

                <div className="about-show-outside">
                    <div className="about-show-inside">
                        Who I Am ?
                    </div>
                </div>

                <div className="about-outside-face">
                    <div className="about-inside-face">
                        <img className="face" src={Face} alt="facePic" />
                        <div className="face-content">
                            <h4>Coding, Singing, Sports, Game</h4>
                            <hr/>
                            <p>
                                Hi! My name is Sungjun Hong. I've graduated Seneca College in December 2018.
                                I love doing all as long as I can learn newly and have a strong passion.
                                Thank you for coming and welcome to my portfolio!
                            </p>
                        </div>
                        <hr/>
                        <div className="social-media">
                            <a href="https://www.linkedin.com/in/sungjun-hong-929496165" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000"}}><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/Cool-Hongsi" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "#000"}}><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>

                <div className="about-outside-education">
                    <div className="about-inside-education">
                        <Container>
                            <Row>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    <div className="left-pic">
                                
                                    </div>
                                </Col>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    <div className="right-content">
                                        <div className="content">
                                            <div className="content-title">Education</div><hr/>
                                            <div className="content-spec">
                                                <ul>
                                                    <li><b>Seneca College</b><br/>Computer Programmer<br/>Diploma (CA) | Sep 17 ~ Dec 18<br/><br/></li>
                                                    <li><b>Inje University</b><br/>Economics and Finance<br/>Degree (KO) | Mar 08 ~ Feb 15<br/></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

                <div className="about-outside-experience">
                    <div className="about-inside-experience">
                        <Container>
                            <Row>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    <div className="left-content">
                                        <div className="content">
                                            <div className="content-title">Experience</div><hr/>
                                            <div className="content-spec">
                                                <ul>
                                                    <li><b>Web Developer</b><br/>E-Commerce Maintenance<br/>VitaVita Inc (CA) | Jun 19 ~ Current<br/><br/></li>
                                                    <li><b>Office Staff</b><br/>Financing and Accounting<br/>Shinhan Heavy Inc (KO) | May 14 ~ Aug 16<br/></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                    <div className="right-pic">
                                
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