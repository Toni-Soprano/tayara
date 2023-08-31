import React  from "react";
import { Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"
import {FiTruck} from "react-icons/fi"
import {BsCurrencyDollar} from "react-icons/bs"
import {CiPercent} from "react-icons/ci"
import {BiHeadphone} from "react-icons/bi"
import {AiOutlineCloseCircle, AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {BsEye} from "react-icons/bs"
import Homeproduct from "./homeproducts.js";

import './Home.css'

const Home =  ({  detail, view , close , setClose}) => {



    return (
        <>
            {close ?
                <div className="product_detail">
                    <div className="container">
                        <button onClick={() => {setClose (false)}  }className="closebtn"><AiOutlineCloseCircle/></button>
                        {detail.map((curElm) => {
                            return (
                                <div className="productbox" key={curElm.id}>
                                    <div className="img-box">
                                        <img src={curElm.Img} alt={curElm.Title}></img>
                                    </div>
                                    <div className="detail">
                                        <h4>{curElm.cat}</h4>
                                        <h2>{curElm.title}</h2>
                                        <p>A Screen everyone will love</p>
                                        <h3>{curElm.Price}</h3>
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div> :null

            }
            <div className="top_banner">
                <div className="container">
                    <div className="detail">
                        <h2>The Best Note Book Collection 2023</h2>
                        <Link to="/product" className="link">Shop now! <BsArrowRight/></Link>
                    </div>
                    <div className="img_box">
                        <img src="./img/slider-img.png" alt="sliderimg"></img>
                    </div>

                </div>
            </div>
            <div className="product_type">
                <div className="container">
                    <div className="box">
                        <div className="img_box">
                            <img src="./img/Mobile Phone.png" alt="mobile"></img>
                        </div>
                        <div className="detail">
                            <p>23 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="./img/smart watch.png" alt="watch"></img>
                        </div>
                        <div className="detail">
                            <p>18 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="./img/headphone.png" alt="headphone"></img>
                        </div>
                        <div className="detail">
                            <p>2 products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="box">
                        <div className="icon">
                            <FiTruck/>

                        </div>
                        <div className="detail">
                            <h3>Free Shipping</h3>
                            <p>Order above 1000$ !</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BsCurrencyDollar/>

                        </div>
                        <div className="detail">
                            <h3>Return & Refund </h3>
                            <p>Money back guaranty</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <CiPercent/>

                        </div>
                        <div className="detail">
                            <h3>Member discount</h3>
                            <p>On every Order</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BiHeadphone/>

                        </div>
                        <div className="detail">
                            <h3>Customer Support</h3>
                            <p>Call Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <h2>Top products</h2>
                <div className="container">
                    {
                        Homeproduct.map((curElm) =>
                        {
                            return (
                                <div className="box" key={curElm.id}>
                                    <div className="img_box">
                                        <img src={curElm.Img} alt={curElm.title}/>
                                        <div className="icon">
                                            <li><AiOutlineShoppingCart/></li>
                                            <li onClick={() => view(curElm)}><BsEye/></li>
                                            <li><AiOutlineHeart/></li>



                                        </div>
                                    </div>
                                    <div className="detail">
                                        <p>{curElm.cat}</p>
                                        <h3>{curElm.title}</h3>
                                        <h4>{curElm.Price}</h4>
                                    </div>
                                </div>
                            )
                        } )
                    }

                </div>
            </div>
            <div className="banner">
                <div className="container">
                    <div className="detail">
                        <h4>LATEST TECHNOLOGY ADDED</h4>
                        <h3>Apple iPad 10.2 9th Gen - 2023</h3>
                        <p>$ 986 </p>
                        <br></br>

                        <Link to='/product/' className="link"> Shop Now  <BsArrowRight/> </Link>

                    </div>
                    <div className="img_box">
                        <img src="./img/slider-img.png" alt="sliderpng"></img>
                    </div>

                </div>

            </div>

        </>
    );
};

export default Home;
