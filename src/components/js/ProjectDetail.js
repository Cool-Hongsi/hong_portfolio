import React from 'react';
import '../css/ProjectDetail.css';
import { TweenMax } from 'gsap';

export default class ProjectDetail extends React.Component{

    componentDidMount(){
        TweenMax.to(".pro1", 1, {
            opacity: 1,
            delay: 6.8
        });

        TweenMax.to(".pro2", 1, {
            opacity: 1,
            delay: 7.1
        });

        TweenMax.to(".pro3", 1, {
            opacity: 1,
            delay: 7.4
        });
        
        TweenMax.to(".pro4", 1, {
            opacity: 1,
            delay: 7.7
        });

        TweenMax.to(".pro5", 1, {
            opacity: 1,
            delay: 8
        });
    }

    render(){
        return(
            <div className={this.props.class}>
                <h2 className="project-title">{this.props.title}</h2>
                <div className="overlay">
                    <div className="content">
                        <div style={{fontWeight: 700}}>{this.props.language}</div><br/>
                        {this.props.content}<br/><br/>
                        <a href={this.props.github} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>View</a>
                    </div>
                </div>
            </div>
        )
    }
}