import React from 'react';
import { SubHeading } from '../../components/Subheading';
import { images } from '../../constants';
import './header.css';


const Header = () => {
  return (
    <div className="app__header app__wrapper">
      <div className="app__wrapper_info">
        <SubHeading  />
      </div> 

      <div className="app__wrapper_img">
        
      </div>
    </div>
  )
}

export default Header;
