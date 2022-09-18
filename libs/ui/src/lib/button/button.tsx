import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <div className={`${styles.button} rounded shadow`}>{props.children}</div>
  );
}

export default Button;
