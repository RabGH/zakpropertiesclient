import { GetServerSideProps } from 'next';
import { ProjectProps } from '../../../types';
import { sanityClient } from '../../../sanity';

interface ProjectPageProps {
  projects: ProjectProps[];
}

export const getServerSideProps: GetServerSideProps<ProjectPageProps> = async () => {
  const query = '*[_type == "property"]';
  const projects = await sanityClient.fetch(query);

  return {
    props: {
      projects,
    },
  };
};
