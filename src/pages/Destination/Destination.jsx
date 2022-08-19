import styled from "styled-components";
import destinations from "./destinations.js";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import background from "../../assets/destination/background-destination-desktop.jpg";
import Tabs from "../../components/SelectDestination/SelectDestination.jsx";
 import "./test.css";
const Content = styled.section`
  -index: 0;
  height: 100vh;
  width: 100vw;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffff;
`;

const Test = styled(Tabs)`
width: 50vW;
display:flex;
flex-direction: column;
`


/*function Destination() {
  return (
    <Content>
      <article>
        <h1>01 Pick your destination</h1>
      </article>
      {destinations.map((destination, index) => (
        <Fragment>
       <SelectDestination
       />
        <DestinationCard
          key={`${destination.name}-${index}`}
          title={destination.name}
          description={destination.description}
          distance={destination.distance}
          travel={destination.travel}
        />
        </Fragment>
      ))}
    </Content>
  );
} */

function Destination() {
  return (
    <Content>
      <Test>
        {destinations.map((destination, index) => (
          <div label={destination.name}>
            <DestinationCard
              key={`${destination.name}-${index}`}
              ImgSrc={destination.images.png}
              title={destination.name}
              description={destination.description}
              distance={destination.distance}
              travel={destination.travel}
            />
          </div>
        ))}
      </Test>
    </Content>
  );
}

export default Destination;
