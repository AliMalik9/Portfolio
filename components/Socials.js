import Link from 'next/link'
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitterLine,
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
        href={'/'}
        className='hover:text-accent transition-all duration-500'
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={'/'}
        className='hover:text-accent transition-all duration-500'
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={'/'}
        className='hover:text-accent transition-all duration-500'
      >
        <RiTwitterLine />
      </Link>
      <Link
        href={'/'}
        className='hover:text-accent transition-all duration-500'
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={'/'}
        className='hover:text-accent transition-all duration-500'
      >
        <RiGithubLine />
      </Link>
      <Link
        href={'/'}
        className='hover:text-accent transition-all duration-500'
      >
        <RiDribbbleLine />
      </Link>
      <Link
        href={'/'}
        className='hover:text-accent transition-all duration-500'
      >
        <RiBehanceLine />
      </Link>
      <Link
        href={'/'}
        className='hover:text-accent transition-all duration-500'
      >
        <RiPinterestLine />
      </Link>
    </div>
  )
}

export default Socials
