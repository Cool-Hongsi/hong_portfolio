import React from 'react';
import '../css/Project.css';
import MainContainer from './MainContainer';
import ProjectDetail from './ProjectDetail';
import { TweenMax } from 'gsap';
import Parallax from 'react-rellax';

export default class Project extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            array : [
                {
                    class : "pro1",
                    title : "Laptop Shopping Mall",
                    language : "ReactJS (Personal Project)",
                    content : "Auth Part by Firebase Auth and Firestore, General REST API Part by Firebase Cloud Functions, Redux with Saga for state management",
                    github : "https://laptop-shopping-mall-487f5.firebaseapp.com/"
                },
                {
                    class : "pro2",
                    title : "Movie Memory",
                    language : "Flutter (Personal Project)",
                    content : "REST API with Firebase, Third Party API (IMDB), Multi Provider & Model Setting, Localication for Language, Released Android and IOS (https://play.google.com/store/apps/details?id=com.sjh.moviememory), (https://apps.apple.com/ca/app/moviememory/id1522976299)",
                    // github : "https://play.google.com/store/apps/details?id=com.sjh.moviememory"
                },
                {
                    class : "pro3",
                    title : "Awesome Website",
                    language : "Wordpress / PHP (Personal Project)",
                    content : "Customized Wordpress theme with lightweight and Created flexible theme (Custom Field / Custom Post Type)",
                    github : "https://awesome-theme.com"
                },
                {
                    class : "pro4",
                    title : "Pet Registration (Web)",
                    language : "ReactJS (Work Project)",
                    content : "State Management by Redux & Saga (Immutability), SignUp & Login with OAuth Google (JWT), API Handling with Swagger / Responsive Design",
                    // github : "https://cool-hongsi.github.io/Github-Cart/"
                },
                {
                    class : "pro5",
                    title : "Pet Registration (Mobile)",
                    language : "Flutter (Work Project)",
                    content : "REST API (Firebase Cloud Functions), Design based on UI & UX, Responsive Design",
                    // github : "https://cool-hongsi.github.io/Pixabay-API/"
                },
            ]
        }
    };

    componentDidMount(){

        TweenMax.to(".project-show-outside", 1, {
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

        TweenMax.to(".letter", 1, {
            delay: 5.5,
            opacity: .2
        });

        TweenMax.to(".project-detail-outside", 2, {
            delay: 6,
            display: "block",
            opacity: 1
        });
    }

    render(){
        return(
            <MainContainer>

                <div className="project-show-outside">
                    <div className="project-show-inside">
                        What I Create ?
                    </div>
                </div>
                
                <div className="project-detail-outside">
                    {this.state.array.map((el, index) => {
                        return(
                            <ProjectDetail key={index} class={el.class} title={el.title} language={el.language} content={el.content} github={el.github} />
                        )
                    })}
                </div>
                
                <div className="project-detail-outside">
                    <Parallax className="letter letter1" speed={4}>P</Parallax>
                    <Parallax className="letter letter2" speed={5}>R</Parallax>
                    <Parallax className="letter letter3" speed={6}>O</Parallax>
                    <Parallax className="letter letter4" speed={4}>J</Parallax>
                    <Parallax className="letter letter5" speed={5}>E</Parallax>
                    <Parallax className="letter letter6" speed={6}>C</Parallax>
                    <Parallax className="letter letter7" speed={7}>T</Parallax>
                </div>

            </MainContainer>
        )
    }
}