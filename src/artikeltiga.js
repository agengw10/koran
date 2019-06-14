import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import logo from './img/Koranonline_logo2.png';
import gambar3 from './img/rom.png';
import FooTer from './footer';


class ArtikelTiga extends Component {
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
                            <h3>Nostalgia Kuy,Ragnarok M : Eternal Love</h3>
                        </div>
                        <div className="col-md-12 col-xs-12 gambarisi">
                            <a className="navbar-brand linkcolor"><img src={gambar3} width="400" className="img-fluid" alt="..."></img></a>
                        </div>
                        <div className="col-md-12 col-xs-12 isi">
                        <p>Hadir pada akhir 2018, Ragnarok M: Eternal Love memberikan sebuah pengalaman berbeda dalam bermain MMORPG mobile. Kehadiran Ragnarok M: Eternal Love seakan mendobrak standar baru untuk RPG mobile.</p>
                        <br></br>
                        <p>Banyak sekali hal baru yang coba ditawarkan Gravity dan Xindong selaku pengembang game yang satu ini. Mungkin di antara lo udah ada yang mainin game ini. Memasuki tahap OBT pada 31 Oktober kemarin, Ragnarok M: Eternal Love udah ramai dimainkan oleh pemain dari berbagai penjuru Asia Tenggara, bahkan dunia.</p>  
                        <p>Grafik yang hadir di Ragnarok M: Eternal Love bisa dibilang sangat segar untuk ukuran game mobile. Lo bisa melihat detail elemen dalam game yang enggak akan lo temukan dalam game mobile lain. RPG mobile yang paling mendekati dengan gaya animasi Ragnarok M: Eternal Love adalah Dragon Nest. Namun, Dragon Nest enggak punya elemen mendetail yang dapat lo nikmati, kayak animasi gerakan rumput sampai aliran air yang ada dalam Ragnarok M: Eternal Love.</p> 
                        <br></br>    
                        <p>Mengusung tema kartun 3-D memang menjadi pilihan yang baik. Di samping mengikuti tema grafik pada Ragnarok Online, tema kartun masih menjadi pilihan populer untuk game online mobile saat ini. Mengacu pada Ragnarok Online versi PC, Ragnarok M: Eternal Love juga menerapkan font angka damage yang mirip dengan Ragnarok Online. Cita rasa klasik dari Ragnarok Online ini sepertinya coba dipertahankan oleh Gravity dan Xindong.</p>
                        <p>Ragnarok M: Eternal Love telah memberikan kesan mendalam untuk game mobile. Sekilas, lo akan merasakan bermain sebuah game online di PC. Soalnya, grafik pada Ragnarok M: Eternal Love memang mirip seperti game online PC lain yang keluar di era 2000-an.</p>
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

export default ArtikelTiga;