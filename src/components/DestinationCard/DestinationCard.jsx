import { Fragment, useState } from "react";
import destinations from "../../pages/Destination/destinations";
import "./destinationCard.scss";

function DestinationCard() {
  let initialState = 0;
  const [index, setIndex] = useState(initialState);

  return (
    <Fragment>
      <article className="imgContent">
        <h1 className="imgContent__title">
          <span className="imgContent__title__index">01</span> PICK YOUR
          DESTINATION
        </h1>
        <img
          className="imgContent__img"
          src={require(`../../assets/destination/${destinations[index].images.png}`)}
          alt=""
        />
      </article>
      <article className="descriptionContent">
        <div className="descriptionContent__selector">
          <span
            className="descriptionContent__selector__item"
            onClick={() => setIndex(initialState + 0)}
          >
            Moon
          </span>
          <span
            className="descriptionContent__selector__item"
            onClick={() => setIndex(initialState + 1)}
          >
            Mars
          </span>
          <span
            className="descriptionContent__selector__item"
            onClick={() => setIndex(initialState + 2)}
          >
            Europa
          </span>
          <span
            className="descriptionContent__selector__item"
            onClick={() => setIndex(initialState + 3)}
          >
            Titan
          </span>
        </div>
        <h2 className="descriptionContent__title">
          {destinations[index].name}
        </h2>
        <p className="descriptionContent__description">
          {destinations[index].description}
        </p>
        <div className="descriptionContent__travelInfo">
          <span className="descriptionContent__travelInfo__distance">
            <span>AVG. DISTANCE</span>
            {destinations[index].distance}
          </span>
          <span className="descriptionContent__travelInfo__travel">
            <span>EST. TRAVEL TIME</span>
            {destinations[index].travel}
          </span>
        </div>
      </article>
    </Fragment>
  );
}

export default DestinationCard;
