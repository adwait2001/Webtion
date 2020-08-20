import React from 'react'

export default function MediaCard(){
    return(
        <div className="section about_section layout_padding dash_bg">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-12">
                     <div className="full">
                        <div className="heading_main text_align_center">
                           <h2 className='dashed'>What We Do</h2>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 first">
                     <div className="full feature_box">
                         <div className="full icon">
                            <img className="default-block" src="img/icon_4.png" alt="#" />
                            <img className="default-none" src="img/icon_4w.png" alt="#" />
                         </div>
                         <div className="full">
                            <h4 >Selling websites</h4>
                         </div>
                         <div className="full">
                           <p>It is a long established fact that a reader will be distracted by the readable content..</p>
                         </div>
                     </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 second">
                     <div className="full feature_box">
                         <div className="full icon">
                            <img className="default-block" src="img/icon_2.png" alt="#" />
                            <img className="default-none" src="img/icon_2w.png" alt="#" />
                         </div>
                         <div className="full">
                            <h4>Monthly SEO Task</h4>
                         </div>
                         <div className="full">
                           <p>It is a long established fact that a reader will be distracted by the readable content..</p>
                         </div>
                     </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 third">
                     <div className="full feature_box">
                         <div className="full icon">
                            <img className="default-block" src="img/icon_3.png" alt="#" />
                            <img className="default-none" src="img/icon_3w.png" alt="#" />
                         </div>
                         <div className="full">
                            <h4>Free Hosting and Domain</h4>
                         </div>
                         <div className="full">
                           <p>It is a long established fact that a reader will be distracted by the readable content..</p>
                         </div>
                     </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 fourth">
                     <div className="full feature_box">
                         <div className="full icon">
                            <img className="default-block" src="img/icon_1.png" alt="#" />
                            <img className="default-none" src="img/icon_1w.png" alt="#" />
                         </div>
                         <div className="full">
                            <h4>Online marketing</h4>
                         </div>
                         <div className="full">
                           <p>It is a long established fact that a reader will be distracted by the readable content..</p>
                         </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        
    )
}