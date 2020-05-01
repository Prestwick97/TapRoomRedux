import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPotionForm(props) {
  const { potion } = props;

  function handleEditPotionFormSubmission(event) {
    event.preventDefault();
    props.onEditPotion({
      name: event.target.name.value,
      location: event.target.effect.value,
      issue: event.target.price.value,
      id: potion.id
    });
  }

  return (
      <ReusableForm formSubmissionHandler={handleEditPotionFormSubmission} buttonText="Update Potion" />
  );
}

EditPotionForm.propTypes = {
  onEditPotion: PropTypes.func
};

export default EditPotionForm;