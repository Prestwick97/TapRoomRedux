import potionListReducer from '../../reducers/potion-list-reducer';

describe('potionListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(potionListReducer({}, { type: null })).toEqual({});
  });
});