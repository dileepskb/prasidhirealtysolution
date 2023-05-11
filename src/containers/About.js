import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from "./../img/joel-filipe-RFDP7_80v5A-unsplash.webp";

const About = () => {
  return (
    <div>
       <div className='MainHeadingBox'>
          <h1>About Us</h1>
          <div className='pagination'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="home">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                </ol>
          </div>
       </div>
       <section className="about">
          <div className='container-fluid'>
              <div className='row'>
                  <div className='col-sm-6'>
                    <div className='AboutImg'>
                        <img src={aboutImg} className="img-fluid" alt='About Us' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='aboutContent'>
                    <div className="about_text">
                        <h2>Living From <br />
                        The Team That Cares</h2>
                        <p>Prasidhi Realty Solutions is a renowned and plausible Real Estate consultant based in Gurugram for 6 years.
We have delivered smiles to thousands of customers by providing the best investment options as a responsible Real Estate Consultant.</p>
                         
                        <ul>
                            <li>
                               <h3><span className=""></span>We'll Find You The Perfect Space</h3>
                               <p>We work as hard as we can for our customers to help them to achieve their dream home.</p>
                            </li>
                            <li>
                               <h3><span className=""></span>We Work With Your Budget</h3>
                               <p>We deal in different types of properties so that we can provide properties to our customers according to their budget</p>
                            </li>
                            <li>
                               <h3><span className=""></span>We Deliver Smiles To Customers</h3>
                               <p>Going the extra mile will not only result in a happy customer, but it can also go a long way in terms of future business.</p>
                            </li>
                        </ul>
                        <Link to="/" className="btn_1">Read More</Link>
                     </div>
                    </div>
                  </div>
              </div>
          </div>
        </section>
        <section className='aboutFeature'>
            <div className='container'>
                <div className='AboutFeatureText'>
                    <h2>Core Values</h2>
                    <p>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>
                </div>
                <div className='AboutFeatureText'>
                    <h2>Our Story</h2>
                    <p>Whether you are planning to buy a property or sell, We have solutions for all your needs. The assistance offered by our professional is always customer-centric. The honesty and integrity of our working have enabled as to achieve success at accelerated growth. We make sure to offer the best services at the most competitive process. We believe in putting customers first and our most important objective as a company is to consistently meet or exceed the requirements of our clients. Our portfolio of property investments is based on the premise that it must be useful to the end-user for a specific purpose and not for speculation. We compile a list of properties after a thorough assessment of the area and keeping in mind the end-user needs. We recommend only those properties with strong Potential for development to investors.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
