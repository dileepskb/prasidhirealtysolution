import React, { useState} from 'react'
import logo from './logo.webp'
 import { Link } from "react-router-dom"

const Header = () => {
  const [nav, setNav ] = useState("");
  return (
    <div className='header'>
      <div className='container'>
        <div className="row">
            <div className='col-sm-2 col-5'>
                <div className='logo'>
                   <img src={logo} className="img-fluid" />
                </div>
            </div>
            <div className='col-sm-8 col-2'>
                <button onClick={() => setNav("active")} className='barbtn'><i className='fa fa-bars'></i></button>
                <div className={"menus "+ nav}>
                   <button className='closebtn' onClick={() => setNav("")}><i className='fa fa-close'></i></button>
                   <ul>
                      <li><Link to='/'>Home</Link></li>
                      <li><Link to='/'>About Us</Link></li>
                      <li><Link to='/'>Agents</Link></li>
                      <li><Link to='/'>Services</Link></li>
                      <li><Link to='/'>Blogs</Link></li>
                      <li><Link to='/'>Contact Us</Link></li>
                   </ul>
                </div>
            </div>
            <div className='col-sm-2 col-5'>
                <div className='contactBtn'>
                    Call us<br />
                    <span>+91 9315242836</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
