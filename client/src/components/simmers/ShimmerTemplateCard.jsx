const ShimmerTemplateCard = () => {
  return (
    <div className='animate-pulse'>
      <div className='w-full aspect-[3/4] bg-gray-200 my-2 rounded-md'></div>
      <div className='w-[80%] h-6 my-2 bg-gray-200 rounded-md'></div>
      <div className='w-[40%] h-3 bg-gray-200 rounded-md'></div>
      {/* <div className='w-full h-48'></div> */}
    </div>
  );
};

export default ShimmerTemplateCard;
