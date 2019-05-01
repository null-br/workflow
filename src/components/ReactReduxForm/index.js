import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineForms } from 'react-redux-form';

import MyForm from './myFormComponent';

const initialUser = { name: '' };

const store = createStore(combineForms({
  user: initialUser,
}));

export default class ReactReduxForm extends Component {
  render() {
    return (
      <Provider store={ store }>
        <MyForm />
      </Provider>
    );
  }
}
