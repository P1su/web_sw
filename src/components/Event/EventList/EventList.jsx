import styles from './EventList.module.css';
import ReservationItem from './../../reservation/ReservationItem/ReservationItem';
import EventItem from '../EventItem/EventItem';
import { useNavigate } from 'react-router-dom';
import useGetEventList from '../../../hooks/queries/event/useGetEventList';

const EventList = () => {
  const { data } = useGetEventList();
  console.log(data);
  const mockList = [
    {
      date: '12월 1일',
      title: '12월 이벤트',
      id: 0,
    },
    {
      date: '11월 1일',
      title: '11월 이벤트',
      id: 1,
    },
    {
      date: '10월 1일',
      title: '10월 이벤트',
      id: 2,
    },
    {
      date: '9월 1일',
      title: '9월 이벤트',
      id: 3,
    },
    {
      date: '8월 1일',
      title: '8월 이벤트',
      id: 4,
    },
  ];

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/event/${id}`)
  }
  return(
    <div className={styles.eventListWrapper}>
      <ReservationItem date='게시일' title='제목' />
      {
        mockList.map((item) => (
          <EventItem
            key={item.id}
            date={item.date}
            title={item.title}
            onClick={() => handleNavigate(item.id)}
          />
        ))
      }
    </div>
  );
};

export default EventList;