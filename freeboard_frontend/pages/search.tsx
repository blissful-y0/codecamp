import React, {useState} from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

export default function App() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedDateTwo, handleDateChangeTwo] = useState(new Date());

  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '23%',
          justifyContent: 'space-around',
          height: '60px auto',
          border: '1px solid #F2F2F2',
          boxSizing: 'border-box',
          borderRadius: '10px',
          alignContent: 'center',
          padding: '14px 16px',
        }}
      >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker value={selectedDateTwo} onChange={handleDateChangeTwo} />
        </MuiPickersUtilsProvider>
      </div>
    </>
  );
}
