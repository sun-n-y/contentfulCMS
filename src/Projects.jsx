import useFetchProjects from './fetchProjects';

const Projects = () => {
  const value = useFetchProjects();

  return <h2>Projects</h2>;
};
export default Projects;

//
