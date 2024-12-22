import { useEffect } from 'react';
import styles from './CompanyIntro.module.css';
import companyIntroImg from '../../assets/img/companyIntro.webp';
import companyIntroImg2 from '../../assets/img/companyIntro2.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CompanyIntro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div>
      <section className={styles.sectionWrapper}>
        <div className={styles.textContainerLeft} data-aos="fade-up">
          <h2 className={styles.mainTitle}>e끌림</h2>
          <p className={styles.textBlock}>
            저희는 고객의 소중한 공간을 더욱 아름답고 안전하게 변화시키기 위해 노력하는 전문 < br />
            인테리어 시공팀입니다.
            부부팀으로 오랜 시간 손발을 맞춰온 운영제로 < br /> 하루 한 팀 예약제로 운영되고 있습니다.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={companyIntroImg} alt="Section 1" className={styles.image} />
        </div>
      </section>

      <section className={styles.sectionWrapper}>
        <div className={styles.imageContainer}>
          <img src={companyIntroImg2} alt="Section 2" className={styles.image} />
        </div>
        <div className={styles.textContainerRight} data-aos="fade-up">
          <h2 className={styles.mainTitle}>Goal</h2>
          <p className={styles.textBlock}>
            고객과의 충분한 소통을 통해 맞춤형 인테리어 솔루션을 제공하며, 공간의 가치를 < br /> 재해석하고 새로운 경험을 선사합니다.
            고품질의 인테리어 필름과 정밀한 시공 기술을 < br />바탕으로 만족도 높은 결과물을 약속드립니다. < br />
            e끌림인테리어필름과 함께 일상의 공간을 더 특별하게 만들어보세요.
          </p>

        </div>
      </section>
    </div>
  );
};

export default CompanyIntro;
