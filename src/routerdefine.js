import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import KoranOnline from './koranonline';
import ArtikelSatu from './artikelsatu';
import ArtikelDua from './artikeldua';
import ArtikelTiga from './artikeltiga';
import BeriTa from './berita';
import BeritaUtama from './beritautama';

export default class RouterDefine extends Component {
  render() {
    return (
        <Router>
            <Switch>
            <div className="">
                <Route exact path="/" component={KoranOnline} />
                <Route path="/artikelsatu" component={ArtikelSatu} />
                <Route path="/artikeldua" component={ArtikelDua} />
                <Route path="/artikeltiga" component={ArtikelTiga} />
                <Route path="/berita" component={BeriTa} />
                <Route path="/beritautama" component={BeritaUtama} />
            </div>
            </Switch>
        </Router>
    );
  }
}

