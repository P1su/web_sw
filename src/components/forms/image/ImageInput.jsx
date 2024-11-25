import { useState } from 'react';
import styles from './ImageInput.module.css';
import addImage from '../../../assets/img/addImage.png';
const ImageInput = () => {
  const [imgUrl, setImgUrl] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      
      // 파일 읽기를 완료했을 때 호출되는 콜백 함수
      reader.onloadend = () => {
        setImgUrl(reader.result); // 이미지를 base64 형식으로 상태에 저장
      };
      
      // 파일을 base64 데이터로 읽기 시작
      reader.readAsDataURL(file);
    }
  };

  return(
    <div className={styles.imageBox}>
      <label htmlFor='imgFile' className={styles.imageBox}>
        {
          imgUrl ==='' ? 
          <img src={addImage} className={styles.imageBox}/>
          : 
          <img src={imgUrl} className={styles.imageBox}/>
        }
      </label>
      <input 
        type='file' 
        id='imgFile' 
        onChange={handleImageChange} 
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageInput;