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
          <input
            type="radio"
            name="selector"
            id="moon"
            className="descriptionContent__selector__input"
            defaultChecked
            onClick={() => setIndex(initialState + 0)}
          />
          <label className="descriptionContent__selector__label" htmlFor="moon">
            MOON
          </label>
          <input
            type="radio"
            name="selector"
            id="mars"
            className="descriptionContent__selector__input"
            onClick={() => setIndex(initialState + 1)}
          />
          <label className="descriptionContent__selector__label" htmlFor="mars">
            MARS
          </label>
          <input
            type="radio"
            name="selector"
            id="europa"
            className="descriptionContent__selector__input"
            onClick={() => setIndex(initialState + 2)}
          />
          <label
            className="descriptionContent__selector__label"
            htmlFor="europa"
          >
            EUROPA
          </label>
          <input
            type="radio"
            name="selector"
            id="titan"
            className="descriptionContent__selector__input"
            onClick={() => setIndex(initialState + 3)}
          />
          <label
            className="descriptionContent__selector__label"
            htmlFor="titan"
          >
            TITAN
          </label>
        </div>
        <div className="descriptionContent-alignement">
        <h2 className="descriptionContent__title">
          {destinations[index].name}
        </h2>
        <p className="descriptionContent__description">
          {destinations[index].description}
        </p>
        <div className="descriptionContent__travelInfo">
          <span className="descriptionContent__travelInfo__distance">
            <span className="descriptionContent__travelInfo__distance-color">AVG. DISTANCE</span>
            {destinations[index].distance}
          </span>
          <span className="descriptionContent__travelInfo__travel">
            <span className="descriptionContent__travelInfo__travel-color">EST. TRAVEL TIME</span>
            {destinations[index].travel}
          </span>
        </div>
        </div>
      </article>
    </Fragment>
  );
}

export default DestinationCard;
