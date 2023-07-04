import { Link } from 'react-router-dom';
import storyImg from '../assets/stories.svg';

const Stories = () => {
  return (
    <div className='container w-[95%] my-24 max-w-[1200px] mx-auto p-4 block md:flex flex-row-reverse justify-between items-center gap-12'>
      <div className='basis-1/2 my-8 md:m-0'>
        <img src={storyImg} alt='' />
      </div>
      <div className='basis-1/2 text-center md:text-left'>
        <h1 className='text-2xl md:text-4xl mb-6 font-semibold'>
          Create Professional <br /> Stories In Minutes <br /> With Our App
        </h1>
        <p className='w-full text-sm md:text-base md:w-[80%]'>
          Craft professional resumes effortlessly with our user-friendly app.
          Showcase your skills effectively, capturing employers&apos; attention.
          Build polished resumes in minutes using our intuitive interface and
          powerful features. Unlock career opportunities hassle-free.
        </p>

        <Link
          to='/signup'
          className='inline-block mt-4 p-2 px-4 bg-purple-700 border border-purple-900 rounded-md text-white'
        >
          Create My Resume
        </Link>
      </div>
    </div>
  );
};
export default Stories;
