import React from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';

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
                            <li><Link to="/" style={{textDecoration: "none", color: "#000"}}>Home</Link></li>
                            <li><Link to="/about" style={{textDecoration: "none", color: "#000"}}>About</Link></li>
                            <li><Link to="/skill" style={{textDecoration: "none", color: "#000"}}>Skill</Link></li>
                            <li><Link to="/project" style={{textDecoration: "none", color: "#000"}}>Project</Link></li>

                            {/* <li><a href="/" style={{textDecoration: "none", color: "#000"}}>Home</a></li>
                            <li><a href="/about" style={{textDecoration: "none", color: "#000"}}>About</a></li>
                            <li><a href="/skill" style={{textDecoration: "none", color: "#000"}}>Skill</a></li>
                            <li><a href="/project" style={{textDecoration: "none", color: "#000"}}>Project</a></li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}