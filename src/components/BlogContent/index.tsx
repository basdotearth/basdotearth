'use client';
import { getMDXComponent } from 'mdx-bundler/client';

import CodeExample from 'components/CodeExample';
import CodePen from 'components/CodePen';
import CodeSnippet from 'components/CodeSnippet';

const BlogContent = ({ code }: { code: string }) => {
  const MDXComponent = getMDXComponent(code);

  return (
    <MDXComponent
      components={{ CodeExample, CodePen, pre: CodeSnippet }}
    />
  );
};

export default BlogContent;
