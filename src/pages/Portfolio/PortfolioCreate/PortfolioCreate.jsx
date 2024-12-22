import styles from './PortfolioCreate.module.css';
import Title from '../../../components/Title/Title';
import image from '../../../assets/img/portfolioPage.webp';
import { useState } from 'react';
import usePostPortfolio from '../../../hooks/queries/portfolio/usePostPortfolio';
import { useNavigate } from 'react-router-dom';
import BtnSmall from '../../../components/buttons/Small/BtnSmall';
import PortfolioForm from '../../../components/forms/portfolio/PortfolioForm';

const PortfolioCreate = () => {
  const [values, setValues] = useState({
    title: '',
    content: '',
    blog_link: '',
    images: [],
  });
  const navigate = useNavigate();
  const { mutate: postPortfolio } = usePostPortfolio();

  const handlePost = () => {
    postPortfolio(values, {
      onSuccess: () => {
        alert('작성 완료');
        navigate('/portfolio');
      },
    });
  };

  return(
    <div className={styles.pageWrapper}>
      <Title url={image}>Portfolio</Title>
      <h2 className={styles.h2}>포트폴리오 작성</h2>
      <PortfolioForm values={values} setValues={setValues} />
      <BtnSmall onClick={handlePost}>작성하기</BtnSmall>
    </div>
  );
};

export default PortfolioCreate;