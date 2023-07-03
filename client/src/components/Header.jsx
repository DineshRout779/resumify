import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Logo from './Logo';

const Header = () => {
  const {
    state: { user },
  } = useAuth();
  return (
    <Navbar fluid className='container w-[95%] max-w-[1200px] mx-auto p-0 py-8'>
      <Logo />

      <div className='flex gap-2 md:order-2'>
        {user ? (
          <Dropdown
            inline
            arrowIcon={false}
            label={
              <Avatar alt='User settings' img={user?.profilePic} rounded />
            }
            className='rounded-md'
          >
            <Dropdown.Header>
              <span className='block text-sm'>{user?.displayName}</span>
              <span className='block truncate text-sm font-medium'>
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <div>
            <Link
              to='/login'
              className='hidden md:visible p-2 px-4 bg-white border border-purple-700 hover:border-purple-900 hover:bg-gray-100 text-purple-700 rounded-md '
            >
              Login
            </Link>
            <Link
              to='/signup'
              className='hidden md:visible p-2 px-4 bg-purple-700 border border-purple-900 rounded-md text-white'
            >
              Signup
            </Link>
          </div>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href='#'>
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href='#'>About</Navbar.Link>
        <Navbar.Link href='#'>Services</Navbar.Link>
        <Navbar.Link href='#'>Pricing</Navbar.Link>
        <Navbar.Link href='#'>Contact</Navbar.Link>
        {!user && (
          <div className='md:hidden mt-4 flex gap-4'>
            <Link
              to='/login'
              className=' p-2 px-4 bg-white border border-purple-700 hover:border-purple-900 hover:bg-gray-100 text-purple-700 rounded-md '
            >
              Login
            </Link>
            <Link
              to='/signup'
              className=' p-2 px-4 bg-purple-700 border border-purple-900 rounded-md text-white'
            >
              Signup
            </Link>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
