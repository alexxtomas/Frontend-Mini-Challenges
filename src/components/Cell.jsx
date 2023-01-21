export default function Cell({ children, handleClick, index }) {
  return (
    <div
      onClick={() => handleClick(index)}
      className='border min-w-full h-[100px] flex items-center justify-center text-5xl cursor-pointer'
    >
      {children}
    </div>
  )
}
