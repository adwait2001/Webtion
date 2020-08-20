import React from 'react';
import  Product     from './ProductComponent'

function Imgcompo({props}) {
    return (
        <section id="intro" className="clearfix">
            <div className="container">

                <div className="intro-img">
                    <img src='/img/webtion.png' className="img-fluid" />
                </div>

                <div className="intro-info">
                    <h2>We Provide<br /><span>WEBSITES</span><br />To Digitize</h2>
                    <div>
                        <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        <a href="#services" className="btn-services scrollto">Our Services</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Imgcompo;