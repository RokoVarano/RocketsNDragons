import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MissionsPage from './MissionsPage';

const description = 'For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.';

const initialState = {
  rockets: [{
    id: 1, mission_name: 'test mission', description, reserved: false,
  }],
};
const mockStore = configureStore();
let store;

describe('Test Button component', () => {
  // Arrange
  store = mockStore(initialState);
  const data = {
    mission_id: 1,
    mission_name: 'test mission',
    description,
    reserved: false,
  };

  const joinMissionHandler = jest.fn();

  const leaveMissionHandler = jest.fn();
  // Act

  const component = render(
    <Provider store={store}>
      <MissionsPage
        key={data.mission_id}
        joinMissionHandler={joinMissionHandler}
        leaveMissionHandler={leaveMissionHandler}
        id={data.mission_id}
        name={data.mission_name}
        description={data.description}
        reserved={data.reserved}
      />
    </Provider>,
  );

  // Assert
  test('Testing Button component render', () => {
    component.getByText('test mission');
  });
});
