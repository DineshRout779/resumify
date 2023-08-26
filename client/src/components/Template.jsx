/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Template = ({ t }) => {
  const { url, title } = t;

  return (
    <Link
      to={`/build`}
      className='hover:scale-95 transition-transform duration-300'
    >
      <img
        src={url}
        alt={title}
        className='w-full aspect-[3/4] border border-gray-100 rounded-md'
      />
      <h2 className='text-sm my-2'>{title}</h2>
    </Link>
  );
};

export default Template;
