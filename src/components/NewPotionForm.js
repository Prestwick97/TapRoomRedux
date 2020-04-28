import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function NewPotionForm(props) {

  function handleNewPotionFormSubmission(event) {
    event.preventDefault();
    props.onNewPotionCreation({
      name: event.target.name.value, 
      effect: event.target.effect.value, 
      price: event.target.price.value, 
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewPotionFormSubmission}
        buttonText="Add potion" />
    </React.Fragment>
  );
}

NewPotionForm.propTypes = {
  onNewPotionCreation: PropTypes.func
};

export default NewPotionForm;