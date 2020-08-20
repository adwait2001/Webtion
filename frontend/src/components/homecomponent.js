import React from 'react';
import Product from './ProductComponent';
import Imgcompo from'./imgComponent'
import MediaCard from'./Sideintro'
import Form from './formniche'


function Text({props}){
    return(
        <div className='container spam center'>
              <h1 className='dashed'>Premier Websites</h1>
              <br />
              <h3 className='dashed-sm'>Quality Websites using WordPress</h3>
          </div>
    )
  }

function Home({ props }) {
    return (
        <div>
            <Imgcompo />
            <MediaCard />
            <div className="prod">
                <Text />
                <Product/>
            </div>
            <Form />
        </div>


    )
}

export default Home;