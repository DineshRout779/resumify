import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Logo = ({ color }) => {
  return (
    <Link to='/' className='flex items-center gap-2'>
      <CheckBadgeIcon className='h-8 w-8 text-purple-700' />
      <h1
        className={
          color && color === 'white'
            ? 'text-xl md:text-2xl text-white'
            : 'text-xl md:text-2xl'
        }
      >
        Resumify
      </h1>
    </Link>
  );
};
export default Logo;
