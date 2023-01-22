export default function Cell({ children, handleClick, index, styles }) {
  console.log(styles)
  return (
    <div
      onClick={() => handleClick && handleClick(index)}
      className={`border w-[100px] h-[100px] flex items-center justify-center text-5xl cursor-pointer ${styles}`}
    >
      {children}
    </div>
  )
}
