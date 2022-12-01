import type { NextPage } from 'next';

import AngledBorder from '../../AngledBorder';
import Head from '../../Head';
import Header from '../../Header';
import Footer from '../../Footer';
import TagList from '../../TagList';

import exampleExperience from '../../../mocks/experience';
import exampleEducation from '../../../mocks/education';
import { isoToMonthYear } from '../../../helpers/date';

import styles from './Resume.module.css';

const Resume: NextPage = () => {
  return <>
    <Head title="Resume" description="Frontend Developer and part-time Scrum Master" />
    <section className={[styles.pageHeader, 'fillSVG'].join(' ')}>
      <Header />
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>Hello, my name is Bas.</h1>
        <h2 className={styles.headerSupport}>I am a Frontend Developer and part-time Scrum Master</h2>
        <ul className={styles.lead}>
        <li>I&apos;m a developer on a mission, with a passion for <em>post-rock</em>, <em>good books</em> and <em>great beer</em>.</li>
        <li>I stack <em>HTML5</em>, <em>ES6+/TS</em> and <em>CSS Vars</em> using <em>webcomponents</em> and Lit, or a framework like Vue or NextJS.</li>
        <li>Sometimes I create <em>hybrid solutions</em> with React Native or Electron.</li>
        <li>I&apos;m a strong proponent of <em>Agile development</em> and work as a Scrum Master to help my team reach their goals.</li>
        <li>I&apos;m currently <em>32 years old</em>, and I live in <em>Gouda</em>, NL with <em>my wife</em> Marleen.</li>
        </ul>
      </div>
      <AngledBorder />
    </section>
    <main className={styles.main}>
      <section className={styles.experience}>
        <h3 className={styles.sectionTitle}>Experience</h3>
        { exampleExperience.map((exp, index) => (
          <div className={styles.experienceItem} key={`item--${index}`}>
            <div className={styles.experienceHeader}>
              <h2 className={styles.experienceTitle}>{exp.company}</h2>
              <p className={styles.experienceDate}>
                {isoToMonthYear(exp.start)}
                {exp.end && ` - ${isoToMonthYear(exp.end)}`}
              </p>
            </div>
            <p className={styles.experienceDescription}>{exp.description}</p>
            <TagList tags={exp.tags} />
          </div>
        )) }

      </section>
      <section className={styles.education}>
        <h3 className={styles.sectionTitle}>Education</h3>
        { exampleEducation.map((item, index) => (
          <div className={styles.educationItem} key={`item--${index}`}>
            <h2 className={styles.educationTitle}>{item.title}</h2>
            <p className={styles.educationByline}>{item.start}{item.end && ` - ${item.end}`}</p>
            <p className={styles.educationByline}>{item.byline}</p>
          </div>
        )) }
      </section>
      <section className={styles.hobbies}>
        <h3 className={styles.sectionTitle}>Hobbies & Personal Life</h3>
        <p>I like to tinker with IoT devices and (TS-)Node, and sometimes I even combine those. I work to improve myself and my colleagues, and to earn the money I spend travelling Europe and the world.</p>
        <p>Cool things I did include backpacking in Eastern Australia with one 35-liter backpack, and a year of working in Hungary. I&apos;ve learned to make the most out of the least amount of stuff, and I try to keep my possessions to a minimum. I still enjoy my books and vinyl records, and I&apos;m a sucker for dark beer and a good board game.</p>
      </section>
    </main>
    <Footer />
  </>;
};

export default Resume;
