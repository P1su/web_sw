import MaterialItem from '../MaterialItem/MaterialItem';
import BtnPrimary from '../../buttons/BtnPrimary/BtnPrimary';
import Search from '../../forms/search/Search';
import styles from './MaterialList.module.css';
import { useNavigate } from 'react-router-dom';
import mockImg from '../../../assets/img/mockItem.png';
import { useState } from 'react';

const MaterialList = () => {
  const navigate = useNavigate();
  const [company, setComapny] = useState('');
  const types = ['자재', '벽지', '몰딩', '어쩌구', '저쩌구'];
  const materialList = [
    {pattern: '몰딩', coating: 1, name: '벽지', imageUrl: mockImg},
    {pattern: '벽지', coating: 2, name: '자재1', imageUrl: mockImg},
    {pattern: '종류', coating: 3, name: '자재2', imageUrl: mockImg},
    {pattern: '색상', coating: 4, name: '자재3', imageUrl: mockImg},
    {pattern: '아마', coating: 5, name: '자재4', imageUrl: mockImg},
  ];

  const handleClick = (name) => {
    navigate(`/material/${name}`);
  };
  return(
    <div className={styles.materialListWrapper}>
      
      <div className={styles.btnField}>
        {types.map(type =>(
          <BtnPrimary key={type}>{type}</BtnPrimary>
        ))}
      </div>
      <Search placeholder='원하시는 자재를 검색하세요'/>
      <div className={styles.listBox}>
        {materialList.map((materialItem) => (
          <MaterialItem key={materialItem.name} itemValue={materialItem} onClick={() => handleClick(materialItem.name)}/>
        ))}
      </div>
    </div>
  );
};

export default MaterialList;