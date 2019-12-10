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

    
    render() {
        return (
            <nav>
                <ul>
                    <Link id="home"  to='/' >
                        <li>Home</li>
                    </Link>
    
                    <Link id="about" to='/about' >
                        <li>About</li>
                    </Link>
    
                    <Link id="shop" to='/shop' >
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}



