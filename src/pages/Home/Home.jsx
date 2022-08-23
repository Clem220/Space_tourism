import { Link } from "react-router-dom";
import "./home.scss";



function Home() {
  return (
    <section>
      <article className="textContent">
        <div className="textContent-alignement">
        <h1 className="textContent__title">
          SO, YOU WANT TO TRAVEL TO
          <span className="textContent__title__bigger">SPACE</span>
        </h1>
        <p className="textContent__description">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        </div>
      </article>
      <article className="linkContent">
        <Link  to="/Destination">
          <div className="linkContent__circleDiv__shadow">
            <span className="linkContent__circleDiv__center">
              <h2 className="linkContent__circleDiv__center-title">EXPLORE</h2>
            </span>
          </div>
        </Link>
      </article>
    </section>
  );
}

export default Home;
