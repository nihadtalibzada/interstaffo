import React from 'react';
import {Button} from 'reactstrap';
import './HeroHeader.scss';

class HeroHeader extends React.Component{
    render() {
        return (
                <div className="mainContent row">
                    <div className="accountText col-lg-4 col-10">
                        <h4>Talk directly to your future employer! Do what you love!</h4>
                        <p>No applications and directly in chat</p>
                        <Button className="accountButton" color="warning">Create free account</Button>{' '}
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="heroMan">
                            <img src={require('../../assets/hero_man.png')} className="hero"/>
                        </div>
                    </div>
                </div>
        )
    }
}

export default HeroHeader;