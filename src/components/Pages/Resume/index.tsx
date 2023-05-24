import AngledBorder from 'components/AngledBorder';
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
    <Head title="Resume" description="Frontend Developer and upcoming Product Owner" />
    <section className={[styles.pageHeader, 'fillSVG'].join(' ')}>
      <Header />
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>Hello, my name is Bas.</h1>
        <h2 className={styles.headerSupport}>I am an experienced Frontend Developer and upcoming Product Owner</h2>
        <ul className={styles.lead}>
          <li>
            I&apos;m a developer on a mission, with a passion for <em>post-rock</em>,&nbsp;
            <em>good books</em> and <em>great beer</em>.
          </li>
          <li>
            I stack <em>HTML5</em>, <em>ES6+/TS</em> and <em>CSS Vars</em> using <em>webcomponents</em> and Lit,
            sometimes using frameworks like NextJS or React Native.
          </li>
          <li>In 2022 I started my transition towards becoming a Product Owner.</li>
          <li>
            I&apos;m a strong proponent of <em>Agile development</em>&nbsp;
            and worked as a Scrum Master to help teams reach their goals.
          </li>
          <li>
            I&apos;m currently <em>32 years old</em>, and I live in <em>Gouda</em>, NL with <em>my wife</em> Marleen.
          </li>
        </ul>
      </div>
      <AngledBorder />
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
          <div className={styles.educationItem} key={`item--${index}`}>
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
