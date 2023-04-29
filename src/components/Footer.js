import React from 'react'
import logo from './logo.webp'

const Footer = () => {
  return (
    <div>
      <footer className="footer_part">
<div className="container">
<div className="row">
<div className="col-sm-6 col-lg-3">
<div className="single_footer_part">
<h4>About Us</h4>
<p>Prasidhi Realty Solutions Gurgaon, We are consultant so you can find here better options for your dream property. Call us or Mail us we are always help you whenever you can take a call for investment.</p>
<a href="index.html" className="footer_logo"> <img src={logo} className="img-fluid footerlogo" /> </a>
</div>
</div>
<div className="col-sm-6 col-lg-3">
<div className="single_footer_part">
<h4>Contact Info</h4>
<p>Address : Q5/2 DLF PHASE 2 GURGAON</p>
<p>Phone : +91 8368799968</p>
<p>Email : prasidhirealitysolutions@gmail.com</p>
</div>
</div>
<div className="col-sm-6 col-lg-3">
<div className="single_footer_part">
<h4>Important Link</h4>
<ul className="list-unstyled">
<li><a href=""> About us</a></li>
<li><a href="">Services</a></li>
<li><a href="">Properties</a></li>
<li><a href="">Agents</a></li>
<li><a href="">Blog</a></li>
</ul>
</div>
</div>
<div className="col-sm-6 col-lg-3">
<div className="single_footer_part">
<h4>Newsletter</h4>
<p>Prasidhi Realty Solutions Gurgaon
</p>
<div className="mail_part">
<input type="text" placeholder="Email Address" className="placeholder hide-on-focus" />
<a href="" className="email_icon"><i className="far fa-paper-plane"></i></a>
</div>
</div>
</div>
</div>
<hr />
<div className="row">
<div className="col-sm-6 col-lg-6">
<div className="copyright_text">
<p>
Copyright © 2023 All rights reserved 
</p>
</div>
</div>
<div className="col-sm-6 col-lg-6">
<div className="footer_icon">
<ul className="list-unstyled">
<li><a href="#" className="single_social_icon"><i className="fa fa-facebook-f"></i></a></li>
<li><a href="#" className="single_social_icon"><i className="fa fa-twitter"></i></a></li>
<li><a href="#" className="single_social_icon"><i className="fa fa-globe"></i></a></li>
<li><a href="#" className="single_social_icon"><i className="fa fa-behance"></i></a></li>
</ul>
</div>
</div>
</div>
</div>
</footer>
    </div>
  )
}

export default Footer
