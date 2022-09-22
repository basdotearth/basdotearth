import Link from 'next/link';
import { type FC } from 'react';

import Icon, { EIcons } from '../icon';
import styles from './header.module.css';

interface HeaderProps {
  fillBg?: boolean;
  offset?: number;
}

const Header: FC<HeaderProps> = ({ fillBg = true, offset = 0 }) => (
  <header className={[styles.header, fillBg ? styles.headerFilled : ''].join(' ')} style={{ marginTop: offset }}>
    <div className={styles.innerWrapper}>
      <div className={styles.brand}>
        <Link href="/">Bas Klinkhamer</Link>
      </div>
      <nav className={styles.textNav}>
        <Link href="/blog">Blog</Link>
        <Link href="/playground">Playground</Link>
        <Link href="/resume">Resume</Link>
      </nav>
      <nav className={styles.iconNav}>
        <Link href="rss.xml">
          <a><Icon icon={EIcons.RSS} width={20} height={20} /></a>
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
