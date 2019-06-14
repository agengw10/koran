import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import logo from './img/Koranonline_logo2.png';
import gambar1 from './img/switchimage.jpg';
import FooTer from './footer';


class ArtikelSatu extends Component {
    render() { 
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 logo">   
                            <a className="navbar-brand linkcolor"><img src={logo} width="100" className="atas" alt="..."></img></a>
                        </div>   
                        <div className="col-md-12 col-xs-12 menu">
                        </div>
                        <div className="col-md-12 col-xs-12 judul">
                            <h3>Nintendo Switch si kecil yang Superpower</h3>
                        </div>
                        <div className="col-md-12 col-xs-12 gambarisi">
                            <a className="navbar-brand linkcolor"><img src={gambar1} width="400" className="img-fluid" alt="..."></img></a>
                        </div>
                        <div className="col-md-12 col-xs-12 isi">
                            <p>Adalah suatu konsol gaming terbaru buatan Nintendo. Bentuk perangkat ini seperti tablet Android / iPad, namun dapat digunakan dengan tiga skenario berbeda:</p>
                            <br></br>
                            <p> 1. Digunakan seperti perangkat game portable dengan cara menempelkan kontroler di sisi kiri dan kanan "tablet" lalu dipegang seperti memainkan gimbot (game watch).</p>
                            <p> 2. Masih digunakan secara portable dengan cara meletakkan perangkat ini di meja lalu untuk mengontrolnya dilakukan dengan memegang kontroler secara wireless / tanpa kabel </p>
                            <p> 3. Digunakan di rumah dengan menempatkan Nintendo Switch pada docking (semacam "tatakan") lalu dihubungkan ke layar TV. Alhasil perangkat ini menjadi berubah bentuk jadi seperti konsol game pada umumnya.
                            Sesuai dengan namanya "Switch" yang artinya beralih / berganti, kelebihan utama dari perangkat game ini adalah kemampuannya untuk dapat digunakan secara portable (bisa dibawa kemana-mana) namun disaat yang bersamaan juga masih bisa digunakan dengan nyaman jika disambungkan dengan TV atau layar lebar.</p>
                            <br></br>
                            <p>Salah satu hal yang memungkinkan hal ini bisa terjadi adalah dengan digunakannya kontroler canggih yang dinamakan Joy-Con</p>                       
                        </div> 
                        <div className="col-md-12 col-xs-12 contributor">
                            <strong>Penulis : Ageng W10 Hacktiv8</strong>
                        </div>                      
                    </div> 
                </div>
            <FooTer/>
            </div>
        );
    }
}

export default ArtikelSatu;