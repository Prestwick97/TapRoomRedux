import React from "react";
import PropTypes from "prop-types";

function Potion(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPotionClicked(props.id)}>
        <p>{props.name}</p>
        <p>{props.effect}</p>
        <p><em>{props.price}</em></p>
        <p>{props.pints}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Potion.propTypes = {
  name: PropTypes.string,
  effect: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  pints: PropTypes.number,
  whenPotionClicked: PropTypes.func
};

export default Potion;