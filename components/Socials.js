import Link from 'next/link'
import {
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center space-x-4 text-2xl'>

      <Link
        href={'https://www.facebook.com/alimalikUI/'}  target='_blank'
        className='hover:text-accent transition-all duration-500'
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={'https://www.facebook.com/alimalikUI/'}  target='_blank'
        className='hover:text-accent transition-all duration-500'
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={'https://github.com/alimalik9'} target='_blank'
        className='hover:text-accent transition-all duration-500'
      >
        <RiGithubLine />
      </Link>
      <Link
        href={'https://dribbble.com/alimalik8'} target='_blank'
        className='hover:text-accent transition-all duration-500'
      >
        <RiDribbbleLine />
      </Link>
      <Link
      href={'https://www.behance.net/alimalik0'} target="_blank"
        className='hover:text-accent transition-all duration-500'
      >
        <RiBehanceLine />
      </Link>
      <Link
        href={'https://www.pinterest.com/AliMalik0/'} target="_blank"
        className='hover:text-accent transition-all duration-500'
      >
        <RiPinterestLine />
      </Link>
    </div>
  )
}

export default Socials
