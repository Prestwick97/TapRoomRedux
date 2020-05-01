import React from "react";
import Potion from "./Potion";
import PropTypes from 'prop-types';

function Potionlist(props){
  
  return (
    <React.Fragment>
    <hr/>
    {props.potionList.map((potion) => (
      <div>
      <Potion 
        whenPotionClicked = { props.onPotionSelection }
        name={potion.name}
        effect={potion.effect}
        price={potion.price}
        pints={potion.pints}
        id={potion.id}
        key={potion.id}/>
        <button onClick={() => props.onSellPint(potion.id)}>Sell Pint</button>
        </div>
      ))}
    </React.Fragment>
  );
}

Potionlist.propTypes = {
  potionList: PropTypes.array,
  onPotionSelection: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onSellPint: PropTypes.func
};

export default Potionlist;