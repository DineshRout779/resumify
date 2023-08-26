import {
  ArrowLeftIcon,
  ArrowLongRightIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid';
import { Button, Label, TextInput } from 'flowbite-react';

const InfoSection = () => {
  return (
    <main className='p-4 px-8 h-[90vh] overflow-y-scroll'>
      <header className='flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>Personal Info</h1>

        <div className='flex gap-2 items-center  font-semibold'>
          <button className='bg-gray-100 rounded-md p-2'>
            <ArrowLeftIcon className='w-5 h-5' />
          </button>
          <button className='bg-blue-600 text-white rounded-md p-2'>
            <ArrowRightIcon className='w-5 h-5' />
          </button>
        </div>
      </header>

      <form className='flex w-full my-8 flex-col gap-4'>
        {/* name */}
        <div className='flex gap-4'>
          <div className='basis-1/2'>
            <Label
              htmlFor='firstName'
              className='mb-2 block'
              value='First name'
            />

            <TextInput
              id='firstName'
              name='firstName'
              placeholder='Tony'
              required
              type='text'
            />
          </div>
          <div className='basis-1/2'>
            <Label
              htmlFor='lastName'
              className='mb-2 block'
              value='Last name'
            />

            <TextInput
              id='lastName'
              name='lastName'
              placeholder='Stark'
              required
              type='text'
            />
          </div>
        </div>

        {/* title */}
        <div>
          <Label
            htmlFor='title'
            className='mb-2 block'
            value='Title (designation)'
          />

          <TextInput
            id='title'
            name='title'
            placeholder='Engineer'
            required
            type='text'
          />
        </div>

        {/* address */}
        <div>
          <Label htmlFor='address' className='mb-2 block' value='Address' />

          <TextInput
            id='address'
            name='address'
            placeholder='10880 Malibu Point, 90265'
            required
            type='text'
          />
        </div>

        {/* links */}

        <div>
          <label className='text-sm mb-2 block'>Links</label>

          <TextInput
            id='github'
            addon='Github'
            name='github'
            placeholder='Your link here'
            required
            type='text'
            className='w-full my-2'
          />
          <TextInput
            id='linkedin'
            addon='Linkedin'
            name='linkedin'
            placeholder='Your link here'
            required
            type='text'
            className='w-full my-2'
          />
          <TextInput
            id='portfolio'
            addon='Portfolio'
            name='portfolio'
            placeholder='Your link here'
            required
            type='text'
            className='w-full my-2'
          />
          <TextInput
            id='leetcode'
            addon='Leetcode'
            name='leetcode'
            placeholder='Your link here'
            required
            type='text'
            className='w-full my-2'
          />
        </div>

        <Button
          type='submit'
          className='font-semibold w-fit flex items-center'
          color='primary'
        >
          <p>Next</p> <ArrowLongRightIcon className='w-6 h-6 ml-2' />
        </Button>
      </form>
    </main>
  );
};
export default InfoSection;
