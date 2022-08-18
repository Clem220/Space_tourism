import PropTypes from 'prop-types'

function DestinationCard({ title, description, distance, travel }) {
  return (
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
  );
}

DestinationCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    distance: PropTypes.string,
    travel: PropTypes.string,
}

export default DestinationCard