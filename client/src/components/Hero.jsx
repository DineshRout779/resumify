import heroImg from '../assets/hero.svg';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Hero = () => {
  const {
    state: { user },
  } = useAuth();

  return (
    <div className='container max-w-[1200px] mx-auto block md:flex flex-row-reverse items-center justify-between gap-10 p-4 px-8 min-h-[80vh]'>
      <div className='basis-2/4'>
        <img
          src={heroImg}
          alt='Resumify'
          className='mb-4 w-[50%] mx-auto md:w-full'
        />
      </div>
      <div className='basis-2/4'>
        <h1 className='text-center md:text-left text-3xl sm:text-4xl md:text-6xl leading-tight font-bold'>
          Build Your Winning{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700'>
            Resume
          </span>{' '}
          in <br /> Minutes
        </h1>
        <p className='text-center md:text-left my-6 md:w-72'>
          Your one stop solution for crafting professional resumes that make an
          impact!
        </p>

        <div className='flex justify-center md:justify-normal items-center gap-4'>
          {!user ? (
            <>
              <Link to='/signup'>
                <Button className='text-2xl font-bold' color={'primary'}>
                  Get started
                </Button>
              </Link>
              <Button className='text-2xl font-bold' color={'outline'}>
                Learn more
              </Button>
            </>
          ) : (
            <Link to='/dashboard'>
              <Button className='text-2xl font-bold' color={'primary'}>
                Go to dashboard
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Hero;
