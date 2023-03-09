function Wall(props) {
    const { name, changeName } = props

    return (
        <div className='w-full h-screen fixed'>
            <form className=' bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Username</label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='username'
                        placeholder='Username'
                        type='text'
                    />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                    <input
                        className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        id='password'
                        placeholder='******************'
                        type='password'
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <button
                        className='bg-red hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        onClick={changeName}
                        type='button'
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Wall
