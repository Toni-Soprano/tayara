import React from "react";
import Nav from './Nav';
import { Link , useNavigate,useLocation} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"
import Slider from "react-slick";
import {FiTruck} from "react-icons/fi"
import {BsCurrencyDollar} from "react-icons/bs"
import {CiPercent} from "react-icons/ci"
import {BiHeadphone} from "react-icons/bi"
import {AiOutlineCloseCircle, AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {BsEye} from "react-icons/bs"
import '../Styles/Home.css'




const Home =  ({  detail, view , close , setClose}) => {

    const location=useLocation()
    const navigate = useNavigate()



    return (
        <>
            <Nav/>

            <div className="categories">
                <ul>
                    <li>Véhicules</li>
                    <li> Immobilier</li>
                    <li>Informatique et Multimedia</li>
                    <li>Maison</li>
                    <li>Enterprise</li>
                </ul>
            </div>
            <div className="top_banner">
                <div className="container">
                    <div className="detail">
                        <h2>Welcome to Market Online Italy</h2>
                        <Link to="/product" className="link">Déposer une annonce ! <BsArrowRight/></Link>
                    </div>
                </div>
            </div>
            <div className="News">
                <div className="container">
                    <h1>Top categories</h1>
                </div>

            </div>





        </>
    );
};

export default Home;
