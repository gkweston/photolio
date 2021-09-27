import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  /* eslint-disable global-require */
  const imgTest = require('../../Photos/imgTest.JPG')

  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      
      <h2 className='section__title'>Projects</h2>

      <img 
        src={ imgTest.default }
        height='200'
        width='200'
        alt='not found'
      />

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
  /* eslint-enable global-require */
}

export default Projects
