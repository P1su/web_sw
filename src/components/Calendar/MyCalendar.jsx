import Calendar from 'react-calendar';
import '../../styles/Calendar.css';

const MyCalendar = () => {
  return(
    <Calendar 
      calendarType = "gregory"
      next2Label={null}
      prev2Label={null}
    />
  );
};

export default MyCalendar;