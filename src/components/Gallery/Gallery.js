import uniqid from 'uniqid'
import { gallery } from '../../homepage'
import GalleryPostContainer from '../GalleryPostContainer/GalleryPostContainer'
import './Gallery.css'

const Gallery = () => {
  if (!gallery.length) return null

  return (
    <section id='gallery' className='section gallery'>
      <h2 className='section__title'>Gallery</h2>
      <div className='gallery__grid'>
        {gallery.map((_gallery) => (
          <GalleryPostContainer key={uniqid()} gallery={_gallery} />
        ))}
      </div>
    </section>
  )
}

export default Gallery
