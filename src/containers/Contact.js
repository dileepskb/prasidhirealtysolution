import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div>
      <div className='MainHeadingBox'>
          <h1>Contact Us</h1>
          <div className='pagination'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="home">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                </ol>
          </div>
       </div>
       <div className='contactus'>
           <div className='container'>
             <div className='row'>
               <div className='col-sm-8'>
                   <h2>Get in Touch</h2>
                   <div>
                       <from>
                           <div className='row'>
                               <div className='col-sm-6'>
                                   <div className='formbox'>
                                      <input type="text" placeholder="Enter Name *" />
                                   </div>
                               </div>
                               <div className='col-sm-6'>
                                   <div className='formbox'>
                                      <input type="email" placeholder="Enter Email *" />
                                   </div>
                               </div>
                           </div>
                           <div className='row'>
                               <div className='col-sm-12'>
                                   <div className='formbox'>
                                      <input type="text" placeholder="Enter Subject *" />
                                   </div>
                               </div>
                               <div className='col-sm-12'>
                                   <div className='formbox'>
                                     <textarea rows="5" placeholder="Enter Message *">
                                     </textarea>
                                   </div>
                               </div>
                               <div className='col-sm-12'>
                                   <div className='formbox'>
                                     <button className='submitbtn'>Submit</button>
                                   </div>
                               </div>
                           </div>
                       </from>
                   </div>
               </div>
               <div className='col-sm-4'>
                  
                  <div className='contactDetails'>
                      <h2>Connect with Us</h2>   
                      <div className='d-flex pb-2'>
                          <div className='contactIcon'>
                              <i className='fa fa-envelope'></i>
                          </div>
                          <div className='contectText'>
                              <span>EMAIL ID</span>
                              <p><Link to="mailto:shweta.prasidhi@gmail.com">shweta.prasidhi@gmail.com</Link></p>
                          </div>
                      </div>
                      <div className='d-flex pb-2'>
                          <div className='contactIcon'>
                              <i className='fa fa-phone'></i>
                          </div>
                          <div className='contectText'>
                              <span>PHONE NO</span>
                              <p><Link to="tel:919999201310">+91 9999201310</Link></p>
                          </div>
                      </div>
                      <div className='d-flex'>
                          <div className='contactIcon'>
                              <i className='fa fa-home'></i>
                          </div>
                          <div className='contectText'>
                              <span>ADDRESS</span>
                              <p>1415, 14TH FLOOR, GALLERIA MARKET, GURGAON-122001</p>
                          </div>
                      </div>
                  </div>
               </div>
               </div>
           </div>
       </div>
    </div>
  )
}

export default Contact
