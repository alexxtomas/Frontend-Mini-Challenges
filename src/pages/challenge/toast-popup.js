import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
import Select from '@/components/toast-popup/Select'
import Toast from '@/components/toast-popup/Toast'
import { SELECTS } from '@/constants/toast-popup'
import { useState } from 'react'
export default function ToastPopup() {
  const [toastText, setToastText] = useState('This is a toast message!')
  const [rangeInput, setRangeInput] = useState(5)
  const [selectInputs, setSelectInputs] = useState(() => {
    let obj = {}
    SELECTS.forEach(({ name, defaultValue }) => {
      obj[name] = defaultValue
    })
    return obj
  })
  const [showToast, setShowToast] = useState(false)
  const handleChange = (evt) => {
    setSelectInputs((currentValues) => ({ ...currentValues, [evt.target.name]: evt.target.value }))
  }
  const handleClick = () => {
    setShowToast((currentValue) => !currentValue)
  }
  return (
    <>
      <Head title='Toast Popup' />
      <HeaderLayout>Toast Popup</HeaderLayout>
      <MainLayout>
        <section className='flex flex-col justify-center items-center gap-5'>
          {SELECTS.map(({ name, options }, index) => {
            return <Select handleChange={handleChange} name={name} key={index} options={options} />
          })}
          <label className='hidden' htmlFor='toast-message'>
            Enter the toast message
          </label>
          <input
            type='text'
            name='tost-message'
            value={toastText}
            onChange={({ target: { value } }) => setToastText(value)}
            className='rounded px-3 py-1 border border-black'
          />
          <div className='flex items-center justify-center gap-2'>
            <label htmlFor='duration' className='font-semibold '>
              Duration
            </label>
            <input
              id='duration'
              name='duration'
              min='3'
              max='10'
              type='range'
              className=''
              value={rangeInput}
              onChange={({ target: { value } }) => setRangeInput(value)}
            />
          </div>

          <button
            onClick={handleClick}
            className='bg-blue-300 font-semibold transition hover:brightness-125 px-4 py-2 rounded'
          >
            Show Toast
          </button>
        </section>
      </MainLayout>
      {showToast && <Toast type={selectInputs.Type} setShowToast={setShowToast} text={toastText} />}
    </>
  )
}
