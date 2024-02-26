import type { FC } from 'react';

import Link from 'next/link';
import Script from 'next/script';

import { classes } from 'helpers/classes';
import useDarkMode from 'hooks/useDarkMode';

import styles from './CodePen.module.css';

interface CodePenprops {
  height?: number;
  id: string;
  openTab?: 'html' | 'css' | 'js';
  usePreview?: boolean;
}

const CodePen: FC<CodePenprops> = ({ height = 500, id, openTab, usePreview = false }) => {
  const [darkMode] = useDarkMode();
  const tabs = [openTab, 'result'].filter(i => i).join(',');

  return (
    <>
      <div
        className={classes([styles.codePen, 'box', 'codepen'])}
        data-height={height}
        data-theme-id={darkMode ? 'dark' : 'light'}
        data-default-tab={tabs}
        data-slug-hash={id}
        data-preview={usePreview}
        data-user="basdotearth"
        style={{ height: `${height}px` }}
      >
        <p>
          The widget did not load successfully.<br/>Please&nbsp;
          <Link href={`https://codepen.io/basdotearth/pen/${id}`}>
            click here
          </Link>
        &nbsp;to view the result on CodePen.
        </p>
      </div>
      <Script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
    </>
  );
};

export default CodePen;
