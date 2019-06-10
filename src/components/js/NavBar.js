import React from 'react';
import '../css/NavBar.css';

export default class NavBar extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <input type="checkbox" id="nav" className="hidden" />
                    <label htmlFor="nav" className="nav-btn">
                        <i></i>
                        <i></i>
                        <i></i> 
                    </label>
                    <div className="logo">
                        <a href="/" style={{textDecoration: "none", color: "#000"}}>HONG</a>
                    </div>
                    <div className="nav-wrapper">
                        <ul>
                            <li><a href="/" style={{textDecoration: "none", color: "#000"}}>Home</a></li> {/* Directly styling to tag */}
                            <li><a href="/hong_portfolio/about" style={{textDecoration: "none", color: "#000"}}>About</a></li>
                            <li><a href="/hong_portfolio/skill" style={{textDecoration: "none", color: "#000"}}>Skill</a></li>
                            <li><a href="/hong_portfolio/project" style={{textDecoration: "none", color: "#000"}}>Project</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}