import React from 'react';
import { Carousel } from 'react-bootstrap';
import Data from './data/data.json';

const Slider = () => {
  const dataArray = Data.banner.start;
  
  return (
    <>
    <Carousel fade>
    {
      dataArray.map((eachDataArrayElement)=>(   
            <Carousel.Item interval={2000}>
              <img 
                className='d-block w-100'
                src={eachDataArrayElement}
                alt={eachDataArrayElement}
              />
            </Carousel.Item>
      ))
    }   
    </Carousel>     
    </>
  )

}

export default Slider;