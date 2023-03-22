import ProjectCardSlug from './ProjectCardSlugs'
import { sanityClient } from '../../../../../sanity';
import { ProjectProps } from '../../../../../types';

interface ProjectCardDataProps {
    projects?: ProjectProps[];
}

export default function ProjectCardDataSlug({ projects }: ProjectCardDataProps) {
    return <ProjectCardSlug projects={projects} />;
}

export async function getServerSideProps() {
    const query = '*[_type == "projects"]';
    const projects = await sanityClient.fetch(query);

    if (!projects.length) {
        return {
            props: {
                projects: [],
            },
        };
    } else {
        return {
            props: {
                projects,
            },
        };
    }
}

