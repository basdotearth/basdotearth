import type { ComponentProps, DetailedHTMLProps, HTMLAttributes } from 'react';

import { Highlight } from 'prism-react-renderer';

import { classes } from 'helpers/classes';

import styles from './CodeSnippet.module.css';

type CodeSnippetProps = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLElement>;

const CodeSnippet = ({ children }: CodeSnippetProps) => {
  const { props } = children as { props: ComponentProps<'pre'> };
  const language = (props.className ?? '').split('-').pop() ?? '';

  return <div className={styles.codeSnippetWrapper}>
    <div className={styles.codeSnippetLanguage}>{ language }</div>
    <Highlight code={String(props.children)} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={classes([className, styles.codeSnippet, 'box'])}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={`line--${i}`}>
              {line.map((token, key) => {
                const lineProps = getTokenProps({ token, key });
                return <span
                  {...lineProps}
                  key={`token--${i}-${key}`}
                  style={{ ...lineProps.style, whiteSpace: 'pre-wrap' }}
                />;
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </div>;
};

export default CodeSnippet;
