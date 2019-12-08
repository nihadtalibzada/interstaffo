import React from 'react';
import './NavBar.scss';

class NavBar extends React.Component{
    render() {
        return (
            <div className="row-fluid col-12 fixed-top topNavBar">
                <div className="navigation">
                    <img src={require('../../assets/interstaffo_logo.svg')} className="logo"/>
                    <h3 className="textField">Interstaffo</h3>
                </div>
            </div>
        )
    }
}

export default NavBar;