import React from 'react';
import './Nav.css';
import {BiUserCircle} from 'react-icons/bi'


const Nav = () => {


    return (
        <>
            <div className="info">
                <p>Contact Us +39123-4567-890</p>
                <ul>help</ul>
            </div>
            <header>
                <div className="nav">
                    <div className="logo">
                        <h1>Market Online Italy</h1>
                    </div>
                    <div className="search_box">
                        <input type="text" placeholder="Search here..." />
                        <button>  Search</button>
                    </div>
                    <div>
                        <button className="add">Publier une annonce</button>
                    </div>
                    <div>
                        <button className="auth"  >
                          <i className="icon"><BiUserCircle/></i>Se connecter
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Nav;
