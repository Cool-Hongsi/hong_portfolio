import React from 'react';
import '../css/ProjectDetail.css';
import { TweenMax } from 'gsap';

export default class ProjectDetail extends React.Component{

    componentDidMount(){
        TweenMax.to(".pro1", 1, {
            opacity: 1,
            delay: 3.5
        });

        TweenMax.to(".pro2", 1, {
            opacity: 1,
            delay: 3.8
        });

        TweenMax.to(".pro3", 1, {
            opacity: 1,
            delay: 4.1
        });
        
        TweenMax.to(".pro4", 1, {
            opacity: 1,
            delay: 4.4
        });
    }

    render(){
        return(
            <div className={this.props.class}>
                <h2 className="project-title">{this.props.title}</h2>
                <div className="overlay">
                    <div className="content">
                        {this.props.language}<br/><br/>
                        {this.props.content}<br/><br/>
                        <a href={this.props.github} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>GitHub</a>
                    </div>
                </div>
            </div>
        )
    }
}