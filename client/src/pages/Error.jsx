import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import errorImg from '../assets/error.svg';

const Error = () => {
  return (
    <div className='text-center h-screen flex justify-center items-center flex-col'>
      <img
        src={errorImg}
        className='w-full max-w-[480px] mx-auto'
        alt='404 Error'
      />
      <h1 className='text-xl md:text-2xl mb-4'>Page Not Found!</h1>
      <Link
        to='/'
        className='bg-purple-700 flex justify-center items-center gap-2 text-white p-2 px-8 rounded-md'
      >
        <ArrowLongLeftIcon className='h-8 w-8' /> Homepage
      </Link>
    </div>
  );
};
export default Error;
