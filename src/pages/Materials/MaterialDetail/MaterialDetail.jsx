import { useNavigate, useParams } from 'react-router-dom';
import styles from './MaterialDetail.module.css';
import Title from '../../../components/Title/Title';
import BtnSmall from '../../../components/buttons/Small/BtnSmall';
import useGetMaterialItem from '../../../hooks/queries/material/useGetMaterialItem';
import image from '../../../assets/img/materialPage.png'


const MaterialDetail = () => {
  const { name } = useParams('name');
  const { company } = useParams('company');
  const { data }= useGetMaterialItem(name, company);
  const navigate = useNavigate();

  const handleNavigate = (path, state) => {
    navigate(path, { state });
  };
  console.log(data)

  return(
    <div className={styles.materialDetailPageWrapper}>
      <Title url={image}>Films</Title>
      <p className={styles.nameText}>{data?.product_name}</p>
      <hr className={styles.hr}/>
      <img src={data?.image_url} className={styles.materialDetailImage}/>
      {
        company === 'lx' ?
          <>
            <p className={styles.categoryText}>{`분류: ${data?.category}`}</p>
            <p className={styles.infoTextSpan}>{`사이즈: ${data?.size}`}</p>
          </>
        :
          <>
            <p className={styles.infoTextSpan}>{`코팅: ${data?.coating}`}</p>
            <p className={styles.infoTextSpan}>{`패턴: ${data?.pattern}`}</p>
            <p className={styles.infoTextSpan}>{`사이즈: ${data?.size}`}</p>
          </>
      }
      <div className={styles.buttonField}>
        <BtnSmall onClick={() => handleNavigate('/materials')} isFilled={false}>목록으로 돌아가기</BtnSmall>
        <BtnSmall onClick={() => handleNavigate('/compare', data)} isFilled={false}>자재 비교하기</BtnSmall>
      </div>
    </div>
  );
};

export default MaterialDetail;