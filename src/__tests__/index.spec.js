/* eslint-disable linebreak-style */
import setUp from '../main.js';
import '../index.js';

// eslint-disable-next-line no-undef
jest.mock('../main.js');
// eslint-disable-next-line no-undef
test('Setup pokedex', () => {
  // eslint-disable-next-line no-undef
  expect(setUp)
    .toHaveBeenCalledTimes(1);
});
