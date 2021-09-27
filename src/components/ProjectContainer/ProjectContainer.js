import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import imgTest from '../../Photos/imgTest.JPG'
import './ProjectContainer.css'

// const imgTest = require('../../Photos/imgTest.JPG')

const ProjectContainer = ({ project }) => (
  
  <div className='project'>

    <div className='imgTest'>
      <img src={ imgTest } height='300' width='300' alt='none' />
    </div>

    {/*
    <img 
      src={ imgTest.default }
      height='200'
      width='200'
      alt='not found'
    />
    */}

    {/*
    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
    */}
  </div>
)

export default ProjectContainer
