

import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewPotionForm(props){
  function handleNewPotionSubmission(event){
    event.preventDefault();
    
    props.onNewPotionCreation({
      name: event.target.name.value, 
      effect: event.target.effect.value, 
      price: event.target.price.value, 
      pints: 200,
      id: v4()
    });
  }
  
  return (
    <ReusableForm
    formSubmissionHandler={handleNewPotionSubmission} />
    );
  }
  
  NewPotionForm.propTypes = {
    onNewPotionCreation: PropTypes.func
  }
  
  export default NewPotionForm;