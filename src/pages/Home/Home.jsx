import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../../assets/home/background-home-desktop.jpg"

const Content = styled.section`
z-index: 0;
    height: 100vh;
    width: 100vw;
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #FFFF;
`
const ArticleContent = styled.article`
width: 50vw;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Circle = styled.div`
width: 274px;
height: 274px;
display: flex;
align-items: center;
justify-content: center;
background-color: #fff;
border-radius: 25vh;
`

function Home() {
  return (
    <Content >
      <ArticleContent>
        <h1>
          So, you want to travel to <span>space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </ArticleContent>
      <ArticleContent>
        <Link to="/Destination">
          <Circle>
        <h2>Explore</h2>
        </Circle>
        </Link>
      </ArticleContent>
    </Content>
  );
}

export default Home;
