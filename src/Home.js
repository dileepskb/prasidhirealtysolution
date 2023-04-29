import React from 'react'
import { Link } from "react-router-dom";
import img1 from "./img/kitchen-stove-sink-kitchen-counter-3497491.webp"
import img2 from "./img/living-room-2732939_1920.webp"
// import mobbanner from "./img/mob_banner.webp"


export const Home = () => {
  return (
    <div>
       <div className='banner'>
         <div className='container'>
            <div className='row'>
                <div className='col-sm-6 col-12'>
                    {/* <div className='mobileBanner'>
                        <img src={mobbanner} className="img-fluid" />
                    </div> */}
                    <div className='bannerText'>
                        <p>BEAUTIFUL INVESTMENTS</p>
                        <h1>Everyone Deserves <br />the Opportunity of <br />the Home</h1>
                        <Link>View Property</Link>
                    </div>
                </div>
            </div>
           </div>
       </div>
       <div className='features'>
       <div className="container">
<div className="row">
<div className="col-lg-12">
<div className="section_tittle">
<h1>Our Passion is <br />
People What’s Yours?</h1>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6 col-lg-3 col-6">
<div className="single_passion">
<div className="single_passion_item">
<a href="#" className="passion_icon"> <i className="fa fa-home"></i> </a>
<h4>Creative Design</h4>
<p>Hac facilisi ac vitae consec tetu commod vel magna suspen disse on senectus
pharetra magnfauc bed</p>
<a href="#" className="btn_2">Read More <span className="ti-arrow-right"></span></a>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3 col-6">
<div className="single_passion">
<div className="single_passion_item">
<a href="#" className="passion_icon"> <i className="fa fa-bed"></i> </a>
<h4>Experience Style</h4>
<p>Hac facilisi ac vitae consec tetu commod vel magna suspen disse on senectus
pharetra magnfauc bed</p>
<a href="#" className="btn_2">Read More <span className="ti-arrow-right"></span></a>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3 col-6">
<div className="single_passion">
<div className="single_passion_item">
<a href="#" className="passion_icon"> <i className="fa fa-bath"></i> </a>
<h4>Product Research</h4>
<p>Hac facilisi ac vitae consec tetu commod vel magna suspen disse on senectus
pharetra magnfauc bed</p>
<a href="#" className="btn_2">Read More <span className="ti-arrow-right"></span></a>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3 col-6">
<div className="single_passion">
<div className="single_passion_item">
<a href="#" className="passion_icon"> <i className="fa fa-money"></i> </a>
<h4>Affordable Price</h4>
<p>Hac facilisi ac vitae consec tetu commod vel magna suspen disse on senectus
pharetra magnfauc bed</p>
<a href="#" className="btn_2">Read More <span className="ti-arrow-right"></span></a>
</div>
</div>
</div>
</div>
</div>
       </div>
       <div className="room_part">
<div className="container-fluid">
<div className="row">
<div className="col-md-6 col-lg-6">
<div className="room_1">
<img src={img1} alt="" />
<div className="room_text_1">
<h1>Real Estate</h1>
<p>We’ll work closely with you to give you the beat options for all the investment that you need, because we know your hard money better.</p>
<a href="#" className="btn_2">Read More <span className="ti-arrow-right"></span></a>
</div>
</div>
</div>
<div className="col-md-6 col-lg-6">
<div className="room_2">
<img src={img2} alt="" />
<div className="room_text_2">
<h1>Commercial/ Residential/Land</h1>
<p>We will provide you all the options of real estate market.</p>
<a href="#" className="btn_2">Read More <span className="ti-arrow-right"></span></a>
</div>
</div>
</div>
</div>
</div>
</div>
    </div>
  )
}
