import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactSelect from './components/ReactSelect';
import * as DatePicker from './components/DatePicker';
import ReactReduxForm from './components/ReactReduxForm';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Router>
          <ul>
            <li>
              <Link to="/">DatePicker</Link>
            </li>
            <li>
              <Link to="/select">ReactSelect</Link>
            </li>
            <li>
              <Link to="/react-redux-form">ReactReduxForm</Link>
            </li>
          </ul>

          <Route path="/" exact component={DatePicker.DatePickerDay }/>
          <Route path="/select" component={ReactSelect }/>
          <Route path="/react-redux-form" component={ReactReduxForm }/>
        </Router>
      </div>
      // <div>
      //   <h1>common time picker</h1>
      //   <DatePicker.DatePickerDay />
      //   <ReactSelect />
      //   <h1>input field DatePicker</h1>
      //   <DatePicker.DayPickerInput />
      //   <h1>show outside days</h1>
      //   <DatePicker.DatePickerDay showOutsideDays/>
      //   <h1>showWeekNumbers</h1>
      //   <DatePicker.DatePickerDay
      //     showWeekNumbers
      //     onWeekClick={(week, days) => console.log(week, days)} />
      //   <ReactSelect />
      //   <h1>fixedWeeks</h1>
      //   <DatePicker.DatePickerDay fixedWeeks/>
      // </div>
    );
  }
}

export default App;
