// import { useQuery } from 'react-query';
// import axios from 'axios';

import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stories from '../components/Stories';

const Home = () => {
  // const { data, status } = useQuery('users', fetchUsers);

  // console.log(data, status);
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Stories />
      <Footer />
    </>
  );
};

export default Home;
