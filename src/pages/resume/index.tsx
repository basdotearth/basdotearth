import Resume from '../../components/Pages/Resume';
import type { ResumeProps } from '../../components/Pages/Resume';

import { collectStaticContent } from '../../helpers/mdx';
import { resolvePromisesObject } from '../../helpers/promises';
import type { EducationMeta, ExperienceMeta } from '../../types';
import type { CombinedResult, ErrorResult, MDXCombinedPageProps } from '../../types/mdx';

export const getStaticProps: MDXCombinedPageProps<ResumeProps> = async () => {
  const results = await resolvePromisesObject({
    experience: collectStaticContent<ExperienceMeta>({
      type: 'resumeExperience',
      sort: (a, b) => (new Date(b.start)).valueOf() - (new Date(a.start)).valueOf(),
    }),
    education: collectStaticContent<EducationMeta>({
      type: 'resumeEducation',
      sort: (a, b) => (new Date(b.start)).valueOf() - (new Date(a.start)).valueOf(),
    }),
  }) as CombinedResult<ResumeProps, true>;

  const error = Object.values(results).find(result => 'errorCode' in result);
  if (error !== undefined) {
    return { props: error as ErrorResult };
  }

  return { props: results as CombinedResult<ResumeProps, false> };
};

export default Resume;
