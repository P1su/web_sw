import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ReservationItem from '../ReservationItem/ReservationItem';
import styles from './ReservationList.module.css';
import useGetReservationList from '../../../hooks/queries/reservation/useGetReservationList';
import useModal from '../../../hooks/common/useModal';
import Modal from '../../Modal/Modal';
import Input from '../../forms/input/Input';
import BtnSmall from '../../buttons/Small/BtnSmall';
import usePostPassword from '../../../hooks/queries/reservation/usePostPassword';

const ReservationList = () => {
  const { data } = useGetReservationList();
  console.log(data);
  const mockList = [
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 1,
    },
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 2,
    },
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 3,
    },
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 4,
    },
    {
      date: '11월 1일',
      title: '시공 신청합니다.',
      name: '송아무개',
      id: 5,
    },
  ];
  const [isOpen, openModal, closeModal] = useModal();
  const [password, setPassword] = useState({password: '',});
  const [id, setId] = useState(0);
  const { mutate: postPassword } = usePostPassword();
  const navigate = useNavigate();

  const handlePassword = () => {
    const params = {
      id: id,
      password: password,
    };
    postPassword(params, {
      onSuccess: () => {
        closeModal();
        navigate(`/reservation/${id}`);
      },
      onError: () => {
        alert('비밀번호가 일치하지 않습니다.');
      },
    });
    setPassword({ password: '', });
  }
  const handleModal = (id) => {
    openModal();
    setId(id);
  };
  return(
    <div className={styles.reservationListWrapper}>
      {
        isOpen && (
          <Modal closeModal={closeModal}>
            <Input title='비밀번호 입력' placeholder='비밀번호' value={password.password} setValue={setPassword} name='password' />
            <BtnSmall onClick={handlePassword}>제출하기</BtnSmall>
          </Modal>
        )
      }
      <ReservationItem date='문의 날짜' title='제목' name='글쓴이' />
      {
        data.map((item) => (
          <ReservationItem 
            key={item.id} 
            date='임시 날짜' 
            title={item.title} 
            name={item.name} 
            onClick={() => handleModal(item.id)}
          />
        ))
      }
    </div>
  );
};

export default ReservationList;