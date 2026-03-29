import ItemCounter from './ItemCounter';
import "./styles/timelineStyles.css";
import UI_Dropdown from './UI_Dropdown';

const VIEW_SETTING  = new Map()
const ORIENTATION_SETTING = new Map();
const YEAR_SETTING = new Map();
VIEW_SETTING.set('list', ['Year', 'Month'])
ORIENTATION_SETTING.set('list', ['Vertical', 'Horizontal','Wrapped'])
YEAR_SETTING.set('list', {})


const Filters = ['']

const FilterSection =({year, handleSetYear, handleSetDisplayAs, timelineData, displayAs, })=>{

  ORIENTATION_SETTING.set('method', handleSetDisplayAs)
  VIEW_SETTING.set('method', handleSetDisplayAs)
  YEAR_SETTING.set('method', handleSetYear)

  YEAR_SETTING.set('state', year)
  VIEW_SETTING.set('state', 'displayAs')
  ORIENTATION_SETTING.set('state', 'Vertical')

  const yearsData= YEAR_SETTING.get('list')

  for (let i =0; i<timelineData.length;i++){
    const dateObj = new Date(timelineData[i].EventDateTime);
    const eventYear = dateObj.getFullYear();
    if (!yearsData[eventYear]) {
      yearsData[eventYear] = 0;
    }
    yearsData[eventYear] += 1;
  }


  return(
    <div className='filterSection'>
      <div>
      </div>

      <UI_Dropdown
        heading={
            <>
              <span>View: </span><p> {displayAs}</p>
            </>
      }
        content={
          VIEW_SETTING.get('list').map((option)=>{
            const action = VIEW_SETTING.get('method')
            return(
            <div className='flexRow'key={option} onClick={() => {action(option)}}>
              <span>{option}</span>
              {displayAs === option && <div className="activeDropdownItem"></div>}
            </div>
            )
          })
        }
      />

        <UI_Dropdown
        heading={
          <>
            <span>Year: </span><p style={{fontWeight:'bold'}}>{year}</p>
          </>
          }


          content={

            typeof( YEAR_SETTING.get('list'))== 'object'?

            Object.entries( YEAR_SETTING.get('list')).map(
            ([year, count]) => {
              return(
                <div key={year} onClick={() => { handleSetYear(year);}}>
                    <ItemCounter objectEntry={year} index={year} count={count}/>
                </div>

          )}):
          VIEW_SETTING.get('list').map((option)=>{
            const action = VIEW_SETTING.get('method')
            return(
            <div className='flexRow'key={option} onClick={() => {action(option)}}>
              <span>{option}</span>
              {displayAs === option && <div className="activeDropdownItem"></div>}
            </div>
            )
          })


        }


          />
    </div>
  )
}

export default FilterSection
