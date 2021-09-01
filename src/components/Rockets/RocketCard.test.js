import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RocketCard from './RocketCard';



    const initialState = { rockets:[{id:1, rocket_name: "test rocket", description:"The Falcon 1 was", flickr_images:["https://imgur.com/DaCfMsj.jpg","https://imgur.com/azYafd8.jpg"]}]}
    const mockStore = configureStore();
    let store;

describe('Test Button component', () => {
  // Arrange
  store = mockStore(initialState);
  const data = 
      { 
          id:1, 
          rocket_name: "test rocket", 
          description:"The Falcon 1 was",
          flickr_images:["https://imgur.com/DaCfMsj.jpg","https://imgur.com/azYafd8.jpg"] 
        } ;
  // Act

  const component = render(<Provider store={store}><RocketCard data={data} /></Provider>);
  

  // Assert
  test('Testing Button component render', () => {
    component.getByText('test rocket');
  });
});