import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import instagram from './img/instagram.png';

class FooTer extends Component {
    render() {   
        return (
            <div class="">
                <div class="note">
                    <div class="btn margin-top-20">Tentang kami</div>
                    <div class="btn margin-top-20">Tim KoranOnline kami</div>
                    <div class="btn margin-top-20">Pedoman Media Siber</div>
                    <div class="btn margin-top-20">Kebijakan Privasi</div>
                    <div class="btn margin-top-20">Panduan Komunikasi</div>
                    <div class="btn margin-top-20">Kontrak</div>
                    <div class="btn margin-top-20">Karir</div>
                </div> 
                <div class="note">
                    <div class="col-lg-12  text-md">Copyright 2019 Ageng Hacktiv8 All Rights Reserved.</div>
                    <div class="col-lg-12 text-md">
                        <img src={facebook} width="20" all=""></img>
                        <img src={twitter} width="20" all=""></img>
                        <img src={instagram} width="20" all=""></img>
				    </div>                   
                </div>                 
            </div>
        );
    }
}

export default FooTer;

