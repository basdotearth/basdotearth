import Link from 'next/link';

import Head from '../../Head';
import Header from '../../Header';
import Footer from '../../Footer';

import type { BlogPostMeta } from '../../../types';
import type { MDXOverviewPage } from '../../../types/mdx';

import styles from './BlogOverview.module.css';

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
