import Link from 'next/link';

import Footer from 'components/Footer';
import Head from 'components/Head';
import Header from 'components/Header';
import type { MDXOverviewPage } from 'types/mdx';
import type { PlaygroundMeta } from 'types/index';
import TagList from 'components/TagList';

import styles from './PlaygroundOverview.module.css';

const PlaygroundOverview: MDXOverviewPage<PlaygroundMeta> = ({ items }) => {
  return <>

    <Head title="Playground" description={`${items.length} snippets.`} />
    <Header />
    <main className={styles.overview}>
      <h1 className={styles.overviewTitle}>Playground</h1>
      <h1 className={styles.overviewSupport}>Quick snippets, POCs and TIL today.</h1>
      { items.map((item, index) => (
        <Link legacyBehavior href={`/playground/${item.slug}`} key={`item--${index}`}>
          <a className={[styles.itemCard, 'box'].join(' ')}>
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
