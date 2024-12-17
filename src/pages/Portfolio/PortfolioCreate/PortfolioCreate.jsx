import styles from './PortfolioCreate.module.css';
import Title from '../../../components/Title/Title';
import image from '../../../assets/img/portfolioPage.png';

const PortfolioCreate = () => {
  return(
    <div className={styles.pageWrapper}>
      <Title url={image}>Portfolio</Title>
      <section className={styles.body}>
        
      </section>
    </div>
  );
};

export default PortfolioCreate;