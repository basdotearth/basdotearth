import { type FC, type PropsWithChildren } from 'react';

import Link from 'next/link';

import styles from './Card.module.css';

interface CardProps {
  title: string;
  link?: string;
}

const Card: FC<PropsWithChildren<CardProps>> = ({ link, title, children }) => {
  const withLink = <Link href={link!}>
    <a className={styles.card}>
      <h2>{title} &rarr;</h2>
      {children}
    </a>
  </Link>;
  const noLink = <div className={styles.card}>
    <h2>{title}</h2>
    {children}
  </div>;
  return link ? withLink : noLink;
};

export default Card;
