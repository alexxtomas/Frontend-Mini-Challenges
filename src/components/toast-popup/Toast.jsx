import { TOAST_TYPES } from '@/constants/toast-popup'
export default function Toast({ type, setShowToast, text }) {
  const selectedToast = TOAST_TYPES.find(({ name }) => name === type)
  return (
    <div
      className={`flex justify-between  items-center px-3 py-2 text-black max-w-[300px] ${selectedToast.color} rounded`}
    >
      <div>
        <span className='font-bold pr-2'>{selectedToast.symbol}</span>
        {text}
      </div>
      <div onClick={() => setShowToast(false)} className='font-bold cursor-pointer'>
        X
      </div>
    </div>
  )
}
