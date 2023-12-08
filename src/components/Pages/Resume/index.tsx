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
    <Head title="Resume" description="Product Owner and Senior Frontend Developer" />
    <section className={[styles.pageHeader, 'fillSVG'].join(' ')}>
      <Header />
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>Hello, my name is Bas.</h1>
        <h2 className={styles.headerSupport}>
          after 10+ years of experience as a developer I was ready for the next step.
        </h2>
        <ul className={styles.lead}>
          <li>
          In 2022 I started my transition towards becoming a <em>Product Owner</em>.
          </li>
          <li>
            I <em>read up</em> on the lore, got some <em>real-world experience</em>&nbsp;
            and acquired my <em>certification.</em>
          </li>
          <li>
            I&apos;m a strong proponent of <em>Agile development</em>&nbsp;
            and worked as a <em>Scrum Master</em> to help teams reach their goals.
          </li>
          <li>
            I have a passion for <em>post-rock</em>, <em>good books</em> and <em>great beer</em>.
          </li>
          <li>
            I&apos;m currently <em>33 years old</em>, and I live in <em>Gouda</em>, NL with <em>my wife</em> Marleen.
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
          I like to tinker with IoT devices and (TS-)Node, and sometimes I even manage to combine them.
          I work to improve myself and my colleagues, and to earn the money I spend travelling Europe and the world.
        </p>
        <p>
          Fun memories include backpacking in Australia with a small 35-liter backpack,
          and a year of working in Hungary. I&apos;ve learned to make the most out of the least amount of stuff,
          and I try to keep my possessions to a minimum. (I keep failing with books and records...)
        </p>
        <p>I&apos;m a sucker for dark beer and a good board game.</p>
      </section>
    </main>
    <Footer />
  </>;
};

export default Resume;
