import React, { useState } from 'react';
import "./styles/timelineStyles.css";
import { ChevronDown } from 'lucide-react';



const UI_Dropdown =({heading, content})=>{
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const handleToggleDropdown=()=>{
    setToggleDropdown(prev=>!prev)
  }
  return(<>
  <div className="dropdown">
    <div className='dropdownHeading' onClick={()=>handleToggleDropdown()}>
      {heading}
    <p className='icon'><ChevronDown /></p>
    </div>
    {toggleDropdown!==false &&
    <div className="dropdownContent">

      {React.Children.map(content, (child, index) => (
        <div key={index} className="dropdownItem" onClick={()=>handleToggleDropdown()}>
          {child}
        </div>
      ))}
    </div>
}
  </div>
  </>)
}

export default UI_Dropdown
