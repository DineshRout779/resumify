const data = ['Popular', 'Minimalist', 'Professional'];

const Filters = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-xl'>Filters</h1>
      <ul className='flex items-center gap-4 '>
        {data.map((d, i) => (
          <li
            className='bg-gray-100 rounded-md p-2 px-4 cursor-pointer border border-transparent hover:border-blue-500'
            key={i}
          >
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
