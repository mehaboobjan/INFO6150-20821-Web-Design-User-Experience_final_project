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
        <Carousel autoPlay interval="500" transitionTime="1400" infiniteLoop>
            <div>
                <img src="https://res.cloudinary.com/djqty7gls/image/upload/v1670477429/electronics_lpxyue.jpg" alt="" />
                <Link to='/home'>
                <p className="legend">Electronics</p>
                </Link>
            </div>
            <div>
                <img src="https://res.cloudinary.com/djqty7gls/image/upload/v1670477908/food_hcqsii.jpg" alt="" />
                <Link to='/home'>
                <p className="legend">Food</p>
                </Link>
            </div>
            <div>
                <img src="https://res.cloudinary.com/djqty7gls/image/upload/v1670478014/clothes_otybmi.jpg" alt="" />
                <Link to='/home'>
                <p className="legend">Clothes</p>
                </Link>
            </div>
            <div>
                <img src="https://res.cloudinary.com/djqty7gls/image/upload/v1670478394/beauty_htxfip.jpg" alt="" />
                <Link to='/home'>
                <p className="legend">Beauty Products</p>
                </Link>
            </div>
            <div>
                <img src="https://res.cloudinary.com/djqty7gls/image/upload/v1670478595/books_gtnxfg.jpg" alt="" />
                <Link to='/home'>
                <p className="legend">Books</p>
                </Link>
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