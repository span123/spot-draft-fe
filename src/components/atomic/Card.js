import React from "react";
import PropTypes from "prop-types";
import "./../css/Card.css";

const Card = ({ content, cardClasses, cardContentClasses }) => (
  <div className={`card ${cardClasses}`}>
    <div className={`card-content ${cardContentClasses}`}>{content}</div>
  </div>
);

Card.defaultProps = {
  content: "",
  cardClasses: "",
  cardContentClasses: ""
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node
  ]),
  cardClasses: PropTypes.string,
  cardContentClasses: PropTypes.string
};

export default Card;
