import "./styles/timelineStyles.css";

const ItemCounter =({objectEntry, index, count})=>{
  return(
    <div className='itemCounterContainer'>
      <div>
    {objectEntry}
      </div>
    <div className="itemCounter">
      {count}
      </div>
    </div>
  )
}
export default ItemCounter;
