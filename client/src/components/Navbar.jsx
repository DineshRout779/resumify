import { Link } from 'react-router-dom';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <div className='container max-w-[1200px] mx-auto flex items-center justify-between p-4 py-8 '>
      <Link to='/' className='flex items-center gap-2'>
        <CheckBadgeIcon className='h-8 w-8 text-purple-700' />
        <h1 className='text-2xl'>Resumify</h1>
      </Link>

      <nav className='block'>
        <ul className='flex items-center gap-4'>
          <li className='block'>
            <Link
              to='/login'
              className='p-2 px-4 bg-white border border-purple-700 hover:border-purple-900 hover:bg-gray-100 text-purple-700 rounded-md '
            >
              Login
            </Link>
          </li>
          <li className='block'>
            <Link
              to='/signup'
              className='p-2 px-4 bg-purple-700 border border-purple-900 rounded-md text-white'
            >
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
