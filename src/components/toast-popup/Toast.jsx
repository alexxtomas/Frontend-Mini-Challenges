import { TOAST_TYPES } from '@/constants/toast-popup'
export default function Toast({ type, setShowToast, text, duration, side, position }) {
  const selectedToast = TOAST_TYPES.find(({ name }) => name === type)
  const lowerCaseSide = side.toLowerCase()
  const lowerCasePosition = position.toLowerCase()

  setTimeout(() => {
    setShowToast(false)
  }, duration * 1000)

  return (
    <div
      className={`flex justify-between absolute ${lowerCasePosition}-4 ${lowerCaseSide}-4  items-center px-3  text-black max-w-[300px] ${selectedToast.color} rounded`}
    >
      <div>
        <span className='font-bold pr-2'>{selectedToast.symbol}</span>
        {text}
      </div>
      <div onClick={() => setShowToast(false)} className=' cursor-pointer pl-5 pb-[2px] text-3xl'>
        ×
      </div>
    </div>
  )
}
