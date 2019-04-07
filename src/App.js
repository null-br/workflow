import React, { Component } from 'react';
import ReactSelect from './components/ReactSelect';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ReactSelect />
      </div>
    );
  }
}

export default App;
