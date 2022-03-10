import React from 'react';
import Data from "./data/data.json";

const Navbar = () => {
  return (
  <><div className='nav'>
        <div className='logoFix'>
            <img src={Data.logo} alt="logo" />
        </div>
        <div className='navContents'>
            <h3>Mi Phones</h3>
            <h3>Redmi Phones</h3>
            <h3>TV</h3>
            <h3>Laptops</h3>
            <h3>Fitness &#38; Lifestyle</h3>
            <h3>Home</h3>
            <h3>Radio</h3>
            <h3>Accessories</h3>
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