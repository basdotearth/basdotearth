'use client';
import React from 'react';

import type { CombinedResult } from 'types/mdx';
import Footer from 'components/Footer';
import Header from 'components/Header';
import TagList from 'components/TagList';
import { isoToMonthYear } from 'helpers/date';
import { type EducationMeta, type ExperienceMeta, JobType } from 'types/index';

import styles from './Resume.module.css';

const jobTypeTitles: Record<JobType, string> = {
  [JobType.PRODUCT_OWNER]: 'Product Owner',
  [JobType.DEVELOPER]: 'Developer',
  [JobType.AGILE_CONSULT]: 'Agile Consultant',
};

export type ResumeProps = CombinedResult<{ experience: ExperienceMeta, education: EducationMeta }, false>;

const Resume = ({ education, experience }: ResumeProps) => {
  const [expFilter, setExpFilter] = React.useState<JobType | null>(null);
  return <>
    <section className={[styles.pageHeader, 'headerBG'].join(' ')}>
      <Header />
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>Hello, my name is Bas Klinkhamer!</h1>
        <h2 className={styles.headerSupport}>
          I&apos;m a Product Owner, a Typescript Developer with 10+ years of experience and
          an all-round Agile Change Agent!
        </h2>
        <ul className={styles.lead}>
          <li>
            As a <em>Product Owner</em>, I focus on <em>Pragmatic building</em> and <em>Stakeholder engagement</em>.
          </li>
          <li>
            As a <em>Developer</em>, I know how to stack <em>TS</em> , <em>ESNext</em> and <em>CSS Vars</em>,
            with <em>React</em>, <em>Lit</em> and <em>NextJS</em>.
          </li>
          <li>
            I&apos;ve been a force for <em>Agile Change</em> as a <em>consultant</em> and as a <em>Scrum Master</em>.
          </li>
          <li>
            I&apos;ve extended my <em>broad experience</em> with <em>LEAN</em> and <em>Scrum.org</em> certifications.
          </li>
          <li>
            I like <em>good music</em>, <em>thick books</em> and <em>building stuff</em> in the real world.
          </li>
          <li>
            I&apos;m currently <em>35 years old</em>, and I live in <em>Gouda</em>, NL with <em>my wife</em> Marleen.
          </li>
        </ul>
      </div>
    </section>

    <main className={styles.main}>
      <section className={styles.experience}>
        <div className={styles.experienceToggles}>
          <h3 className={styles.sectionTitle}>Experience</h3>
          {Object.entries(jobTypeTitles).map(([id, title]) => (
            <button
              key={id}
              className={[styles.experienceToggle, expFilter === id ? styles.active : '' ].join(' ')}
              onClick={() => setExpFilter(id as JobType)}
            >
              { title }
            </button>
          ))}
          <button
            className={[styles.experienceToggle, expFilter === null ? styles.active : '' ].join(' ')}
            onClick={() => setExpFilter(null)}
          >
            All
          </button>
        </div>

        { experience.items.map((exp, index) => (
          <div
            className={styles.experienceItem} key={`item--${index}`}
            data-active={expFilter ? exp.type.includes(expFilter) : true}
          >
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
