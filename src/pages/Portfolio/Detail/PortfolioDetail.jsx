import styles from './PortfolioDetail.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import Title from '../../../components/Title/Title';
import useGetPortfolioDetail from '../../../hooks/queries/portfolio/useGetPortfolioDetail';
import image from '../../../assets/img/portfolioPage.png'
import useDeletePortfolio from '../../../hooks/queries/portfolio/useDeletePortfolio';

const PortfolioDetail = () => {
  const { portfolioId } = useParams('portfolioId');
  const { data, isLoading } = useGetPortfolioDetail(portfolioId);
  const { mutate: deletePortfolio } = useDeletePortfolio(portfolioId);
  const navigate = useNavigate();

  const handleDelete = () => {
    deletePortfolio({}, {
      onSuccess: () => {
        alert('포트폴리오가 삭제되었습니다.');
        navigate('/portfolio');
      },
    });
  };
  
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  
  return(
    <div className={styles.pageWrapper}>
      <Title url={image}>Portfolio</Title>
      <h2 className={styles.titleText}>{data.title}</h2>
        <div className={styles.modifySection}>
          <span>
            수정하기
          </span>
          <span onClick={() => {handleDelete()}}>
            삭제하기
          </span>
        </div>
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
          <p className={styles.p}>
            {data.content}
          </p>
        </article>
      </section>
    </div>
  );
};

export default PortfolioDetail;