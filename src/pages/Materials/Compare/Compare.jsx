import styles from './Compare.module.css';
import Title from './../../../components/Title/Title';
import { useLocation, useNavigate } from 'react-router-dom';
import MaterialItem from './../../../components/Material/MaterialItem/MaterialItem';
import { useState } from 'react';
import mock2 from '../../../assets/img/mockItem.png'
import BtnSmall from '../../../components/buttons/Small/BtnSmall';
import addImg from '../../../assets/img/addImage.png';
import IcPlus from '../../../assets/svg/IcPlus';
import useModal from '../../../hooks/common/useModal';
import Modal from '../../../components/Modal/Modal';
import MaterialList from './../../../components/Material/MaterialList/MaterialList';

const Compare = () => {
  const navigate = useNavigate();
  const initialValue = {
    pattern: '',
    coating: '',
    name: '',
    imageUrl: '',
  };

  //클릭 이벤트로 API 연결해서 받아옴
  const location = useLocation();
  const item = location.state;
  const handleGetItem = () => {
    alert('API 연결');
  };
  const [compaerItem, setCompareItem] = useState(initialValue);
  const [isOpen, openModal, closeModal] = useModal();

  const handlePrev = () => {
    navigate('/materials');
  }
  return(
    <div className={styles.comparePageWrapper}>
      {
        isOpen && 
        <Modal closeModal={closeModal}>
          <MaterialList />
        </Modal>
      }
      <Title>자재 비교</Title>
      <div className={styles.compareBox}>
        <MaterialItem itemValue={item} width='40rem' height='40rem'/>
        <div>
          {
            compaerItem !== initialValue ? 
              <MaterialItem itemValue={compaerItem} width='40rem' height='40rem'/>
            :
              <div className={styles.emptyItem} onClick={() => openModal()}>
                <IcPlus />
                <br/>
                비교할 자재를 <br />
                선택해주세요
              </div>
          }
        </div>
      </div>
      <BtnSmall onClick={handlePrev}>목록으로 돌아가기</BtnSmall>
    </div>
  );
};

export default Compare;