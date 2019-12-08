import React from 'react';
import './Footer.scss';

class Footer extends React.Component{
    render() {
        return (
            <div className="row">
                <div className="col-md-6 d-none d-sm-flex">
                    <img src={require('../../assets/interstaffo_logo.svg')} className="logo"/>
                    <h3 className="textField">Interstaffo</h3>
                </div>
                <div className="d-md-inline-block row col-md-6 col-sm-12 my-3 text-center">
                    <span className="textField col-md-2 col-sm-12">
                        Terms & Conditions
                    </span>
                    <span className="textField col-md-2 col-sm-12">
                        FAQ
                    </span>
                    <span className="textField col-md-2 col-sm-12">
                        Jobs
                    </span>
                    <span className="textField col-md-2 col-sm-12">
                        Privacy Policy
                    </span>
                    <span className="textField col-md-2 col-sm-12">
                        Imprint
                    </span>
                </div>
            </div>
        )
    }
}

export default Footer;