import { Fragment, useState } from "react";
import crew from "../../pages/Crew/crew";
import "./crewCard.scss";

function CrewCard() {
  let initialState = 0;
  const [index, setIndex] = useState(initialState);


  return (
    <Fragment>
      <article className="crewContent">
        <div className="crewContent-alignement">
        <h1 className="crewContent__title">
          <span className="crewContent__title__index">02</span> MEET YOUR CREW
        </h1>
        <h4 className="crewContent__role">{crew[index].role}</h4>
        <h3 className="crewContent__name">{crew[index].name}</h3>
        <p className="crewContent__bio">{crew[index].bio}</p>
        <div className="crewContent__selector">
          <input
            className="crewContent__selector__input"
            type="radio"
            id="crewMember-1"
            name="crewMember"
            onClick={() => {setIndex(initialState + 0)}}  
            defaultChecked
            />
          <label
            className="crewContent__selector__label"
            htmlFor="crewMember-1"
            />

          <input
            className="crewContent__selector__input"
            type="radio"
            id="crewMember-2"
            name="crewMember"
            onClick={() => {setIndex(initialState + 1)}}
            />
          <label
            className="crewContent__selector__label"
            htmlFor="crewMember-2"
            />

          <input
            className="crewContent__selector__input"
            type="radio"
            id="crewMember-3"
            name="crewMember"
            onClick={() => {setIndex(initialState + 2)}}
            />
          <label
            className="crewContent__selector__label"
            htmlFor="crewMember-3"
            />

          <input
            className="crewContent__selector__input"
            type="radio"
            id="crewMember-4"
            name="crewMember"
            onClick={() => {setIndex(initialState + 3)}}
            />
          <label
            className="crewContent__selector__label"
            htmlFor="crewMember-4"
            />
        </div>
            </div>
      </article>
      <article className="crewContent__photo">
        <img
          className="crewContent__photo__img"
          src={require(`../../assets/crew/${crew[index].images.png}`)}
          alt="un des membres de l'équipage"
        />
      </article>
    </Fragment>
  );
}

export default CrewCard;
