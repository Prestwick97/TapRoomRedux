import potionListReducer from '../../reducers/potion-list-reducer';

describe('potionListReducer', () => {
  let action;
  const potionData = {
    name: "magic",
    effect: "Makes you giggle",
    pints: 30,
    price: 200,
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(potionListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new potion data to masterPotionList', () => {
    const { name, effect, pints, price } = potionData;
    action = {
      type: ADD_POTION,
      name: name,
      effect: effect,
      pints: pints,
      price: price,
      id: id
    };

    expect(potionListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });
});