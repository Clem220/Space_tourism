import PropTypes from 'prop-types'
import { Fragment } from 'react';

function DestinationCard({ title, description, distance, travel, ImgSrc, ImgAlt }) {
  return (
    <Fragment>
    <article>
    <img src={ImgSrc} alt={ImgAlt} />
    </article>
    <article>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div> 
      <div>
        <span>{distance}</span>
        <span>{travel}</span>
      </div>
    </article>
    </Fragment>
  );
}

DestinationCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    distance: PropTypes.string,
    travel: PropTypes.string,
}

export default DestinationCard