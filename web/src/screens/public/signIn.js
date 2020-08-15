import React from 'react';
import KeeperLogo from "../../assets/ic_launcher-web.png";
import { TextInput } from "../../components/forminputcomponent/textInput";
import { PasswordInput } from "../../components/forminputcomponent/passwordInput";

export const SignIn = () => {
  return (
    <div className='min-h-screen justify-center flex bg-gray-300 py-12 px-4 sm:px-6 lg:px-8'>
      <div className=' bg-gray-200 p-8 rounded px-24'>
        <div>
          <img src={KeeperLogo} className='w-32  h-32 mx-auto ' alt='logo' />
          <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <form className='mt-8' action='#' method='POST'>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm'>
            <div>
              <TextInput />
            </div>
            <div className='-mt-px'>
              <PasswordInput />
            </div>
          </div>

          <div className='mt-6 flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember_me'
                type='checkbox'
                className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out' />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor='remember_me' className='ml-2 block text-sm leading-5 text-gray-900'>
                Remember me
              </label>
            </div>

            <div className='text-sm leading-5'>
              <a
                href='https://google.com'
                className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'>
                Forgot your password?
              </a>
            </div>
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <svg
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd' />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
        <div className='mt-12'>
          <p className='text-gray-500 text-center mb-6'>you can also sign in with   </p>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>
            <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
              <svg
                className='_ufjrdd w-8 h-8'
                viewBox='0 0 24 24'
                role='img'
                aria-labelledby='Google437a9bfe-fa2e-4fda-9996-f7483368fba6 Google437a9bfe-fa2e-4fda-9996-f7483368fba6Desc'
                xmlns='http://www.w3.org/2000/svg'
                >
                <title
                  id='Google437a9bfe-fa2e-4fda-9996-f7483368fba6'>
                  Google
                </title>
                <g
                  fill='none'
                  fillRule='evenodd'
                  role='presentation'>
                  <path
                    d='M23.52 12.273c0-.851-.076-1.67-.218-2.455H12v4.642h6.458a5.52 5.52 0 01-2.394 3.622v3.01h3.878c2.269-2.088 3.578-5.165 3.578-8.82z'
                    fill='#4285F4'
                    fillRule='nonzero' />
                  <path
                    d='M12 24c3.24 0 5.956-1.075 7.942-2.907l-3.878-3.011c-1.075.72-2.45 1.145-4.064 1.145-3.125 0-5.77-2.11-6.715-4.947H1.276v3.11A11.995 11.995 0 0012 24z'
                    fill='#34A853'
                    fillRule='nonzero' />
                  <path
                    d='M5.285 14.28A7.213 7.213 0 014.91 12c0-.79.136-1.56.376-2.28V6.61H1.276A11.995 11.995 0 000 12c0 1.936.464 3.77 1.276 5.39l4.01-3.11z'
                    fill='#FBBC05'
                    fillRule='nonzero' />
                  <path
                    d='M12 4.773c1.762 0 3.344.605 4.587 1.794l3.442-3.442C17.951 1.19 15.235 0 12 0 7.31 0 3.25 2.69 1.276 6.61l4.01 3.11C6.228 6.884 8.874 4.773 12 4.773z'
                    fill='#EA4335'
                    fillRule='nonzero' />
                  <path d='M0 0h24v24H0z' />
                </g>
              </svg>
            </span>
            Sign in using Google
          </button>

        </div>
      </div>
    </div> 
  );
};

