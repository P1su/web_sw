import styles from './Compare.module.css';
import Title from './../../../components/Title/Title';
import { useLocation, useNavigate } from 'react-router-dom';
import MaterialItem from './../../../components/Material/MaterialItem/MaterialItem';
import { useState } from 'react';
import BtnSmall from '../../../components/buttons/Small/BtnSmall';
import IcPlus from '../../../assets/svg/IcPlus';
import useModal from '../../../hooks/common/useModal';
import Modal from '../../../components/Modal/Modal';
import MaterialList from './../../../components/Material/MaterialList/MaterialList';
import useGetMaterialItem from '../../../hooks/queries/material/useGetMaterialItem';

const Compare = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state;
  const [compare, setCompare] = useState({
    company:'',
    name:'',
  });
  const [isOpen, openModal, closeModal] = useModal();
  const { data, isError } = useGetMaterialItem(compare.name, compare.company);
  const handlePrev = () => {
    navigate('/materials');
  }
  return(
    <div className={styles.comparePageWrapper}>
      {
        isOpen && 
        <Modal closeModal={closeModal}>
          <MaterialList setCompare={setCompare} isCompare={true} closeModal={closeModal}/>
        </Modal>
      }
      <Title>Films</Title>
      <div className={styles.compareBox}>
        <MaterialItem itemValue={item} width='40rem' height='40rem'/>
        <div>
          {
            isError === false  ? 
              <MaterialItem itemValue={data} width='40rem' height='40rem' onClick={() => openModal()}/>
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