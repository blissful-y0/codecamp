import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import {useState} from 'react';

export default function SearchNavigation() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedDateTwo, handleDateChangeTwo] = useState(new Date());
  const today = new Date();

  console.log(selectedDateTwo);

  return (
    <>
      <div
        style={{
          display: 'flex',
          // width: '23%',
          justifyContent: 'space-around',
          height: '60px',
          border: '1px solid #F2F2F2',
          boxSizing: 'border-box',
          borderRadius: '10px',
          alignContent: 'center',
          padding: '14px 16px',
          marginRight: '20px',
        }}
      >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            variant="inline"
            defaultValue={today}
            value={selectedDate}
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div
        style={{
          display: 'flex',
          // width: '23%',
          justifyContent: 'space-around',
          height: '60px',
          border: '1px solid #F2F2F2',
          boxSizing: 'border-box',
          borderRadius: '10px',
          alignContent: 'center',
          padding: '14px 16px',
        }}
      >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            variant="inline"
            defaultValue={today}
            value={selectedDateTwo}
            onChange={handleDateChangeTwo}
          />
        </MuiPickersUtilsProvider>
      </div>
    </>
  );
}
