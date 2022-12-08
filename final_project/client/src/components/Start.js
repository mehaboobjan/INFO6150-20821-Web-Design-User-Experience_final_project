import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import './Start.css'
const Start = () => {
    return(
        <div className='caro'>
        <h1 align="center"><b>Go shop</b></h1>
        <Carousel autoPlay interval="500" transitionTime="5000" infiniteLoop>
            <div>
                <img src="https://res.cloudinary.com/djqty7gls/image/upload/v1670477429/electronics_lpxyue.jpg" alt="" />
                <p className="legend">Electronics</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/djqty7gls/image/upload/v1670477908/food_hcqsii.jpg" alt="" />
                <p className="legend">Food</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/djqty7gls/image/upload/v1670478014/clothes_otybmi.jpg" alt="" />
                <p className="legend">Clothes</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1516527653392-602455dd9cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" alt="" />
                <p className="legend">My Photo 4</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1655365225165-8d727fe3a091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=80" alt="" />
                <p className="legend">My Photo 5</p>
            </div>
        </Carousel>
        <div align="center" className='butt'>
            <Link to='/home'>
            <button className='btn btn-danger' >Start Buying</button>
            </Link>
        </div>
    </div>
    )
}

export default Start