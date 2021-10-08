import { header } from '../../homepage'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { website, title } = header

  return (
    <header className='header center'>
      <h3>
        {website ? (
          <a href={website} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
