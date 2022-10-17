import Link from 'next/link';

import Head from '../../components/Head';
import Header from '../../components/_header';
import Footer from '../../components/_footer';

import { collectStaticContent } from '../../helpers/mdx';
import type { BlogPostMeta } from '../../types';
import type { MDXOverviewPage, MDXOverviewPageProps } from '../../types/mdx';

import styles from './blog.module.css';

const BlogOverview: MDXOverviewPage<BlogPostMeta> = ({ items }) => {
  return <>
    <Head title="Blog" description={`${items.length} blogposts on code and other things.`} />

    <Header />
    <main className={styles.overview}>
      <h1 className={styles.overviewTitle}>Blogposts</h1>
      <h1 className={styles.overviewSupport}>Both code-related and otherwise.</h1>
      { items.map((post, index) => (
          <Link href={`blog/${post.slug}`} key={`post--${index}`}>
            <a className={styles.postItem}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postIntro}>{post.abstract}</p>
              <div>
                <button className={styles.postButton}>Read More</button>
              </div>
            </a>
          </Link>
        )) }
    </main>
    <Footer />
  </>;
};

export default BlogOverview;

export const getStaticProps: MDXOverviewPageProps<BlogPostMeta> = async () => {

  return {
    props: await collectStaticContent({
      type: 'posts',
      filter: (i) => i.isPublished,
      sort: (a, b) => (new Date(a.publishedOn)).valueOf() - (new Date(b.publishedOn)).valueOf(),
    }),
  };
};
