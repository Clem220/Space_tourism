import { Fragment, useState } from "react";
import crew from "../../pages/Crew/crew";


function CrewCard() {
    let initialState = 0;
    const [index, setIndex] = useState(initialState);

  return (
    <Fragment>
      <article>
        <p>{crew[index].role}</p>
        <h2>{crew[index].name}</h2>
        <p>{crew[index].bio}</p>
        <div>
          <span onClick={() => setIndex(initialState + 0)}>test</span>
          <span onClick={() =>  setIndex(initialState + 1)}>test</span>
          <span onClick={() =>  setIndex(initialState + 2)}>test</span>
          <span onClick={() =>  setIndex(initialState + 3)}>test</span>
        </div>
      </article>
      <img src={require(`../../assets/crew/${crew[index].images.png}`)} alt="" />
      <article>
    
      </article>
    </Fragment>
  );
}

export default CrewCard;
