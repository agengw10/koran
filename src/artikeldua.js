import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import logo from './img/Koranonline_logo2.png';
import gambar2 from './img/ps4.jpg';
import FooTer from './footer';

class ArtikelDua extends Component {
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
                            <h3>PS4 console super dengan kumpulan game AAA</h3>
                        </div>
                        <div className="col-md-12 col-xs-12 gambarisi">
                            <a className="navbar-brand linkcolor"><img src={gambar2} width="400" className="img-fluid" alt="..."></img></a>
                        </div>
                        <div className="col-md-12 col-xs-12 isi">
                        <p>PS4 adalah console keluaran Sony,console ini merupakan penerus console sebelumnya yaitu PS3,berbeda tentunya dengan berbagai improvement baik dari sisi grafik maupun perangkat.</p>
                        <p>console ini sekarang bisa dikatakan sebagai "Raja" dari console karena dari sisi grafik,gameplay dan para developer game triple A yang berkumpul di console ini.</p>
                        <p>Sederhananya, PS4 mengambil alih tahta keunggulan jika berbicara mengenai game-game eksklusif, yang sejauh ini membuat console lain hanya bisa malu dan tertunduk lesu. Pada tahun 2017 saja, PS4 telah merilis game-game eksklusif keren seperti Horizon Zero Dawn, Nioh, Nier-Automata, Uncharted: The Lost Legacy, dan Persona 5.</p>
                        <br></br>
                        <p>Belum lagi di tahun 2018, Sony siap menghajar Microsoft habis-habisan dengan mengeluarkan beberapa game keren lain seperti God Of War, Spider-Man, Detroit Become Human, The Last Of Us Part II dan Death Stranding.</p>                    
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

export default ArtikelDua;