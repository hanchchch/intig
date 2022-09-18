import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  children?: React.ReactNode;
}

export function Card(props: CardProps) {
  return (
    <div className={`${styles.card} rounded shadow`}>{props.children}</div>
  );
}

export default Card;
