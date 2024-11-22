import styles from './Compare.module.css';
import Title from './../../../components/Title/Title';
import { useLocation } from 'react-router-dom';
import MaterialItem from './../../../components/Material/MaterialItem/MaterialItem';
import { useState } from 'react';
import mock2 from '../../../assets/img/mockItem.png'
import BtnSmall from '../../../components/buttons/Small/BtnSmall';

const Compare = () => {
  //클릭 이벤트로 API 연결해서 받아옴
  const location = useLocation();
  const item = location.state;
  const handleGetItem = () => {
    alert('API 연결');
  };
  const [compaerItem, setCompareItem] = useState({pattern: '몰딩', coating: 1, name: '비교템', imageUrl: mock2});
  
  console.log(item);
  return(
    <div className={styles.comparePageWrapper}>
      <Title>자재 비교</Title>
      <div className={styles.compareBox}>
        <MaterialItem itemValue={item} width='40rem' height='40rem'/>
        <MaterialItem itemValue={compaerItem} width='40rem' height='40rem'/>
      </div>
      <BtnSmall>목록으로 돌아가기</BtnSmall>
    </div>
  );
};

export default Compare;