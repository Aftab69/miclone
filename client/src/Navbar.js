import React from 'react';
import Data from "./data/data.json";

const Navbar = () => {
  return (
  <><div className='navBar'>
        <div className='logoFix'>
            <img src={Data.logo} alt="logo" />
        </div>
        <div className='navContents'>
            <h5>Mi Phones</h5>
            <h5>Redmi Phones</h5>
            <h5>TV</h5>
            <h5>Laptops</h5>
            <h5>Fitness &#38; Lifestyle</h5>
            <h5>Home</h5>
            <h5>Radio</h5>
            <h5>Accessories</h5>
        </div>
        <div className='searchBar'>
           <input placeholder='Search Products' />
           <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="icon"/>
        </div> 
    </div>   
  </>
  );
}

export default Navbar;

      