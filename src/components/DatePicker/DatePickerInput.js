import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

export default function DatePickerInput() {
  return (
    <div>
      <p>Please type a day:</p>
      <DayPickerInput onDayChange={day => console.log(day)} />
    </div>
  );
}
