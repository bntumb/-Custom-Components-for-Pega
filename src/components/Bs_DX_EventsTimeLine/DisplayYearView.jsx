import "./styles/timelineStyles.css";
import TimeBlock from "./Timeblock.jsx";

const DisplayYearView = ({timelineData, year, getIcon}) =>{
  const currentYearData = timelineData.filter((item)=>{
    const yearsInData = Number(new Date(item.EventDateTime).getFullYear())
    return(
      yearsInData === Number(year)
    )
  })
  const groupedByMonth = {};
  currentYearData.forEach((item) => {
  const month = new Date(item.EventDateTime).toLocaleString("default", {
    month: "long",
  });

  if (!groupedByMonth[month]) {
    groupedByMonth[month] = [];
  }

  groupedByMonth[month].push(item);
});

  return (
    <div className='timelineContainer'>
      {Object.keys(groupedByMonth).map((month) => (
        <>
          <div className='timelineContainerColumn'>
            <div className="timelineDataCalendar">
              <h5>
              {month}
              </h5>
            </div>
          <div className='timelineDataBlockItem'key={month}>
            {groupedByMonth[month].map((item, index) => (
              <div key={index}>
                <TimeBlock
                  time={new Date(item.EventDateTime).toLocaleString("en-US", {
                    weekday: "long",
                    day: "numeric",
                    month:'long',
                    timeZone: "UTC"
                  })}
                  category={item.Category}
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
      ))}
    </div>
  )
}
export default DisplayYearView
