import ReservationItem from '../ReservationItem/ReservationItem';
import styles from './ReservationList.module.css';

const ReservationList = () => {
  const mockList = [
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 0,
    },
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 0,
    },
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 0,
    },
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 0,
    },
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 0,
    },
  ]
  return(
    <div className={styles.reservationListWrapper}>
      <ReservationItem date='문의 날짜' title='제목' name='글쓴이' />
      {
        mockList.map((item) => (
          <ReservationItem key={item.id} date={item.date} title={item.title} name={item.name} />
        ))
      }
    </div>
  );
};

export default ReservationList;