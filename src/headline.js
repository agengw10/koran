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
import artikel1 from './img/artikel1.jpg';
import artikel2 from './img/artikel2.jpg';
import artikel3 from './img/artikel3.jpg';
import infografis1 from './img/infografis1.jpg';
import {Link} from 'react-router-dom';


class HeadLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
          news2: ''
        };
      }
      componentDidMount() {      
        axios
          .get("https://newsapi.org/v2/top-headlines?country=id&apiKey=0b3e87958d0b4e71a9e2ed3eea69237a")
          .then(response => this.setState({ news2: response.data.articles }));                  
      }     
    render() {  
        const {news2} = this.state; 
        console.log(news2)    
        return (
            <div className="container">
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
                                <ul className="nav nav-tabs">
                                    <li className="active text-bold">
                                        <a data-toggle="tab" className="active" href="#home">TERPOPULER</a>
                                    </li>
                                    &nbsp;
                                    &nbsp;
                                    <li>
                                        <a className="text-bold text-grey" data-toggle="tab" href="#menu1">INFO GRAFIS</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    {/* <div id="home" className=""> */}
                                    <div id="home" className="tab-pane fade in active show">
                                    {
                                    news2 ?
                                    news2.filter((result,index) => {
                                        return index<10    
                                    })
                                    .map(result => {
                                        return (
                                            <div className="media border-bottom">
                                                <div className="media-left">
                                                    <img src={result.urlToImage} width="160" className="atas" alt="..."></img>
                                                </div>
                                                <div className="media-body">
                                                        <p className="font-size-12 text-grey">{result.publishedAt} </p>
                                                        <a href={result.url}><h4 className="media-heading">{result.title}</h4></a>
                                                        <p className="margin-top-10 text-grey">{result.description}</p>
                                                </div>
                                            </div>
                                        )
                                        }) 
                                        :<h3>loading</h3>
                                    }                                                                            
                                    </div>
                                    {/* <div id="menu1" class=""> */}
                                    <div id="menu1" className="tab-pane fade">
                                        {/* <h3>INFO GRAFIS</h3> */}
                                        {/* <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                                        <a className="navbar-brand linkcolor"><img src={infografis1} width="200" className="container-fluid" alt="..."></img></a>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="col-md-5 col-xs-12 text-orange">
                                <a className="navbar-brand linkcolor"><img src={smiley} width="20" className="atas" alt="..."></img>Artikel Santai</a>
                                     <div className="media border-bottom">
                                            <div className="media-left">
                                                <img src={artikel1} width="160" className="atas" alt="..."></img>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="text-black media-heading">Nintendo Switch si kecil yang Superpower</h4>
                                                <span className="font-size-12 text-black"></span>
                                                <p className="text-black text-bold">
                                                    <Link to="ArtikelSatu"><button type="button" className="btn btn-border-yellow text-yellow pull-right margin-bottom-20 ">Baca</button></Link>
                                                </p>                                               
                                            </div>
                                    </div>
                                    <div className="media border-bottom">
                                            <div className="media-left">
                                                <img src={artikel2} width="160" className="atas" alt="..."></img>
                                            </div>
                                            <div className="media-body">
                                                 <h4 className="text-black media-heading">PS4 console super dengan kumpulan game AAA</h4>
                                                <span className="font-size-12 text-black"></span>
                                                <p className="text-black text-bold">
                                                <Link to="ArtikelDua"><button type="button" className="btn btn-border-yellow text-yellow pull-right margin-bottom-20 ">Baca</button></Link>
                                                </p>                                                  
                                            </div>
                                    </div>
                                    <div className="media border-bottom">
                                            <div className="media-left">
                                                <img src={artikel3} width="160" className="atas" alt="..."></img>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="text-black media-heading">Nostalgia Kuy,Ragnarok M : Eternal Love</h4>
                                                <span className="font-size-12 text-black"></span>
                                                <p className="text-black text-bold">
                                                <Link to="ArtikelTiga"><button type="button" className="btn btn-border-yellow text-yellow pull-right margin-bottom-20 ">Baca</button></Link>
                                                </p>  
                                            </div>
                                    </div>                                                                                                               
                            </div>
                    </div>
                </div>                
            </div>      
        );
    }
}

export default HeadLine;