import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeaDer from './header';
import HeadLine from './headline';
import FooTer from './footer';

class App extends Component {
  state={
    header:{
        index0:"Musik",
        index1:"Sport",
        index2:"Travel",
        index3:"Food" 
    },
  }     
  render() {     
    return (
        <div className="">
            <div className="">
                <HeaDer
                    HeaDer1={this.state.header.index0}
                    HeaDer2={this.state.header.index1}
                    HeaDer3={this.state.header.index2}
                    HeaDer4={this.state.header.index3}          
                />
                <HeadLine/>
                <FooTer/>
            </div>
        </div>
    );
  }
}

export default App;