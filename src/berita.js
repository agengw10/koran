import React, { Component } from 'react';
import axios from "axios";
import queryString from "query-string";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import user from './img/user.png';
import newsfix from './img/newsfix.jpg';
import smiley from './img/smiley2.jpg';
import logo from './img/Koranonline_logo2.png';
import infografis1 from './img/infografis1.jpg';
import {Link} from 'react-router-dom';
import FooTer from './footer';

class BeriTa extends Component {
    constructor(props) {
        super(props);
        this.state = {
          news: ''
        };
      }
      componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        let category = parsed.category;         
        axios
          .get("https://uzone.id/feed?api_key=20164341241465cdaea3cf0a4d484704f1209195df3f905&type=json&limit=25&use_cdn=true&category="+category)
          .then(response => this.setState({ news: response.data.item }));                  
      }      
    render() { 
        const {news} = this.state;
        console.log(news)
        return (
            <div className="">
                <div className="container">
                     <div className="col-md-12 col-xs-12 logo">   
                        <a className="navbar-brand linkcolor"><img src={logo} width="100" className="atas" alt="..."></img></a>
                    </div>
                    <div className="col-md-12 col-xs-12 menu"></div>                    
                    <div className="col-md-12 garis">
                        <div className="row">
                                <div className="col-md-2 col-xs-6 text-orange">
                                    <a className="navbar-brand linkcolor"><img src={user} width="20" className="atas" alt="..."></img>Berita Utama</a>
                                </div>
                                <div className="col-md-10 col-xs-6 border-bottom-orange">
                                </div>
                        </div>
                    </div>
                    <div className="col-md-12 garis">
                        <div className="row">
                            <div  className="col-md-7 col-xs-12 content">
                                <div className="tab-content">
                                    <div className="content">
                                            {
                                                          news ?
                                                          news.map(result => {
                                                              return (
                                                                    <div className="media border-bottom">
                                                                        <div className="media-left">
                                                                            <img src={result.enclosure} width="160" className="atas" alt="..."></img>
                                                                        </div>
                                                                        <div className="media-body">
                                                                                <p className="font-size-12 text-grey">{result.pubDate}</p>
                                                                                <a href={result.link}><h4  className="media-heading">{result.title}</h4></a>
                                                                                <p className="margin-top-10 text-grey">{result.slug}</p>
                                                                        </div>
                                                                    </div>                                                                 
                                                              )
                                                          })
                                                          :<h3>loading</h3>
                                            }

                                            {/* <div className="media border-bottom">
                                                <div className="media-left">
                                                    <img src={newsfix} width="160" className="atas" alt="..."></img>
                                                </div>
                                                <div className="media-body">
                                                        <p className="font-size-12 text-grey">28 mei 2019 - 12:45 </p>
                                                        <h4 className="media-heading">Lorem ipsum dolor Lorem ipsum dolor</h4>
                                                        <p className="margin-top-10 text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        </p>
                                                </div>
                                            </div> */}
                                            {/* <div className="media border-bottom">
                                                <div className="media-left">
                                                    <img src={newsfix} width="160" className="atas" alt="..."></img>
                                                </div>
                                                <div className="media-body">
                                                        <p className="font-size-12 text-grey">28 mei 2019 - 12:45 </p>
                                                        <h4 className="media-heading">Lorem ipsum dolor Lorem ipsum dolor</h4>
                                                        <p className="margin-top-10 text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        </p>
                                                </div>
                                            </div>                                                                               */}
                                        </div>                                    
                                </div>
                            </div>
                             <div  className="col-md-5 col-xs-12 content">

                            </div>                           
                        </div>
                    </div>
                </div>
            <FooTer/>
            </div>
        );
    }
}

export default BeriTa;
