import styles from './PortfolioDetail.module.css';
import { useParams } from 'react-router-dom';
import Title from '../../../components/Title/Title';
import useGetPortfolioDetail from '../../../hooks/queries/portfolio/useGetPortfolioDetail';
import image from '../../../assets/img/portfolioPage.png'

const PortfolioDetail = () => {
  const { portfolioId } = useParams('portfolioId');
  const { data, isLoading } = useGetPortfolioDetail(portfolioId);
  console.log(data);
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  
  return(
    <div className={styles.pageWrapper}>
      <Title url={image}>Portfolio</Title>
      <h2 className={styles.titleText}>{data.title}</h2>
      <p>{data.content}</p>
      <hr className={styles.hr}/>
      <section className={styles.bodySection}>
        <article className={styles.article}>
          <section className={styles.linkSection}>
            <p className={styles.blogText}>블로그 링크: <a className={styles.linkText} href={data.blog_link} target='_blank'>🔗{data.blog_link}</a></p>
          </section>
          <section className={styles.imageSection}>
            {
              data.images.map((image, index) => (
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