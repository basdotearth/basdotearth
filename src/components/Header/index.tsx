import type { FC } from 'react';

import Link from 'next/link';

import { classes } from 'helpers/classes';
import useDarkMode from 'hooks/useDarkMode';
import Icon, { EIcons } from 'components/Icon/index';

import styles from './Header.module.css';

interface HeaderProps {
  fillBg?: boolean;
  offset?: number;
}

const Header: FC<HeaderProps> = ({ fillBg = true, offset = 0 }) => {
  const [darkMode, setDarkMode] = useDarkMode();

  return <header
    className={classes({
      [styles.header]: true,
      [styles.headerFilled]: fillBg,
    })}
    style={{ marginTop: offset }}
  >
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
        <a onClick={() => setDarkMode(!darkMode)}>
          <Icon
            icon={darkMode ? EIcons.Moon : EIcons.Sun}
            width={20}
            height={20}
          />
        </a>
        <Link href="rss.xml">
          <a><Icon icon={EIcons.RSS} width={20} height={20} /></a>
        </Link>
      </nav>
    </div>
  </header>;
};

export default Header;
