import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { classes } from '../../helpers/classes';

import styles from './CodeSnippet.module.css';

type CodeSnippetProps = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLElement>;

const CodeSnippet: FC<CodeSnippetProps> = ({ className, children }) => {
  const language = className?.split('-').pop() || '';

  return <div className={styles.codeSnippetWrapper}>
    <div className={styles.codeSnippetLanguage}>{ language }</div>
    <Highlight
      {...defaultProps }
      code={children!.toString()}
      // @ts-ignore
      language={language}
    >
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre className={classes([className, styles.codeSnippet])}>
            {tokens.map((line, i) => (
              <div key={`line--${i}`} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={`token--${i}`} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
    </Highlight>
  </div>;
};

export default CodeSnippet;
