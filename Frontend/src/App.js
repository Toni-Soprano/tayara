import React , {useEffect, useState} from 'react';
 import Axios from "axios";
import Register from "./components/Register";
  // Adjust if needed
import Nav from './components/Nav'; // Update import path
import Home from './components/Home'; // Update import path


import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import Slider from "react-slick";

    import {BrowserRouter , Routes , Route , Link} from "react-router-dom";


    function App() {
      /*  const [data,setData]=useState("");
        const getData=async()=>{
            const response=await Axios.get("http://localhost:8000/register");
            setData(response.data);
        }
        useEffect(()=> {
            getData()
        },[]);*/
      return (
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Register" element={<Register/>} />




          </Routes>
          </BrowserRouter>
      );
    }

    export default App;
