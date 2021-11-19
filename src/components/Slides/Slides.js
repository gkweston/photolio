import uniqid from 'uniqid'
import { slides } from '../../homepage'
import './Slides.css'

const Slides = () => {
  if (!slides.length) return null

  return (
    <section className='section slides' id='slides'>
      <h2 className='section__title'>cameras</h2>
      <ul className='slides__list'>
        {slides.map((slide) => (
          <li key={uniqid()} className='slides__list-item btn btn--plain'>
            <img className='slides__img' src={ (slide) } alt='not found' />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Slides
