import Link from 'next/link';

import type { BlogPostMeta } from 'types/index';
import type { CollectedResult } from 'types/mdx';
import Footer from 'components/Footer';
import Head from 'components/Head';
import Header from 'components/Header';

import styles from './BlogOverview.module.css';

type BlogOverviewProps = CollectedResult<BlogPostMeta>;

const BlogOverview = ({ items }: BlogOverviewProps) => {
  return <>
    <Head title="Blog" description={`${items.length} blogposts on Product, Code and other things.`} />
    <Header />
    <main className={styles.overview}>
      <h1 className={styles.overviewTitle}>Blogposts</h1>
      <h1 className={styles.overviewSupport}>On Product, Code and other things.</h1>
      <div className={styles.overviewGrid}>
        { items.map((post, index) => (
          <Link
            className={[styles.postItem, 'box'].join(' ')}
            href={`blog/${post.slug}`}
            key={`post--${index}`}
          >
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postIntro}>{post.abstract}</p>
            <div>
              <button className={styles.postButton}>Read More</button>
            </div>
          </Link>
        )) }
      </div>
    </main>
    <Footer />
  </>;
};

export default BlogOverview;
