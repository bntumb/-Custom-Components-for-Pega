/**
 * Transforms raw timeline events into
 *  UI-friendly objects
 * and renders them in a horizontal day-by-day timeline.
 */

import { useContext, useMemo, useState, useEffect, useCallback } from "react";
import DataContext from "./DataContext.js";
import TimelineEvents from './TimelineEvents.jsx';



import {
  PoundSterling,
  BriefcaseBusiness,
  Play,
  Pause,
} from "lucide-react";
import "./styles/timelineStyles.css";
import DisplayYearView from './DisplayYearView.jsx';
import DisplayMonthView from './DisplayMonthView.jsx';

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const getIcon = (category) => {
  switch (category) {
    case "Financial":
      return <PoundSterling />;
    case "On Hold":
      return <Pause />;
    case "Off Hold":
      return <Play />;
    default:
      return <BriefcaseBusiness />;
  }
};

const formatDate = (d) =>
  d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const formatTime = (d) =>
  d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

const transformTimelineData = (timelineData, sortBy, year, month) => {
  const sorted = [...timelineData].sort((a, b) => {
    const aDate = new Date(a.EventDateTime);
    const bDate = new Date(b.EventDateTime);
    return sortBy === "Newest First" ? bDate - aDate : aDate - bDate;
  });

  return sorted
    .filter((item) => {
      if (!item.EventDateTime) return false;
      const d = new Date(item.EventDateTime);
      return (
        d.getFullYear() === year &&
        d.getMonth() === month
      );
    })
    .map((item, index) => {
      const dateObj = new Date(item.EventDateTime);

      return {
        id: `event-${index}`,
        dateObj,
        date: formatDate(dateObj),
        time: formatTime(dateObj),
        description: item.Description || "No Description",
        category: item.Category || "Uncategorised",
        icon: getIcon(item.Category),
        caseType: item.caseType,
        insKey: item.insKey,
      };
    });
};

export default function TimeLinePage() {
  const DEFAULT_DISPLAY = 'Year'
  const [displayBy, setDisplayBy] = useState(DEFAULT_DISPLAY)
  const { timelineData = [], sortBy } = useContext(DataContext) || {};
  // Determine oldest available event date
  const oldestDate = useMemo(() => {
    let oldest = null;

    for (const item of timelineData) {
      if (!item?.EventDateTime) continue;

      const d = new Date(item.EventDateTime);
      if (Number.isNaN(d.getTime())) continue;

      if (!oldest || d < oldest) oldest = d;
    }

    return oldest;
  }, [timelineData]);

  // Default to oldest event month/year (fallback to current if no data)
  const year = oldestDate
    ? oldestDate.getFullYear()
    : new Date().getFullYear();

  const month = oldestDate
    ? oldestDate.getMonth()
    : new Date().getMonth();
    const [filterYear, setFilterYear] = useState(year)
    const [filterMonth, setFilterMonth] = useState(year)

    useEffect(() => {
      setFilterYear(year);
      setFilterMonth(month);

    }, [year, month]);

    const handleSetFilterYear = useCallback((year)=>{

      setFilterYear(year);
    },[])

    const handleSetDisplayAs = useCallback((option)=>{

      setDisplayBy(option);
    },[])

    const handleSetFilterMonth = useCallback((month)=>{

      setFilterMonth(month);
    },[])


  return (
    <div className='flexCol'>
        <TimelineEvents timelineData={timelineData} handleSetDisplayAs={handleSetDisplayAs} year={filterYear} month={filterMonth}months={months}  handleSetFilterYear={handleSetFilterYear} handleSetFilterMonth={handleSetFilterMonth} displayBy={displayBy}/>
        {displayBy === 'Month' &&
        <div className="flexRow">
            <h4>
              {months[filterMonth]}
            </h4>
        </div>
        }
        <div className='timelineStyle'>
        <>
          {displayBy === 'Year' &&
            <DisplayYearView timelineData={timelineData} year={filterYear} monthNames={months} getIcon={getIcon}/>
          }
          {displayBy ==='Month' &&
            <DisplayMonthView timelineData={timelineData} year={filterYear} month={filterMonth} monthNames={months} getIcon={getIcon}/>
          }
        </>
      </div>
    </div>
  );
}
