import React from 'react'

export default function Footer(props){

    return(
        <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
    
              <div className="col-lg-4 col-md-6 footer-info">
                <h3>WebTion</h3>
                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
              </div>
    
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Terms of service</a></li>
                  <li><a href="#">Privacy policy</a></li>
                </ul>
              </div>
    
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <div>
                  Pict PUNE <br/>
                  Dhankawadi Pune<br/>
                  Maharashtra <br/>
                  <strong>Phone:</strong> 9518394022<br/>
                  <strong>Email:</strong> info@example.com<br/>
    
                <div className="social-links">
                  <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                  <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                  <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                  <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>

    
    
              </div>
        
              
              
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
                <h4>Reviews</h4>
                <ul>
                  Pls review us at our social media handles
                </ul>
              </div>
          </div>
        </div>
    
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>WEBTION</strong>. All Rights Reserved
          </div>
        </div> 
    </div>
     </footer>
    )
}