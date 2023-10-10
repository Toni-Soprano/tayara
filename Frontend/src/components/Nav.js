import React  from 'react';
import '../Styles/Nav.css';
import { BiUserCircle } from 'react-icons/bi';
import {Link} from 'react-router-dom' ;


const Nav = () => {

    return (
        <>
            <header>
                <div className="nav">
                    <div className="logo">
                        <h1>Market Online Italy</h1>
                    </div>
                    <div className="search_box">
                        <input type="text" placeholder="Search here..." id="text" />
                        <button>Search</button>
                    </div>
                    <div>
                        <button className="add"  >
                            Publier une annonce
                        </button>
                    </div>
                     <div>
                        <Link to="/register">
                        <button className="auth">
                            <i className="icon"><BiUserCircle /></i>Se connecter
                        </button>
                        </Link>
                    </div>
                </div>
            </header>


        </>
    );
};

export default Nav;