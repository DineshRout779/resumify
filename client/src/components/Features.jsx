import { DocumentIcon } from '@heroicons/react/24/solid';

const data = [
  {
    id: 1,
    icon: <DocumentIcon className='w-8 h-8 text-white' />,
    title: 'Easy and Fast Online Resume Builder',
  },
  {
    id: 2,
    icon: <DocumentIcon className='w-8 h-8 text-white' />,
    title: 'Various Resume Templates To Choose',
  },
  {
    id: 3,
    icon: <DocumentIcon className='w-8 h-8 text-white' />,
    title: 'Various Resume Templates To Choose',
  },
];

const Features = () => {
  return (
    <div className='container w-[95%] mt-8 max-w-[1200px] mx-auto p-4'>
      <div className='text-center '>
        <div className='font-semibold'>
          <p className='text-purple-700 '>Features</p>
          <h1 className='text-4xl w-[90%] max-w-[600px] mx-auto my-4'>
            Features Designed To Help You Win Your Dream Job
          </h1>
        </div>
        <div className='grid gap-8 grid-cols-3 my-12'>
          {data.map((card) => (
            <div
              className='bg-slate-100 rounded-md flex justify-center items-center flex-col p-8 py-16'
              key={card.id}
            >
              <div className='p-4 bg-purple-700 rounded-md'>{card.icon}</div>
              <h3 className='text-xl font-semibold my-4'>{card.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, earum.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
