import React from 'react';
import {Button} from 'reactstrap';
import './PageBody.scss';

class PageBody extends React.Component{
    render() {
        return (
            <div>
                <div className="row text-center">
                    <span className="col-sm-12">
                        <p>Talk with more than 1000 great companies who are hiring right now on Interstaffo</p>
                    </span>
                    <div className="col-12">
                        <img src={require('../../assets/company_logos/210_Medapps_logo_logos-512.png')} className="companyLogos"/>
                        <img src={require('../../assets/company_logos/165_Hotjar_logo_logos-512.png')} className="companyLogos"/>
                        <img src={require('../../assets/company_logos/58_Cloudsmith_logo_logos-512.png')} className="companyLogos"/>
                        <img src={require('../../assets/company_logos/217_Mix_logo_logos-512.png')} className="companyLogos"/>
                    </div>
                    <div className="visionDiv">
                        <div className="col-sm-12 col-md-0 col-lg-0 text-left">
                            <p className="visionText"><i><b>Our Vision is to empower people individually to reach their full potential.</b></i></p>
                        </div>
                        <div className="row col-sm-12 col-md-0 col-lg-0 text-left textContent">
                            <span className="col-md-4 col-lg-5 col-sm-12">
                                <p><b>Through our automated solutions in the recruiting and HR field, we are excited to bring
                                new and exciting job opportunities to people around the world. For this, we develop innovative
                                software solutions for our customers that try to take the recruiting field into the new digital era.</b></p>
                            </span>
                            <span className="col-md-4 col-lg-5 col-sm-12">
                                <p><b>Our vision is to fully digitalize and automate recruiting, so cover letters and paper CVs
                                become ancient relics. We aim to use Big Data, Artificial Intelligence, Machine Learning and the
                                power of the Internet to bring the right job directly to the most suitable candidate.</b></p>
                            </span>
                        </div>
                    </div>
                    <div className="row text-center col-12">
                        <Button className="accountButton" color="warning">Create free account</Button>{' '}
                    </div>
                </div>
            </div>
        )
    }
}

export default PageBody;