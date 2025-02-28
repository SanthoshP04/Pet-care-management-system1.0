





 import styles from './InputBox.module.css'



 interface InputBoxProps{
    lableText:string,
    Id:string,
    Type:string,
    Value:string,
    Onchange?:any,
 }
export const InputBox  = (
    {lableText,Id,Type,Value,Onchange}:InputBoxProps
) => {
    return (
      <div className={styles.InputBox}>
        <label htmlFor={Id}>{lableText}</label> <br />
        <input type={Type} id={Id}required value={Value}onChange={Onchange} />
      </div>
    );
  };


  interface TextAreaBoxProps{
    lableText:string,
    Id:string,
    //Type:string,//
    Value:string,
    Onchange?:any,
 }
  export const TextAreaBox=(
    {lableText,Id,Value,Onchange}:TextAreaBoxProps
  )=>{
    return(
      <div className={styles.InputBox}>
      <label htmlFor={Id}>{lableText}</label> <br />
      <textarea id={Id}required value={Value}onChange={Onchange}/>
    </div>

    )
  }
  
 


