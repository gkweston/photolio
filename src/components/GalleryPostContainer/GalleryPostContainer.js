import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './GalleryPostContainer.css'

const GalleryPostContainer = ({ gallery }) => (
  
  <div className='class_gallery'>
    
    <div className='imgTest'>
      <img src={ (gallery.imgImport) } height='300' width='300' alt='not found' />
    </div>

    {/*
    <p className='gallery__description'>{gallery.description}</p>
    {gallery.stack && (
      <ul className='gallery__stack'>
        {gallery.stack.map((item) => (
          <li key={uniqid()} className='gallery__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    

    {gallery.sourceCode && (
      <a
        href={gallery.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {gallery.livePreview && (
      <a
        href={gallery.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
    */}
  </div>
)

export default GalleryPostContainer
