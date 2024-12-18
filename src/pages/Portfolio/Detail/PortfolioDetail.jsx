import styles from './PortfolioDetail.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import Title from '../../../components/Title/Title';
import useGetPortfolioDetail from '../../../hooks/queries/portfolio/useGetPortfolioDetail';
import image from '../../../assets/img/portfolioPage.png'
import useDeletePortfolio from '../../../hooks/queries/portfolio/useDeletePortfolio';
import { useState, useEffect } from 'react';
import PortfolioForm from '../../../components/forms/portfolio/PortfolioForm';
import BtnSmall from '../../../components/buttons/Small/BtnSmall';
import usePutPortfolio from '../../../hooks/queries/portfolio/usePutPortfolio';
import { useQueryClient } from '@tanstack/react-query';

const PortfolioDetail = () => {
  const { portfolioId } = useParams('portfolioId');
  const { data, isLoading } = useGetPortfolioDetail(portfolioId);
  const { mutate: deletePortfolio } = useDeletePortfolio(portfolioId);
  const [isEdit, setIsEdit] = useState(false);
  const [values, setValues] = useState({
    id: portfolioId,
    title: '',
    content: '',
    blog_link: '',
    images: [],
  });
  useEffect(() => {
    if (data) {
      setValues({
        id: portfolioId,
        title: data.title || '',
        content: data.content || '',
        images: data.images || null,
        blog_link: data.blog_link || '',
      });
    }
  }, [data, portfolioId]);
  const { mutate: putPortfolio } = usePutPortfolio(values);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  console.log(values)
  /*const handleEdit = () => {
    setIsEdit(!isEdit);
  };*/
  const handleButton = () => {
    if(isEdit){
      putPortfolio(values, {
        onSuccess: () => {
          queryClient.invalidateQueries(['portfolioDetail', portfolioId]);
          alert('포트폴리오가 수정되었습니다.');
          setIsEdit(false);
        },
        onError: (error) => {
          console.error(error);
        },
      })
    }else {
      navigate('/portfolio');
    }
  };
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
      {
        isEdit ? <h2 className={styles.titleText}>포트폴리오 수정</h2>
        : (
          <h2 className={styles.titleText}>{data.title}</h2>
        )
      }
      {
        localStorage.getItem('ACCESS_TOKEN') ? 
          <div className={styles.modifySection}>
            <span onClick={() => {handleDelete()}}>
              삭제하기
            </span>
          </div>
        : null
      }
      <hr className={styles.hr}/>
      <section className={styles.bodySection}>
        {
          isEdit ? (
            <PortfolioForm values={values} setValues={setValues} />
          ) : 
          (
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
          )
        }
      </section>
      <BtnSmall onClick={handleButton}>{isEdit ? '수정하기' : '목록으로 돌아가기'}</BtnSmall>
    </div>
  );
};

export default PortfolioDetail;