import { Fragment, useState } from "react";
import destinations from "../../pages/Destination/destinations";
import "./destinationCard.css";

function DestinationCard() {
  let initialState = 0;
  const [index, setIndex] = useState(initialState);

  return (
    <Fragment>
      <article className="imgContent">
        <img
          src={require(`../../assets/destination/${destinations[index].images.png}`)}
          alt=""
        />
      </article>
      <article className="descriptionContent">
        <div>
          <span onClick={()=> setIndex(initialState + 0)}>Moon</span>
          <span onClick={()=> setIndex(initialState + 1)}>Mars</span>
          <span onClick={()=> setIndex(initialState + 2)}>Europa</span>
          <span onClick={()=> setIndex(initialState + 3)}>Titan</span>
        </div>
        <div>
          <h1>{destinations[index].name}</h1>
          <p>{destinations[index].description}</p>
        </div>
        <div className="travelInfoContent">
          <span className="distanceContent">
            <span>AVG. DISTANCE</span>({destinations[index].distance})
          </span>
          <span className="travelContent">
            <span>EST. TRAVEL TIME</span>
            {destinations[index].travel}
          </span>
        </div>
      </article>
    </Fragment>
  );
}

export default DestinationCard;
