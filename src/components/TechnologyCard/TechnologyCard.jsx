import { Fragment, useState } from "react";
import technology from "../../pages/Technology/technology";
import "./technology.scss"

function TechnologyCard() {
  let initialState = 0;
  const [index, setIndex] = useState(initialState);

  return (
    <Fragment>
      <article className="technology">
        <div className="technology-alignment-v">
        <h1 className="technology__title"><span className="technology__title-index">03</span> SPACE LAUNCH 101</h1>
          <div className="technology-alignment-h">
        <div className="technology__selector">
          <input
            type="radio"
            name="selector"
            id="1"
            className="technology__selector__input"
            defaultChecked
            onClick={() => setIndex(initialState + 0)}
          />
          <label className="technology__selector__label" htmlFor="1">
            1
          </label>
          <input
            type="radio"
            name="selector"
            id="2"
            className="technology__selector__input"
            onClick={() => setIndex(initialState + 1)}
          />
          <label className="technology__selector__label" htmlFor="2">
            2
          </label>
          <input
            type="radio"
            name="selector"
            id="3"
            className="technology__selector__input"
            onClick={() => setIndex(initialState + 2)}
          />
          <label
            className="technology__selector__label"
            htmlFor="3"
          >
            3
          </label>
        </div>
        <div className="technology__content">
          <h2 className="technology__content__subtitle">THE TERMINOLOGY...</h2>
          <h3 className="technology__content__name">{technology[index].name}</h3>
          <p className="technology__content__description">{technology[index].description}</p>
          </div>
        </div>
        </div>
      </article>
      <article className="technology">
        <img
          className="technology__img"
          src={require(`../../assets/technology/${technology[index].images.portrait}`)}
          alt=""
        />
      </article>
    </Fragment>
  );
}

export default TechnologyCard;
