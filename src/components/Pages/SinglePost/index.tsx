import { useMemo } from 'react';
import type { FC } from 'react';

import { getMDXComponent } from 'mdx-bundler/client';

import CodeExample from 'components/CodeExample';
import CodeSnippet from 'components/CodeSnippet';
import Head from 'components/Head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TagList from 'components/TagList';

import type { BlogPostMeta, PlaygroundMeta } from 'types/index';
import type { MDXStaticPage } from 'types/mdx';

import styles from './SinglePost.module.css';

interface TimestampProps {
  publishedOn: Date;
  updatedOn?: Date;
}

const Timestamp: FC<TimestampProps> = ({ publishedOn, updatedOn }) => {
  const date = new Date(publishedOn);
  const tz: [string, { timeZone: string }] = ['nl-NL', { timeZone: 'CET' }];
  const update = updatedOn ? new Date(updatedOn) : null;
  return <>
    <p className={styles.published} key="published">
      Published {date.toLocaleDateString(...tz)} @ {date.toLocaleTimeString(...tz)}
    </p>

    { update && <p className={styles.published} key="updated">
      Last updated {update.toLocaleDateString(...tz)} @ {update.toLocaleTimeString(...tz)}
    </p> }
  </>;
};

const SinglePost: MDXStaticPage<BlogPostMeta | PlaygroundMeta> = ({ code, meta }) => {
  const BlogContent = useMemo(() => getMDXComponent(code), [code]);

  return <>
    <Head title={meta.title} description={meta.seoTitle} />
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>{ meta.title }</h1>
      <div className={styles.timestamps}>
       <Timestamp {...meta} />
      </div>
      {'abstract' in meta && <p className="lead">{ meta.abstract }</p>}
      <BlogContent components={{ CodeExample, pre: CodeSnippet }}/>
      {'tags' in meta && <TagList tags={meta.tags} />}
    </main>
    <Footer />
  </>;
};

export default SinglePost;
