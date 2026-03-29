import "./styles/timelineStyles.css";
import TimeBlock from "./Timeblock.jsx";

const DisplayMonthView = ({timelineData, year, month, getIcon}) =>{



  const currentYearData = timelineData.filter((item)=>{
    const yearsInData = Number(new Date(item.EventDateTime).getFullYear())
    const monthsInData = Number(new Date(item.EventDateTime).getMonth())
    return(
      yearsInData === Number(year) && monthsInData == Number(month)
    )
  })


  const groupedByDay = {};
  currentYearData.forEach((item) => {

  const date =  new Date(item.EventDateTime).toISOString().split("T")[0];

  if (!groupedByDay[date]) {
    groupedByDay[date] = [];
  }

  groupedByDay[date].push(item);
});

  return (
  <>
    <div className='timelineContainer'>
      {Object.keys(groupedByDay).map((day, item) => {
        const date = new Date(day);

        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
        const dayDate = date.getDate()

      return (
        <>

          <div className='timelineContainerColumn'>
            <div className="timelineDataCalendar">
              <h5>
              {dayName} {dayDate}
              </h5>
            </div>
          <div className='timelineDataBlockItem'key={day}>
          {groupedByDay[day].map((item, index) => (
            <div key={index}>
              <TimeBlock
                date={item.EventDateTime}
                category={item.Category}
                time={new Date(item.EventDateTime).toLocaleTimeString("en-GB", { hour12: false }).slice(0,-3)}
                icon={getIcon(item.Category)}
                description={item.Description}
                caseType={item.caseType}
                insKey={item.insKey}
              />
            </div>
          ))}
          </div>
        </div>
        </>
      )

    }
      )}
    </div>
  </>

  )
}
export default DisplayMonthView
