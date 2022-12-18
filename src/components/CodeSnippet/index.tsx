import type { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from 'react';

import Highlight, { defaultProps } from 'prism-react-renderer';

import { classes } from 'helpers/classes';

import styles from './CodeSnippet.module.css';

type CodeSnippetProps = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLElement>;

const CodeSnippet: FC<CodeSnippetProps> = ({ children }) => {
  const { props } = children as ReactElement;
  const language = props.className.split('-').pop() ?? '';

  return <div className={styles.codeSnippetWrapper}>
    <div className={styles.codeSnippetLanguage}>{ language }</div>
    <Highlight
      {...defaultProps }
      code={props.children}

      // @ts-ignore
      language={language}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={classes([className, styles.codeSnippet])}>
          {tokens.map((line, i) => (
            <div key={`line--${i}`} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => {
                const lineProps = getTokenProps({ token, key });
                lineProps.style = { ...props.style, whiteSpace: 'pre-wrap' };
                return <span key={`token--${i}`} {...lineProps} />;
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </div>;
};

export default CodeSnippet;
