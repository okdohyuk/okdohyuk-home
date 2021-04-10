import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../src/store';

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
));

addDecorator((story) => <Provider store={store}>{story()}</Provider>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
