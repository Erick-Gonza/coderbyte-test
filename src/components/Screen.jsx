const Screen = ({ render }) => {
  return (
    <div className='w-full h-16 border border-gray-500 bg-gray-200 rounded-b-sm px-2 py-3 mb-2'>
      <p className='text-center font-semibold text-xl'>{render}</p>
    </div>
  )
}

export default Screen
