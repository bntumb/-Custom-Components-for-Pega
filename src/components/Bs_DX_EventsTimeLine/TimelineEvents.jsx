import "./styles/timelineStyles.css";
import FilterSection from './FilterSection';
import { useCallback, useState, useEffect } from 'react';
import ItemCounter from './ItemCounter';
const TimelineEvents =({timelineData,year, months, handleSetDisplayAs, handleSetFilterYear, handleSetFilterMonth, displayBy})=>{
  const [searchYear, setYear] = useState(year)

  useEffect(() => {
    setYear(year);
  }, [year]);

  const handleSetYear = useCallback((yr)=>{
    setYear(yr)
    handleSetFilterYear(yr)
  },[])

  const setDisplayAs =  useCallback((displayOption)=>{
    handleSetDisplayAs(displayOption)
  },[])
  const handleSetMonth = useCallback((mnt)=>{
    handleSetFilterMonth(mnt)
  },[])

  let monthsCount={0:0,1:0,2:0,3:0,4:0,
              5:0,6:0,7:0,8:0,9:0,10:0,11:0}
  const timelineEvents = timelineData
  const filteredByYear = timelineEvents.filter(item=>{
    const dateObj = new Date(item.EventDateTime);
    return (dateObj.getFullYear() === Number(searchYear))
  })

  const hasAnyEvents = filteredByYear.length >0
  for (let i =0; i<filteredByYear.length;i++){
    const dateObj = new Date(filteredByYear[i].EventDateTime);
    monthsCount[dateObj.getMonth()] += 1;
  }

  return (
    <div className='eventFilterContainer'>
      <div className="flexCol monthPicker">

        <div className="flexRow">
        {hasAnyEvents ? (
        Array.from({ length: 12 }).map((_, monthIndex) =>
        monthsCount[monthIndex] > 0 ? (

        <div className="filterItem" key={monthIndex} onClick={()=>{handleSetMonth(monthIndex)}}>
        <ItemCounter
          objectEntry={months[monthIndex]}
          index={monthIndex}
          count={monthsCount[monthIndex]}
        />
        </div>
        ) : null
        )
        ) : (
          <p>No events for this period.</p>
        )}
        </div>
      </div>
      <FilterSection year={searchYear} handleSetYear={handleSetYear} handleSetDisplayAs={setDisplayAs} timelineData={timelineData} displayAs={displayBy}/>

    </div>
  );
}

export default TimelineEvents
