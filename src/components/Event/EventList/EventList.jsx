import styles from './EventList.module.css';
import ReservationItem from './../../reservation/ReservationItem/ReservationItem';
import EventItem from '../EventItem/EventItem';
import { useNavigate } from 'react-router-dom';
import useGetEventList from '../../../hooks/queries/event/useGetEventList';

const EventList = () => {
  const { data } = useGetEventList();
  console.log(data);

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/event/${id}`)
  };

  const formattedDate = (oldDate) => {
    const date = new Date(oldDate);
    const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    return formattedDate;
  }
  return(
    <div className={styles.eventListWrapper}>
      <ReservationItem date='게시일' title='제목' />
      {
        data.map((item) => (
          <EventItem
            key={item.id}
            date={formattedDate(item.event_date)}
            title={item.title}
            onClick={() => handleNavigate(item.id)}
          />
        ))
      }
    </div>
  );
};

export default EventList;