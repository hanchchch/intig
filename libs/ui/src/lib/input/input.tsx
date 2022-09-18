import { InputHTMLAttributes } from 'react';
import Card from '../card/card';
import styles from './input.module.scss';

/* eslint-disable-next-line */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input(props: InputProps) {
  const { label, ...rest } = props;
  return (
    <Card className={styles.wrapper}>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <input {...rest} />
    </Card>
  );
}

export default Input;
