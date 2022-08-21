import { Fragment, useState } from "react";
import technology from "../../pages/Technology/technology";

function TechnologyCard() {
  let initialState = 0;
  const [index, setIndex] = useState(initialState);

  return(
  <Fragment>
    <article>
        <h1>03 SPACE LAUNCH 101</h1>
      <div>
        <span onClick={() => setIndex(initialState )}>1</span>
        <span onClick={() => setIndex(initialState + 1)}>2</span>
        <span onClick={() => setIndex(initialState + 2)}>3</span>
      </div>
      <div>
        <h2>THE TERMINOLOGY...</h2>
        <h3>{technology[index].name}</h3>
        <p>{technology[index].description}</p>
      </div>
    </article>
    <article>
        <img src={require(`../../assets/technology/${technology[index].images.portrait}`)} alt="" />
    </article>
  </Fragment>
  )
}

export default TechnologyCard