/**
 * Renders a single timeline event block.
 * Each block includes:
 * - A vertical timeline "needle"
 * - An event card with icon, category, and description
 * - A date/time label anchored at the bottom
 **/

import { useState } from 'react';

const Block = ({ date, time, icon, category, description}) => {

  const blockId = `block-${Math.random().toString(36).substr(2, 9)}`;
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>
        {`
          .${blockId} {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            position: relative;
            width: 20rem;
            max-width:90%
          }

          .${blockId} .event {
            border-radius: 12px;
            padding: 5px;
            background-color: #0062E6;
            color: white;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.1);
            z-index: 2;
            transition: all 0.3s ease;
            cursor:pointer;
            min-width:200px
          }

          .${blockId} .event-icon {
            display: flex;
            margin-right: 10px;
            background: rgba(255, 255, 255, 0.2);
            padding:5px;
            border-radius: 8px;
            min-width: 30px;
            text-align: center;
          }

          .${blockId} .event-content {
            flex: 1;
          }



          .${blockId} .event-title {
            margin: 0;
          }





          .${blockId} .date {

            color: inherit;
            margin: 0;
          }
.event-content p {
  transition: all 0.3s ease;

}

.blockContainer .event-content {
  transition: transform 0.3s ease, opacity 0.3s ease;
}


        `}
      </style>
      <div className="blockContainer"   >
        <div className={blockId}>
          <div className="outer">
            <div onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}className="event">
              <div className="event-icon">{icon}</div>

              <div className="event-content">
              <div className="event-title">
                <h4>{category} </h4>
              </div>
              <div className="event-description"></div>
              <p>  {hovered
    ? description: description.length > 20
                    ? description.slice(0, 20) + "..."
                    : description} </p>
            </div>
          </div>

          </div>
          <div className="time"><p>{time}</p></div>



        </div>
      </div>
    </>
  );
};


export default Block;
