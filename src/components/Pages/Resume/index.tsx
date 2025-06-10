import Footer from 'components/Footer';
import Head from 'components/Head';
import Header from 'components/Header';
import type { MDXCombinedPage } from 'types/mdx';
import TagList from 'components/TagList';
import { isoToMonthYear } from 'helpers/date';
import type { EducationMeta, ExperienceMeta } from 'types/index';

import styles from './Resume.module.css';

export type ResumeProps = { experience: ExperienceMeta, education: EducationMeta };

const Resume: MDXCombinedPage<ResumeProps> = ({ education, experience }) => {
  return <>
    <Head title="Resume" description="Senior and Lead Frontend Developer with 10+ years of experience" />
    <section className={[styles.pageHeader, 'headerBG'].join(' ')}>
      <Header />
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>Hello, my name is Bas.</h1>
        <h2 className={styles.headerSupport}>
          I&apos;m a Senior and Lead Frontend Developer with 10+ years of experience.
        </h2>
        <ul className={styles.lead}>
          <li>
            I stack <em>TS</em>, <em>ESNext</em> and <em>CSS Vars</em> using tools like <em>React</em> and <em>Vue</em>.
          </li>
          <li>
            I support <em>Agile teams</em> with <em>DevOps</em>,&nbsp;
            <em>CI/CD pipelines</em> and as a <em>Scrum Master</em>.
          </li>
          <li>
            I&apos;ve added <em>LEAN</em> and <em>Scrum.org</em> certifications to my experience.
          </li>
          <li>
            I like <em>good music</em>, <em>thick books</em> and <em>building stuff</em> in the real world.
          </li>
          <li>
            I&apos;m currently <em>34 years old</em>, and I live in <em>Gouda</em>, NL with <em>my wife</em> Marleen.
          </li>
        </ul>
      </div>
    </section>
    <main className={styles.main}>
      <section className={styles.experience}>
        <h3 className={styles.sectionTitle}>Experience</h3>
        { experience.items.map((exp, index) => (
          <div className={styles.experienceItem} key={`item--${index}`}>
            <div className={styles.experienceHeader}>
              <h2 className={styles.experienceTitle}>{exp.company}</h2>
              <p className={styles.experienceDate}>
                {isoToMonthYear(exp.start).toLowerCase()}
                {exp.end ? ` - ${isoToMonthYear(exp.end).toLowerCase()}` : ''}
              </p>
            </div>
            <p
              className={styles.experienceDescription}
              dangerouslySetInnerHTML={{ __html: exp.excerpt }}
            >
            </p>
            <TagList tags={exp.tags} />
          </div>
        )) }

      </section>
      <section className={styles.education}>
        <h3 className={styles.sectionTitle}>Education</h3>
        { education.items.map((item, index) => (
          <div className={[styles.educationItem, 'box'].join(' ')} key={`item--${index}`}>
            <h2 className={styles.educationTitle}>{item.title}</h2>
            <p className={styles.educationByline}>
              {isoToMonthYear(item.start).toLowerCase()}
              {item.end ? ` - ${isoToMonthYear(item.end).toLowerCase()}` : ''}
            </p>
            <p className={styles.educationByline}>{item.byline}</p>
          </div>
        )) }
      </section>
      <section className={styles.hobbies}>
        <h3 className={styles.sectionTitle}>Hobbies & Personal Life</h3>
        <p>
          I live in an old house that needs a lot of DIY attention,
          and I make fun projects using Raspberry Pi&apos;s and the Frontend stack.&nbsp;
          (Ask me about the WordClock or the red telephone!)
          I work to improve myself and my colleagues, and to earn the money I spend travelling Europe and the world.
        </p>
        <p>
          Fun memories include backpacking through Australia with a small 35-litre backpack,
          and a year of working in Hungary.
          I love alternative music and very thick Sci-Fi and Fantasy books.
        </p>
      </section>
    </main>
    <Footer />
  </>;
};

export default Resume;
