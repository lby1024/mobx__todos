import React, { Component } from 'react';
import Header from './header'
import List from './list'
import Footer from './footer'
import './App.css'

export default class App extends Component {
    render() {
    return (
        <div className="App">
            <Header/>
            <List/>
            <Footer/>
        </div>
    );
    }
}
