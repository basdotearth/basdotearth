import Link from 'next/link';

import type { CollectedResult } from 'types/mdx';
import Footer from 'components/Footer';
import Head from 'components/Head';
import Header from 'components/Header';
import type { PlaygroundMeta } from 'types/index';
import TagList from 'components/TagList';

import styles from './PlaygroundOverview.module.css';

type PlaygroundOverviewProps = CollectedResult<PlaygroundMeta>;

const PlaygroundOverview = ({ items }: PlaygroundOverviewProps) => {
  return <>

    <Head title="Playground" description={`${items.length} snippets.`} />
    <Header />
    <main className={styles.overview}>
      <h1 className={styles.overviewTitle}>Playground</h1>
      <h1 className={styles.overviewSupport}>Quick snippets, POCs and TIL today.</h1>
      { items.map((item, index) => (
        <Link
          className={[styles.itemCard, 'box'].join(' ')}
          href={`/playground/${item.slug}`}
          key={`item--${index}`}
        >
          <h2 className={styles.itemTitle}>{item.title}</h2>
          <p className={styles.itemDescription}>
            { item.seoTitle }
          </p>
          <TagList tags={item.tags} />
        </Link>
      )) }
    </main>
    <Footer />
  </>;
};

export default PlaygroundOverview;
