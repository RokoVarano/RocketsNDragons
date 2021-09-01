/**
 * @jest-environment jsdom
 */

import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DragonWidget from './DragonWidget';

const mockStore = configureStore();

describe('Test Button component', () => {
  const store = mockStore([]);
  const dragons = [{
    id: 1,
    name: 'Dragon 1',
    type: 'Pod',
    flickr_images: ['https://i.imgur.com/9fWdwNv.jpg', 'https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg', 'https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg', 'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg'],
    reserved: false,
  },
  {
    id: 2,
    name: 'Dragon 2',
    type: 'Pod',
    flickr_images: ['https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg', 'https://farm1.staticflickr.com/780/21119686299_c88f63e350_b.jpg', 'https://farm9.staticflickr.com/8588/16661791299_a236e2f5dc_b.jpg'],
    reserved: false,
  }];

  // Assert
  test('Test renders', () => {
    const dragon = dragons[0];
    render(
      <Provider store={store}><DragonWidget dragon={dragon} /></Provider>,
    );

    expect(screen.getByText(dragon.name)).not.toBe(undefined);
    expect(screen.getByText(dragon.type)).not.toBe(undefined);
    expect(screen.getByText('Reserved').classList.contains('MuiBadge-invisible')).toBe(true);
  });
});
