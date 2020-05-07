import potionListReducer from '../../reducers/potion-list-reducer';

describe('potionListReducer', () => {
  let action;

  let action;

  const currentState = {
    1: {name:'Horror',
    effect: 'Creazy nightmares',
    price: 3,
    pints: 30,
    id: 1 },
    2: {name:'Lustine',
    effect: 'Creazy dreams',
    price: 7,
    pints: 30,
    id: 2 }
  }
  
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

  test('Should successfully add new potion data to masterpotionList', () => {
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
        name: name,
        effect: effect,
        pints: pints,
        price: price,
        id: id
      }
    });
  });
});