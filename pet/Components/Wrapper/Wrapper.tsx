

import styles from './Wrapper.module.css';

const Wrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <div className= {styles.Warpper}></div>
      {children}
    </div>
  );
}

export default Wrapper;
