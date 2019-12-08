import React from 'react';
import NavBar from "../NavBar/NavBar";
import './MainPage.scss'
import HeroHeader from "../HeroHeader/HeroHeader";
import PageBody from "../PageBody/PageBody";
import Footer from "../Footer/Footer";

class MainPage extends React.Component{
    render() {
        return (
            <div>
                <div className="pageContainer col-12">
                    <div className="container-fluid wrapper">
                        <NavBar/>
                        <HeroHeader/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="container-fluid wrapper">
                        <PageBody/>
                    </div>
                </div>
                <div className="col-12 footer">
                    <div className="container-fluid">
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;