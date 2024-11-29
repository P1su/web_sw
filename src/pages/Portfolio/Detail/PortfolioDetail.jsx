import styles from './PortfolioDetail.module.css';
import { useParams } from 'react-router-dom';
import mockImage from '../../../assets/img/mockItem.png';
import Title from '../../../components/Title/Title';

const PortfolioDetail = () => {
  const { id } = useParams('portfolioId');
  //id 로 api 연결 데이터 받아옴
  console.log(id);
  
  const images = [mockImage, mockImage, mockImage];

  return(
    <div className={styles.pageWrapper}>
      <Title>Portfolio</Title>
      <h2 className={styles.titleText}>제목</h2>
      <hr className={styles.hr}/>
      <section className={styles.bodySection}>
        <article className={styles.article}>
          <section className={styles.linkSection}>
            <p className={styles.blogText}>블로그 링크: <a className={styles.linkText}>🔗으아아아ㅏ아아</a></p>
          </section>
          <section className={styles.imageSection}>
            {
              images.map((image, index) => (
                <img key={index} src={image} alt="Portfolio Detail" className={styles.image} />
              ))
            }
          </section>
        </article>
      </section>
    </div>
  );
};

export default PortfolioDetail;