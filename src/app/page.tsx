import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import Resume from 'components/Pages/Resume';
import { collectStaticContent } from 'helpers/mdx';
import type { EducationMeta, ExperienceMeta } from 'types/index';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Product Owner, Frontend Developer with 10+ years of experience and Agile Change Agent',
};

const Page = async () => {
  const [experience, education] = await Promise.all([
    collectStaticContent<ExperienceMeta>({
      type: 'resumeExperience',
      sort: (a, b) => (new Date(b.start)).valueOf() - (new Date(a.start)).valueOf(),
    }),
    collectStaticContent<EducationMeta>({
      type: 'resumeEducation',
      sort: (a, b) => (new Date(b.start)).valueOf() - (new Date(a.start)).valueOf(),
    }),
  ]);

  if ('errorCode' in experience || 'errorCode' in education) {
    redirect('/404');
  }

  return <Resume experience={experience} education={education} />;

};

export default Page;
