export default function Toast({ type }) {
  return (
    <div className='flex justify-between items-center px-3 py-2 text-black max-w-[300px] bg-green-400 rounded '>
      <div>
        <span className='font-bold'>✓ </span>This is a toast message!
      </div>
      <div className='font-bold'>X</div>
    </div>
  )
}
