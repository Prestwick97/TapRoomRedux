import React from "react";
import PropTypes from "prop-types";

function PotionDetail(props){
  const { potion, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Potion Details</h1>
      <h3>{potion.effect} - {potion.name}</h3>
      <p><em>{potion.price}</em></p>
      <button onClick={()=> onClickingDelete(potion.id) }>Exit Potion</button>
      <hr/>
    </React.Fragment>
  );
}

PotionDetail.propTypes = {
  potion: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default PotionDetail;