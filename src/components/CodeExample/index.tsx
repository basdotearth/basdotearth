import '@reach/tabs/styles.css';
import PlaygroundComponent from '@agney/playground';

import styles from './CodeExample.module.css';
import theme from './theme';

interface CodeExampleProps {
  id: string;
  snippet: {
    markup: string;
    css?: string;
    javascript?: string;
  };
  defaultTab?: 'markup' | 'css' | 'javascript';
}

const CodeExample = ({ id, snippet, defaultTab = 'javascript' }: CodeExampleProps) => {
  return (
    <div className={styles.playgroundWrapper}>
      <PlaygroundComponent
        id={id}
        initialSnippet={{
          markup: snippet.markup,
          css: snippet.css || '',
          javascript: snippet.javascript || '',
        }}
        defaultEditorTab={defaultTab}
        theme={theme}
        mode="dark"
        transformJs
      />
    </div>
  );
};

export default CodeExample;
