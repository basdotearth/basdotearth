import Head from 'next/head';
import Link from 'next/link';

import AngledBorder from '../../AngledBorder';
import Header from '../../Header';
import Footer from '../../Footer';
import TagList from '../../TagList';

import { classes } from '../../../helpers/classes';
import type { MDXCombinedPage } from '../../../types/mdx';
import type { BlogPostMeta, PlaygroundMeta } from '../../../types';

import styles from './Home.module.css';

export type HomeProps = { posts: BlogPostMeta, playground: PlaygroundMeta };

const Home: MDXCombinedPage<HomeProps> = ({ posts, playground }) => {

  return <>
    <Head>
      <meta name="description" content="Generated by create next app" />
    </Head>
    <section className={classes([styles.headerTopography, 'fillSVG'])}>
      <div className={styles.headerWrapper}>
        <Header fillBg={false} />
      </div>
      <AngledBorder />
    </section>
    <main className={styles.main}>
      <section>
        <h3 className={styles.contentHeading}>
          Recent Blogposts
        </h3>
        { posts.items.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={`post--${index}`}>
            <a className={styles.postCard}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postIntro}>{post.abstract}</p>
              <button className={styles.postButton}>Read More</button>
            </a>
          </Link>
        )) }
      </section>
      <section>
        <div className={styles.sidebar}>
          <h3 className={styles.contentHeading}>
            Playground
          </h3>
          { playground.items.map((item, index) => (
            <Link href={`/playground/${item.slug}`} key={`item--${index}`}>
              <a className={styles.itemCard}>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <TagList tags={item.tags} />
              </a>
            </Link>
          )) }
        </div>
      </section>
    </main>
    <Footer />
  </>;
};

export default Home;
