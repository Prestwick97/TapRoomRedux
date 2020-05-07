export default (state = {}, action) => {
  const { name, effect, price, pints, id } = action;
  switch (action.type) {
  case 'ADD_POTION':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        effect: effect,
        price: price,
        pints: pints,
        id: id
      }
    });
  default:
    return state;
  }
};