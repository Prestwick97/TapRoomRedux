import React from "react";
import Potion from "./Potion";
import PropTypes from 'prop-types';

function Potionlist(props){
  
  return (
    <React.Fragment>
    <hr/>
    {props.potionList.map((potion) =>
      <Potion 
        whenPotionClicked = { props.onPotionSelection }
        names={potion.name}
        location={potion.effect}
        issue={potion.price}
        id={potion.id}
        key={potion.id}/>
      )}
    </React.Fragment>
  );
}

Potionlist.propTypes = {
  potionlist: PropTypes.array,
  onPotionSelection: PropTypes.func
};

export default Potionlist;