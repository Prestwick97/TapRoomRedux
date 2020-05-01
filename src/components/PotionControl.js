import React from 'react';
import NewPotionForm from './NewPotionForm';
import PotionList from './PotionList';
// import Proptypes from 'prop-types';
import PotionDetail from './PotionDetail';
// import EditPotionForm from './EditPotionForm';

class PotionControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterPotionList: [],
      selectedPotion: null,
      editing: false
    };
  }
  
  handleClick = () => {
    if (this.state.selectedPotion != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPotion: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewPotionToList = (newPotion) => {
    const newMasterPotionList = this.state.masterPotionList.concat(newPotion);
    this.setState({masterPotionList: newMasterPotionList, formVisibleOnPage: false});
  }

  handleChangingSelectedPotion = (id) => {
    const selectedPotion = this.state.masterPotionList.filter(potion => potion.id === id)[0];
    this.setState({selectedPotion: selectedPotion, formVisibleOnPage:false});
  }

  handleDeletingPotion = (id) => {
    const newMasterPotionList = this.state.masterPotionList.filter(potion => potion.id !== id);
    this.setState({masterPotionList: newMasterPotionList, selectedPotion: null});
  }

  
  handleEditClick = () => {
    this.setState({ editing: true });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPotionForm onNewPotion={this.handleAddingNewPotionToList} />;
      buttonTest = "Return to Potion Draft List";
    } else if(this.state.formVisibleOnPage === false && this.state.selectedPotion === null){
      currentlyVisibleState = <PotionList potionList={this.state.masterPotionList}
      onPotionSelection={this.handleChangingSelectedPotion}
      onClickingDelete={this.handleDeletingPotion} />;
      buttonText = "Add new potion";
    } else {
      currentlyVisibleState = <PotionDetail 
      potion={this.state.selectedPotion}
      onClickingDelete={this.handleDeletingPotion}
      onClickingEdit={this.handleEditingPotionInList}/>;
      buttonText = "Return to Potion Draft List"
    }
    // if (this.state.selectedpotion != null) {
    //   currentlyVisibleState = <PotionDetail potion = {this.state.selectedPotion} onClickingDelete = {this.handleDeletingPotion} />
    //   buttonText = "Return to Potion List";
    // }
    // else if (this.state.formVisibleOnPage) {
    //   currentlyVisibleState = <NewPotionForm onNewPotionCreation={this.handleAddingNewPotionToList} />;
    //   buttonText = "Return to Potion List";
    // } else {
    //   currentlyVisibleState = <PotionList potionList={this.state.masterPotionList} onPotionSelection={this.handleChangingSelectedPotion} />;
    //   buttonText = "Add Potion";
    // }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default PotionControl;