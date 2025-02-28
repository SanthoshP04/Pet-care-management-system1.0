import styles from'./Content.module.css'

export const Content = ({h6Text,pText}: {h6Text:string,pText:string}) => {
  return (
    <div className={styles.Content}>
      <h6>{h6Text}</h6>
      <p>{pText}</p>
    </div>
  );
}


