import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export function Card(props: CardProps) {
  const { className = '', children } = props;
  return (
    <div className={`${styles.card} rounded shadow ${className}`}>
      {children}
    </div>
  );
}

export default Card;
