export default function Modal({ message, winner, handleClick }) {
  return (
    <section className='fixed opacity-100 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center cursor-default z-10 '>
      <div className='relative top-60 p-12 w-full max-w-sm h-full max-h-72 bg-zinc-900 flex flex-col justify-center items-center rounded-md border border-[#222] gap-8 '>
        <p className='text-4xl'>Won</p>
        <p className='text-6xl'>X</p>
        <button className='rounded transition-transform bg-green-400 text-zinc-900 px-4 py-2 font-semibold hover:scale-105 hover:opacity-90'>
          Restart game
        </button>
      </div>
    </section>
  )
}
