import styles from './PortfolioCreate.module.css';
import Title from '../../../components/Title/Title';
import image from '../../../assets/img/portfolioPage.png';
import { useState } from 'react';
import ImageInput from './../../../components/forms/image/ImageInput';
import usePostPortfolio from '../../../hooks/queries/portfolio/usePostPortfolio';
import { useNavigate } from 'react-router-dom';
import BtnSmall from '../../../components/buttons/Small/BtnSmall';

const PortfolioCreate = () => {
  const [values, setValues] = useState({
    title: '',
    content: '',
    blog_link: '',
    images: [],
  });
  const navigate = useNavigate();
  const { mutate: postPortfolio } = usePostPortfolio();

  const onChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

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
        className={styles.smallInput}
        placeholder='블로그 링크를 입력해주세요' 
        value={values.blog_link} 
        onChange={onChange} 
        name='blog_link' 
      />
      <article className={styles.article}>
        <section className={styles.imageBox}>
          <ImageInput values={values} setValues={setValues} name='0' />
          <ImageInput values={values} setValues={setValues} name='1' />
          <ImageInput values={values} setValues={setValues} name='2' />
          <ImageInput values={values} setValues={setValues} name='3' />
        </section>
        <textarea 
          className={styles.textarea}
          placeholder='내용을 입력하세요' 
          value={values.content} 
          onChange={onChange} 
          name='content' 
        />
      </article>
      <BtnSmall onClick={handlePost}>작성하기</BtnSmall>
    </div>
  );
};

export default PortfolioCreate;