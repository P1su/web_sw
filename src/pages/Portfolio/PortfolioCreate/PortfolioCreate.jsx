import styles from './PortfolioCreate.module.css';
import Title from '../../../components/Title/Title';
import image from '../../../assets/img/portfolioPage.png';
import { useState } from 'react';
import ImageInput from './../../../components/forms/image/ImageInput';

const PortfolioCreate = () => {
  const [values, setValues] = useState({
    title: '',
    description: '',
  });
  const onChange = (e) => {

  }
  return(
    <div className={styles.pageWrapper}>
      <Title url={image}>Portfolio</Title>
      <section className={styles.title}>
        <h2 className={styles.h2}>포트폴리오 작성</h2>
        <input
          className={styles.input}
          placeholder='제목을 입력하세요' 
          value={values.title} 
          onChange={onChange} 
          name='title' 
        />
      </section>
      <hr className={styles.hr}/>
      <input
          className={styles.input}
          placeholder='블로그 링크' 
          value={values.title} 
          onChange={onChange} 
          name='title' 
        />
      <article className={styles.article}>
        <textarea 
          className={styles.textarea}
          placeholder='내용을 입력하세요' 
          value={values.content} 
          onChange={onChange} 
          name='content' 
        />
        <ImageInput />
        <ImageInput />
        <ImageInput />
        <ImageInput />
        
      </article>
    </div>
  );
};

export default PortfolioCreate;