'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { classes } from 'helpers/classes';
import useDarkMode from 'hooks/useDarkMode';
import Icon, { EIcons } from 'components/Icon/index';

import styles from './Header.module.css';

interface HeaderProps {
  fillBg?: boolean;
  offset?: number;
}

const Header = ({ fillBg = true, offset = 0 }: HeaderProps) => {
  const [darkMode, setDarkMode] = useDarkMode();
  const path = usePathname();

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
        <Link className={classes({ [styles.activeLink]: path === '/' })} href="/">
            Resum&eacute;
        </Link>
        <Link className={classes({ [styles.activeLink]: path.startsWith('/blog') })} href="/blog">
            Blog
        </Link>
        <Link className={classes({ [styles.activeLink]: path.startsWith('/playground') })} href="/playground">
          Playground
        </Link>
      </nav>
      <nav className={styles.iconNav}>
        <a onClick={() => setDarkMode(!darkMode)}>
          <Icon
            icon={darkMode ? EIcons.Moon : EIcons.Sun}
            width={20}
            height={20}
          />
        </a>
        <Link href="/rss.xml">
          <Icon icon={EIcons.RSS} width={20} height={20} />
        </Link>
      </nav>
    </div>
  </header>;
};

export default Header;
