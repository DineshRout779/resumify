import useTemplates from '../hooks/useTemplates';
import Filters from './Filters';
import ShimmerTemplateCard from './simmers/ShimmerTemplateCard';
import Template from './Template';

const TemplateList = () => {
  const { templates, isLoading } = useTemplates();

  return (
    <>
      <h1 className='text-2xl font-semibold my-4'>Templates</h1>
      <Filters />
      <div className='my-4 grid gap-8 grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <ShimmerTemplateCard key={i} />
            ))
          : templates.map((t, i) => <Template key={i} i={i} t={t} />)}
      </div>
    </>
  );
};

export default TemplateList;
