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
    <Head title="Resume" description="Technical Product Owner and developer with 10+ years of experience" />
    <section className={[styles.pageHeader, 'fillSVG'].join(' ')}>
      <Header />
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>Hello, my name is Bas.</h1>
        <h2 className={styles.headerSupport}>
          I&apos;m a Technical Product Owner and a developer with 10+ years of experience.
        </h2>
        <ul className={styles.lead}>
          <li>
          In 2022 I pivoted from Senior- and Lead- FE Developer to <em>Product Owner</em>.
          </li>
          <li>
            I've added certifications like <em>PSPO-I</em> and <em>-II</em> to my experience.
          </li>
          <li>
            I support <em>Agile development</em> and have worked as a <em>Scrum Master</em>.
          </li>
          <li>
            I like <em>good music</em>, <em>thick books</em> and <em>building stuff</em> in the frontend stack.
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
                {isoToMonthYear(exp.start)}
                {exp.end && ` - ${isoToMonthYear(exp.end)}`}
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
              {isoToMonthYear(item.start)}
              {item.end && ` - ${isoToMonthYear(item.end)}`}
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
          (Ask me about the red telephone!)
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
