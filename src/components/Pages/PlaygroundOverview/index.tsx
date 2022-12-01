import Link from 'next/link';

import Head from '../../Head';
import Header from '../../Header';
import Footer from '../../Footer';
import TagList from '../../TagList';

import type { PlaygroundMeta } from '../../../types';
import type { MDXOverviewPage } from '../../../types/mdx';

import styles from './PlaygroundOverview.module.css';

const PlaygroundOverview: MDXOverviewPage<PlaygroundMeta> = ({ items }) => {
  return <>

    <Head title="Playground" description={`${items.length} snippets.`} />
    <Header />
    <main className={styles.overview}>
      <h1 className={styles.overviewTitle}>Playground</h1>
      <h1 className={styles.overviewSupport}>Simple snippets, or TIL today.</h1>
      { items.map((item, index) => (
        <Link href={`/playground/${item.slug}`} key={`item--${index}`}>
          <a className={styles.itemCard}>
            <h2 className={styles.itemTitle}>{item.title}</h2>
            <p className={styles.itemDescription}>
              { item.seoTitle }
            </p>
            <TagList tags={item.tags} />
          </a>
        </Link>
      )) }
    </main>
    <Footer />
  </>;
};

export default PlaygroundOverview;
