import { useMemo } from 'react';

import Head from 'next/head';
import { getMDXComponent } from 'mdx-bundler/client';

import Header from '../../components/header';
import Footer from '../../components/footer';
import type { BlogPostMeta } from '../../types';
import type { MDXStaticPage, MDXStaticPaths, MDXStaticPageProps } from '../../types/mdx';
import { getStaticContentBySlug, collectStaticContentSlugs } from '../../helpers/mdx';

import styles from './blog.module.css';

const BlogPost: MDXStaticPage<BlogPostMeta> = ({ code, meta }) => {
  const BlogContent = useMemo(() => getMDXComponent(code), [code]);

  return <>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.seoTitle} />
    </Head>

    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>{ meta.title }</h1>

      <p className="lead">{ meta.abstract }</p>
      <BlogContent />
    </main>
    <Footer />
  </>;
};

export const getStaticPaths: MDXStaticPaths = async () => {
  const slugs = await collectStaticContentSlugs('posts');
  return {
    paths: slugs.map(slug => ({ params: { slug }})),
    fallback: false,
  };
};

export const getStaticProps: MDXStaticPageProps<BlogPostMeta> = async ({ params }) => {
  const { slug } = params!;
  
  return {
    props: await getStaticContentBySlug<BlogPostMeta>({ slug, type: 'posts'}),
  };
};

export default BlogPost;
