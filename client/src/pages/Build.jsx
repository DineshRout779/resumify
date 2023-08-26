import { Link } from 'react-router-dom';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import InfoSection from '../components/InfoSection';

const Build = () => {
  //   const { templateId } = useParams();

  //   console.log(templateId);
  return (
    <div className='flex divide-x'>
      <div className='w-full flex divide-x'>
        <div className='w-5/12'>
          <header className='border-b p-4 sticky top-0 bg-white'>
            <Link
              to='/dashboard'
              className='p-2 px-4 w-fit hover:bg-gray-100 rounded-md flex items-center gap-2'
            >
              <ArrowLongLeftIcon className='h-6 w-6 text-zinc-500' />
              Go Back
            </Link>
          </header>

          <InfoSection />
        </div>
        <div className='w-7/12 h-screen border sticky top-0'>
          <header className='p-[22px]'>
            <h1 className='text-xl font-semibold'>Preview</h1>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Build;
