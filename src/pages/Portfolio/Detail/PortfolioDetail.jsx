import styles from './PortfolioDetail.module.css';
import { useParams } from 'react-router-dom';
import mockImage from '../../../assets/img/mockItem.png';
import Title from '../../../components/Title/Title';
import useGetPortfolioDetail from '../../../hooks/queries/portfolio/useGetPortfolioDetail';

const PortfolioDetail = () => {
  const { portfolioId } = useParams('portfolioId');
  const { data } = useGetPortfolioDetail(portfolioId);
  console.log(data);
  
  const images = [mockImage, mockImage, mockImage];

  return(
    <div className={styles.pageWrapper}>
      <Title>Portfolio</Title>
      <h2 className={styles.titleText}>{data.title}</h2>
      <p>{data.content}</p>
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