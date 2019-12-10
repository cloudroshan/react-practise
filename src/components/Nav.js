import React, { Component } from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

export default class Nav extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        }


    }

    navClick(e,id){
        console.log(e.target.id);
    }

    render() {
        return (
            <nav>
                <ul>
                    <Link id="home"  to='/' onClick={this.navClick(id)}>
                        <li>Home</li>
                    </Link>
    
                    <Link id="about" to='/about' onClick={this.navClick(id)}>
                        <li>About</li>
                    </Link>
    
                    <Link id="shop" to='/shop' onClick={this.navClick(id)}>
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}



