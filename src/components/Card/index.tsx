import type { PropsWithChildren } from 'react';

import Link from 'next/link';

import styles from './Card.module.css';

interface CardProps {
  title: string;
  link?: string;
}

const Card = ({ link, title, children }: PropsWithChildren<CardProps>) => {
  const withLink = (
    <Link href={link!} className={styles.card}>
      <h2>{title} &rarr;</h2>
      {children}
    </Link>
  );
  const noLink = (
    <div className={styles.card}>
      <h2>{title}</h2>
      {children}
    </div>
  );

  return link ? withLink : noLink;
};

export default Card;
