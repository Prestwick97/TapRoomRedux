import React from "react";
import PropTypes from "prop-types";

function PotionDetail(props) {
  const { potion, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Potion Details</h1>
      <h3>
        {potion.name} - {potion.effect}
      </h3>
  <p>{potion.pints}</p>
      <p>
        <em>{potion.price}</em>
      </p>
      <button onClick={props.onClickingEdit}>Update Potion</button>
      <button onClick={() => onClickingDelete(potion.id)}>Remove Potion</button>
      <hr />
    </React.Fragment>
  );
}

PotionDetail.propTypes = {
  potion: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PotionDetail;
