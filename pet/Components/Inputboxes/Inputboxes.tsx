import styles from './Inputboxes.module.css';

interface InputBoxProps {
  labelText: string;   // Corrected typo: lableText -> labelText
  Id: string;          // Corrected Id -> id for consistency
  Type: string;        // Corrected Type -> type for consistency
  Value: string;
  OnChange?: React.ChangeEventHandler<HTMLInputElement>; // Type for the onChange event
}

export const InputBox = ({
  labelText,
  Id,
  Type,
  Value,
  OnChange,
}: InputBoxProps) => {
  return (
    <div className={styles.InputBox}>
      <label htmlFor={Id}>{labelText}</label> <br />
      <input
        type={Type}
        id={Id}
        required
        value={Value}
        onChange={OnChange} // Proper event handler
      />
    </div>
  );
};

interface TextAreaBoxProps {
  labelText: string;   // Corrected typo: lableText -> labelText
  Id: string;          // Corrected Id -> id for consistency
  Value: string;
  OnChange?: React.ChangeEventHandler<HTMLTextAreaElement>; // Type for the onChange event
}

export const TextAreaBox = ({
  labelText,
  Id,
  Value,
  OnChange,
}: TextAreaBoxProps) => {
  return (
    <div className={styles.InputBox}>
      <label htmlFor={Id}>{labelText}</label> <br />
      <textarea
        id={Id}
        required
        value={Value}
        onChange={OnChange} // Proper event handler
      />
    </div>
  );
};


