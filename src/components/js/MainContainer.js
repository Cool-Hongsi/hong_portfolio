import React from 'react';
import '../css/MainContainer.css';
import NavBar from './NavBar';

export default class MainContainer extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                {this.props.children}
            </div>
        )
    }
}