// import { useQuery } from 'react-query';
// import axios from 'axios';
import Navbar from '../components/Navbar';
import heroImg from '../assets/hero.gif';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

// const fetchUsers = async () => {
//   const res = await axios.get('./data.json');
//   return res.data;
// };

const Home = () => {
  // const { data, status } = useQuery('users', fetchUsers);

  // console.log(data, status);
  return (
    <div>
      <Navbar />
      <div className='container max-w-[1200px] mx-auto block md:flex flex-row-reverse items-center justify-between gap-10 p-4 min-h-[80vh]'>
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
            Your one stop solution for crafting professional resumes that make
            an impact!
          </p>

          <div className='flex justify-center md:justify-normal items-center gap-4'>
            <Link to='/signup'>
              <Button className='text-2xl font-bold' color={'primary'}>
                Get started
              </Button>
            </Link>
            <Button className='text-2xl font-bold' color={'outline'}>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
