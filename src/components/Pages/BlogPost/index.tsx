import { useMemo } from 'react';

import { getMDXComponent } from 'mdx-bundler/client';

import Head from '../../Head';
import Header from '../../Header';
import Footer from '../../Footer';
import type { BlogPostMeta } from '../../../types';
import type { MDXStaticPage } from '../../../types/mdx';

import styles from './BlogPost.module.css';

const BlogPost: MDXStaticPage<BlogPostMeta> = ({ code, meta }) => {
  const BlogContent = useMemo(() => getMDXComponent(code), [code]);

  return <>
    <Head title={meta.title} description={meta.seoTitle} />

    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>{ meta.title }</h1>

      <p className="lead">{ meta.abstract }</p>
      <BlogContent />
    </main>
    <Footer />
  </>;
};

export default BlogPost;
