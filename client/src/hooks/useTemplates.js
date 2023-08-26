import { useEffect, useState } from 'react';

const data = [
  {
    url: 'https://marketplace.canva.com/EAFSLI7n6x4/1/0/1131w/canva-KjN0Z-p3Mo8.jpg',
    title: 'Minimalist White Resume',
  },
  {
    url: 'https://marketplace.canva.com/EAFjRZP7Qy4/1/0/283w/canva-w7vPJrquk6g.jpg',
    title: 'Minimalist White Resume',
  },
  {
    url: 'https://marketplace.canva.com/EAFRuCp3DcY/1/0/283w/canva-swApGcBxh5k.jpg',
    title: 'Minimalist White Resume',
  },
  {
    url: 'https://marketplace.canva.com/EAE8mhdnw_g/2/0/566w/canva-Es9CG8Ke5XI.jpg',
    title: 'Minimalist White Resume',
  },
  {
    url: 'https://marketplace.canva.com/EAFmkdYJWdI/1/0/566w/canva-lxy_sWmzn80.jpg',
    title: 'Minimalist White Resume',
  },
  {
    url: 'https://marketplace.canva.com/EAFSLI7n6x4/1/0/1131w/canva-KjN0Z-p3Mo8.jpg',
    title: 'Minimalist White Resume',
  },
  {
    url: 'https://marketplace.canva.com/EAFSLI7n6x4/1/0/1131w/canva-KjN0Z-p3Mo8.jpg',
    title: 'Minimalist White Resume',
  },
  {
    url: 'https://marketplace.canva.com/EAFSLI7n6x4/1/0/1131w/canva-KjN0Z-p3Mo8.jpg',
    title: 'Minimalist White Resume',
  },
  {
    url: 'https://marketplace.canva.com/EAFSLI7n6x4/1/0/1131w/canva-KjN0Z-p3Mo8.jpg',
    title: 'Minimalist White Resume',
  },
];

const useTemplates = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setTemplates(data);
    }, 1000);
  }, []);

  return { isLoading, templates };
};

export default useTemplates;
