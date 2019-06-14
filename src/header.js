import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import logo from './img/Koranonline_logo2.png';


class HeaDer extends Component {   
    render() {
        const {HeaDer1,HeaDer2,HeaDer3,HeaDer4}=this.props;        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 logo">   
                        <a className="navbar-brand linkcolor"><img src={logo} width="100" className="atas" alt="..."></img></a>
                    </div> 
                    <div className="col-md-12 col-xs-12 menu">  
                        <a className="nav-item tab">
                            <a className="" href="/berita?category=music">{HeaDer1}<span className="sr-only">(current)</span></a>
                        </a>
                        &nbsp;
                        <a className="nav-item tab">
                            <a className="" href="/berita?category=sport">{HeaDer2}</a>
                        </a>
                        &nbsp;
                        <a className="nav-item tab">
                            <a className="" href="/berita?category=travel">{HeaDer3}</a>
                        </a>
                        &nbsp;
                        <a className="nav-item tab">
                            <a className="" href="/berita?category=food">{HeaDer4}</a>
                        </a> 
                    </div>  
                </div>
            </div>
        );
    }
}

export default HeaDer;
