import React from 'react'
import './Footer.css';

 
const Footer = () => {
  const back = {backgroundImage:'url(https://res.cloudinary.com/djqty7gls/image/upload/v1670449775/shape-11_yjib92.png)'};
  const width = {width:'40px'};
  return (
    <footer class="main-footer bg-dark">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/95817e6879.js" crossorigin="anonymous"></script>
      <div class="footer-top pt-130">
      <div class="vector-bg" style={{...back}}></div>
                <div class="auto-container">
                    <div class="row clearfix">
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget logo-widget">
                                <figure class="footer-logo"><img src="https://res.cloudinary.com/djqty7gls/image/upload/v1670449285/logo-new_lco1yc.png" alt="" style={{...width}}></img></figure>
                                <div class="text">
                                    <p>Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm tempor in cididunt ut labore dolore magna aliqua enim.</p>
                                </div>
                                <ul class="social-links clearfix">
                                    <li><a href='https://www.facebook.com/goshoppingonline1' target='_blank'><i class="fa fa-facebook-f"></i></a></li>
                                    <li><i class="fa fa-twitter"></i></li>
                                    <li><a href='https://www.instagram.com/goshop.nsk/' target='_blank'><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget links-widget">
                                <div class="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <div class="widget-content">
                                    <ul class="links-list clearfix">
                                        <li>About Us</li>
                                        <li>Listing</li>
                                        <li>How It Works</li>
                                        <li>Our Services</li>
                                        <li>Our Blog</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget contact-widget">
                                <div class="widget-title">
                                    <h3>Contacts</h3>
                                </div>
                                <div class="widget-content">
                                    <ul class="info-list clearfix">
                                        <li><i class="fa fa-map-marker-alt"></i>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</li>
                                        <li><i class="fa fa-microphone"></i><a href="tel:23055873407">+1(305) 587-3407</a></li>
                                        <li><i class="fa fa-envelope"></i><a href="mailto:info@example.com">info@goshop.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="auto-container">
                    <div class="bottom-inner clearfix">
                        <div class="copyright pull-left">
                            <p><a href="index.html">Go Shop</a> &copy; 2022 All Right Reserved</p>
                        </div>
                        <ul class="footer-nav pull-right">
                            <li><a href="index.html">Terms of Service</a></li>
                            <li><a href="index.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
      </div>

    </footer>
  )
}

export default Footer
