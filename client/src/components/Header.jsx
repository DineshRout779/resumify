import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { logout } from '../reducers/authReducers';
import AvatarDefault from './AvatarDefault';
import Logo from './Logo';

const Header = () => {
  const {
    state: { user, loading },
    dispatch,
  } = useAuth();

  const handleLogout = async () => {
    dispatch(logout());
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <div className='backdrop-blur-sm bg-white/50 sticky top-0 z-50'>
      <Navbar
        fluid
        className='container w-[95%] bg-transparent max-w-[1200px] mx-auto p-0 py-8'
      >
        <Logo />

        <div className='flex gap-2 md:order-2'>
          {loading ? (
            <AvatarDefault />
          ) : user ? (
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
              <Dropdown.Item>
                <Link to='/dashboard'>Dashboard</Link>
              </Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <div className='hidden md:flex gap-2'>
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
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href='#'>
            Home
          </Navbar.Link>
          <Navbar.Link href='#'>Templates</Navbar.Link>
          <Navbar.Link href='#'>About</Navbar.Link>
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
    </div>
  );
};
export default Header;
