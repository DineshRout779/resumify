// import { useQuery } from 'react-query';
// import axios from 'axios';

import Features from '../components/Features';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stories from '../components/Stories';

// const fetchUsers = async () => {
//   const res = await axios.get('./data.json');
//   return res.data;
// };

const Home = () => {
  // const { data, status } = useQuery('users', fetchUsers);

  // console.log(data, status);
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Stories />
    </>
  );
};

export default Home;
