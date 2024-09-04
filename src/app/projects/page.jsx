import Projects from '@/components/Projects';
import { getProjects } from '@/lib/projects';

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <div className='pb-24 pt-28'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>
        <Projects projects={projects} />
      </div>
    </div>
  );
};

export default ProjectsPage;
