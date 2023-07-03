import { Link } from 'react-router-dom';

const Stories = () => {
  return (
    <div className='container w-[95%] my-16 max-w-[1200px] mx-auto p-4 flex justify-between items-center gap-12'>
      <div className='basis-1/2'>
        <h1 className='text-4xl mb-6 font-semibold'>
          Create Professional <br /> Stories In Minutes <br /> With Our App
        </h1>
        <p className='w-[80%]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          fugiat vitae beatae quo id tempora necessitatibus sed! Neque
          cupiditate rerum, praesentium saepe velit aperiam eaque nam temporibus
          laboriosam soluta ipsa!
        </p>

        <Link
          to='/signup'
          className='inline-block mt-4 p-2 px-4 bg-purple-700 border border-purple-900 rounded-md text-white'
        >
          Create My Resume
        </Link>
      </div>
      <div className='basis-1/2'>
        <img
          src='https://images.pexels.com/photos/7752846/pexels-photo-7752846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='w-[80%] ml-auto rounded-md'
        />
      </div>
    </div>
  );
};
export default Stories;
