import {
  CheckBadgeIcon,
  ClipboardDocumentListIcon,
  CurrencyRupeeIcon,
  EyeIcon,
  HandThumbUpIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/solid';

const data = [
  {
    id: 1,
    icon: <HandThumbUpIcon className='w-4 h-4 md:w-8 md:h-8 text-white' />,
    title: 'User Friendly',
    desc: 'Create professional resumes effortlessly with our user friendly interface editor.',
  },
  {
    id: 2,
    icon: <CheckBadgeIcon className='w-4 h-4 md:w-8 md:h-8 text-white' />,
    title: 'Industry Specific',
    desc: 'Highlight your skills and experiences with templates designed for your field.',
  },
  {
    id: 3,
    icon: <CurrencyRupeeIcon className='w-4 h-4 md:w-8 md:h-8 text-white' />,
    title: 'Free Forever',
    desc: 'Build your resume for free without any limitations or hidden charges.',
  },
  {
    id: 4,
    icon: <EyeIcon className='w-4 h-4 md:w-8 md:h-8 text-white' />,
    title: 'Live Previews',
    desc: 'See instant previews of your resume as you make changes.',
  },
  {
    id: 5,
    icon: (
      <ClipboardDocumentListIcon className='w-4 h-4 md:w-8 md:h-8 text-white' />
    ),
    title: 'Versatile Templates',
    desc: 'Choose from a wide range of customizable templates to create a unique and impactful resume.',
  },
  {
    id: 6,
    icon: <RocketLaunchIcon className='w-4 h-4 md:w-8 md:h-8 text-white' />,
    title: 'Open Source',
    desc: 'Resumify is a open source project, ideas and creativity are welcome',
  },
];

const Features = () => {
  return (
    <div className='container w-[95%] mt-8 max-w-[1200px] mx-auto p-4'>
      <div className='text-center '>
        <div className='font-semibold'>
          <h5 className='text-purple-700 '>Features</h5>
          <h1 className='w-[90%] max-w-[600px] mx-auto my-4 text-2xl md:text-4xl'>
            Features Designed To Help You Win Your Dream Job
          </h1>
        </div>
        <div className='grid gap-6 grid-cols-2 md:grid-cols-3 my-12'>
          {data.map((card) => (
            <div
              className='bg-blue-50 border border-slate-200 rounded-md flex justify-center items-center flex-col p-5 py-10'
              key={card.id}
            >
              <div className='p-2 bg-purple-700 rounded-md'>{card.icon}</div>
              <h3 className='text-lg font-semibold my-4 mb-2'>{card.title}</h3>
              <p className='text-zinc-500 text-xs  md:text-sm'>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
