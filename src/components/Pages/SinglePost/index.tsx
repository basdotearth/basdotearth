import { useMemo } from 'react';

import { getMDXComponent } from 'mdx-bundler/client';

import CodeExample from '../../CodeExample';
import Head from '../../Head';
import Header from '../../Header';
import Footer from '../../Footer';
import TagList from '../../TagList';

import type { BlogPostMeta, PlaygroundMeta } from '../../../types';
import type { MDXStaticPage } from '../../../types/mdx';

import styles from './SinglePost.module.css';

const SinglePost: MDXStaticPage<BlogPostMeta | PlaygroundMeta> = ({ code, meta }) => {
  const BlogContent = useMemo(() => getMDXComponent(code), [code]);

  return <>
    <Head title={meta.title} description={meta.seoTitle} />

    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>{ meta.title }</h1>
      {'abstract' in meta && <p className="lead">{ meta.abstract }</p>}
      <BlogContent components={{ CodeExample }}/>
      {'tags' in meta && <TagList tags={meta.tags} />}
    </main>
    <Footer />
  </>;
};

export default SinglePost;
