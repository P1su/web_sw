import { useNavigate, useParams } from 'react-router-dom';
import mockImg from '../../../assets/img/mockItem.png';
import styles from './MaterialDetail.module.css';
import Title from '../../../components/Title/Title';
import BtnSmall from '../../../components/buttons/Small/BtnSmall';

const MaterialDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  console.log(name);
  //name 통해서 get이나 포스트로 받아오기

  const item = {pattern: '몰딩', coating: 1, name: '벽지', imageUrl: mockImg};
  
  return(
    <div className={styles.materialDetailPageWrapper}>
      <Title>{item.name}</Title>
      <img src={item.imageUrl} className={styles.materialDetailImage}/>
      <p className={styles.infoTextSpan}>{`패턴: ${item.pattern}`}</p>
      <p className={styles.infoTextSpan}>{`코팅: ${item.coating}`}</p>
      <div className={styles.buttonField}>
        <BtnSmall onClick={() => handleNavigate('/materials')} isFilled={false}>목록으로 돌아가기</BtnSmall>
        <BtnSmall onClick={() => handleNavigate('/materials')} isFilled={false}>자재 비교하기</BtnSmall>
      </div>
    </div>
  );
};

export default MaterialDetail;