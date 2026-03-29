import {useState} from 'react'
import { useContext } from "react";
import DataContext from "./DataContext.js";
import { ChevronDown } from 'lucide-react';


const Filter =()=>{
  const { sortBy, setSortBy } = useContext(DataContext);
  const [filterIsActive, setFilterIsActive] = useState(false);

  return(
    <>
      <style>
        {`
.filterContainer {
  user-select: none
}

.label {
  font-size: 12px;
  font-weight: 300;
  color: #222222;
  letter-spacing: -0.01em;
}

.filterToggle {
  border: 1px solid #DDDDDD;
  border-radius: 8px;
  width: 150px;
  padding: 8px 12px;
  background: #FFFFFF;
  cursor: pointer;
  transition: all 0.15s ease;
  font-size: 12px;
  font-weight: 400;
  color: #222222;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  position: relative;
  display:flex;
  align-items: center;
  justify-content:space-between;
}

.filterToggle:hover {
  border-color: #222222;
}


.filterItemContainer {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin-top: 4px;
  position: absolute;
  z-index: 10;
  width: 150px;
}

.filterItemContainer span {
  border: none;
  border-radius: 0;
  background: #FFFFFF;
  padding: 8px 12px;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  color: #222222;
  transition: background-color 0.15s ease;
  border-bottom: 1px solid #F7F7F7;
}

.filterItemContainer span:last-child {
  border-bottom: none;
}

.filterItemContainer span:hover {
  background: #F7F7F7;
}

.toggleActive .icon{
    transform: rotate(180deg); /* Rotated when active */

    transition: all 0.4s ease;

}
 .icon{

    transform: rotate(0deg); /* Starting position */

}

.filterItemContainer span.selected {
  background: #FF385C;
  color: #FFFFFF;
  font-weight: 600;
}
        `}
          </style>

    <div className='filterContainer '>
      <div className='label'>
        Sort By
      </div>
      <div className={filterIsActive ? 'filterToggle toggleActive' : 'filterToggle toggleNotActive'}
          onClick={() => setFilterIsActive(previous => !previous)}>
          {sortBy}
          <span className='icon'><ChevronDown /></span>
      </div>

      {filterIsActive &&
          (
            <div className='filterItemContainer'>
              <span onClick={() => {setSortBy("Oldest First"); setFilterIsActive(false)}}>Oldest First</span>
              <span onClick={() => {setSortBy("Newest First");  setFilterIsActive(false)}}>Newest First</span>
            </div>

          )

      }
    </div>


    </>
  )
}

export default Filter
