import loginImg from '../assets/login.svg';
import google from '../assets/google.svg';
import { useForm } from 'react-hook-form';
import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { API } from '../utils/backend';
import { loginService } from '../services/lib/auth';
import toast from 'react-hot-toast';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await loginService(data);

      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    }
  };

  const handleGoogleLogin = () => {
    // Make a GET request to your backend Google login route
    window.location.href = `${API}/auth/google`;
  };

  return (
    <div className='flex items-center h-screen'>
      <div className='basis-0 sm:basis-2/4 md:basis-3/5 h-full bg-purple-700 flex justify-center items-center'>
        <img src={loginImg} alt='' className='w-[70%]' />
      </div>
      <div className='w-full basis-4/4 sm:basis-2/4 md:2/5 max-w-[480px] m-auto px-8 flex justify-center items-center flex-col'>
        <h1 className='text-3xl md:text-4xl mb-2'>Hello Again!</h1>
        <p className='text-center'>Please login to continue</p>

        <form onSubmit={handleSubmit(onSubmit)} className='block w-full'>
          <div className='my-4'>
            <Label htmlFor='email' value='Your email' />

            <TextInput
              id='email'
              name='email'
              placeholder='ram@gmail.com'
              type='email'
              className='my-2'
              {...register('email', { required: true })}
            />
            {errors.email?.type === 'required' && (
              <p role='alert' className='text-xs text-red-500'>
                Email is required
              </p>
            )}
          </div>
          <div className='my-4'>
            <Label htmlFor='password' value='Your password' />

            <TextInput
              id='password'
              name='password'
              placeholder='******'
              type='password'
              className='my-2'
              {...register('password', { required: true })}
            />
            {errors.password?.type === 'required' && (
              <p role='alert' className='text-xs text-red-500'>
                Password is required
              </p>
            )}
          </div>
          <Button
            type='submit'
            className='w-full font-semibold'
            color='primary'
          >
            Login
          </Button>
          <button
            type='button'
            onClick={handleGoogleLogin}
            className='w-full flex  items-center justify-center gap-2 my-4 p-2 text-center rounded-md border border-gray-300 text-zinc-600 font-semibold'
          >
            <img src={google} className='w-7 h-7' alt='' /> Continue with Google
          </button>

          <p className='flex justify-center gap-2'>
            Don&apos;t have an account?{' '}
            <Link className='text-blue-600' to='/signup'>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
