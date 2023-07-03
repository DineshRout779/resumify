import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className='flex items-center gap-2'>
      <CheckBadgeIcon className='h-8 w-8 text-purple-700' />
      <h1 className='text-xl md:text-2xl'>Resumify</h1>
    </Link>
  );
};
export default Logo;
