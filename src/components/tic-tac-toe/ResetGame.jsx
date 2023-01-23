export default function Reset({ handleClick }) {
  return (
    <button
      className='border-none rounded px-8 py-2 font-semibold bg-green-500 text-zinc-200 text-xl transition-transform hover:scale-105'
      onClick={handleClick}
    >
      Reset
    </button>
  )
}
