import { useState } from 'react';

function Wall({ fetchData }) {
    const [localPassword, setLocalPassword] = useState('');

    return (
        <div className='h-full w-full fixed flex justify-center items-center'>
            <form className='block bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Password
                    </label>
                    <input
                        className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        id='password'
                        placeholder='******************'
                        type='password'
                        value={localPassword}
                        onChange={(e) => setLocalPassword(e.target.value)}
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <button
                        className='inline-block rounded border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-black hover:bg-black hover:text-white focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
                        type='button'
                        onClick={() => {
                            fetchData(localPassword);
                        }}
                    >
                        View portfolio
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Wall;
