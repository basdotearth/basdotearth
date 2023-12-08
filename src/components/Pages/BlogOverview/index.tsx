import Link from 'next/link';

import type { BlogPostMeta } from 'types/index';
import Footer from 'components/Footer';
import Head from 'components/Head';
import Header from 'components/Header';
import type { MDXOverviewPage } from 'types/mdx';

import styles from './BlogOverview.module.css';

const BlogOverview: MDXOverviewPage<BlogPostMeta> = ({ items }) => {
  return <>
    <Head title="Blog" description={`${items.length} blogposts on code and other things.`} />
    <Header />
    <main className={styles.overview}>
      <h1 className={styles.overviewTitle}>Blogposts</h1>
      <h1 className={styles.overviewSupport}>Both code-related and otherwise.</h1>
      <div className={styles.overviewGrid}>
        { items.map((post, index) => (
          <Link href={`blog/${post.slug}`} key={`post--${index}`}>
            <a className={[styles.postItem, 'box'].join(' ')}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postIntro}>{post.abstract}</p>
              <div>
                <button className={styles.postButton}>Read More</button>
              </div>
            </a>
          </Link>
        )) }
      </div>
    </main>
    <Footer />
  </>;
};

export default BlogOverview;
