import Logo from './Logo';

const Footer = () => {
  return (
    <div className='bg-slate-950 '>
      <div className='container w-[95%] max-w-[1200px] mx-auto py-8 px-4'>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-4'>
          <div className='space-y-2'>
            <Logo color='white' />
          </div>
          <div className='space-y-2 text-gray-500'>
            <h1 className='text-lg mb-4 text-white uppercase'>Help Center</h1>
            <a href='#' className='hover:text-purple-400 hover:underline'>
              About
            </a>
            <a href='#' className='hover:text-purple-400 hover:underline'>
              Services
            </a>
            <a href='#' className='hover:text-purple-400 hover:underline'>
              Contact us
            </a>
          </div>
          <div className='space-y-2 text-gray-500'>
            <h1 className='text-lg mb-4 text-white uppercase'>Legal</h1>
            <a href='#' className='hover:text-purple-400 hover:underline'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-purple-400 hover:underline'>
              Licensing
            </a>
            <a href='#' className='hover:text-purple-400 hover:underline'>
              Terms & Conditions
            </a>
          </div>
          <div className='space-y-2 text-gray-500'>
            <h1 className='text-lg mb-4 text-white uppercase'>Connect</h1>
            <a href='#' className='hover:text-purple-400 hover:underline'>
              Github
            </a>
            <a href='#' className='hover:text-purple-400 hover:underline'>
              Linkedin
            </a>
            <a href='#' className='hover:text-purple-400 hover:underline'>
              Discord
            </a>
          </div>
        </div>
        <div className='text-center mt-12 text-gray-100'>
          © 2023 All rights reserved. Created by Dinesh Rout
        </div>
      </div>
    </div>
  );
};
export default Footer;
