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
import image from '../../../assets/img/materialPage.webp'

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
      <Title url={image}>Films</Title>
      <section>
        <h2 className={styles.titleText}>자재 비교</h2>
        <p className={styles.text}>
        다양한 자재를 비교하여, 인테리어에 어울리는 자재를 찾아보세요. <br />
        고급스러움과 세련됨을 더할 자재로, 공간을 한층 품격 있게 완성할 수 있습니다.
        </p>
        <hr className={styles.hr}/>
      </section>
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