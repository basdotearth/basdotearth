import { useMemo } from 'react';

import { getMDXComponent } from 'mdx-bundler/client';

import CodeExample from '../../CodeExample';
import CodeSnippet from '../../CodeSnippet';
import Head from '../../Head';
import Header from '../../Header';
import Footer from '../../Footer';
import TagList from '../../TagList';

import type { BlogPostMeta, PlaygroundMeta } from '../../../types';
import type { MDXStaticPage } from '../../../types/mdx';

import styles from './SinglePost.module.css';

const SinglePost: MDXStaticPage<BlogPostMeta | PlaygroundMeta> = ({ code, meta }) => {
  const BlogContent = useMemo(() => getMDXComponent(code), [code]);
  const timestamp = useMemo(() => {
    const date = new Date(meta.publishedOn);
    const tz: [string, { timeZone: string }] = ['nl-NL', { timeZone: 'CET' }];
    const output = [
      <p className={styles.published} key="published">
        Published {date.toLocaleDateString(...tz)} @ {date.toLocaleTimeString(...tz)}
      </p>
    ];

    if (meta.updatedOn) {
      const update = new Date(meta.updatedOn);
      output.push(<p className={styles.published} key="updated">
        Last updated {update.toLocaleDateString(...tz)} @ {update.toLocaleTimeString(...tz)}
      </p>);
    }

    return output;
  }, [meta.publishedOn, meta.updatedOn]);

  return <>
    <Head title={meta.title} description={meta.seoTitle} />
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>{ meta.title }</h1>
      <div className={styles.timestamps}>
        { timestamp }
      </div>
      {'abstract' in meta && <p className="lead">{ meta.abstract }</p>}
      <BlogContent components={{ CodeExample, pre: CodeSnippet }}/>
      {'tags' in meta && <TagList tags={meta.tags} />}
    </main>
    <Footer />
  </>;
};

export default SinglePost;
