import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
import { formatNumber } from '@/logic/telephone-formatter/formatPhone'
import { useState } from 'react'

export default function TelephoneFormatter() {
  const [mobileNumber, setMobileNumber] = useState('')

  const handleChange = ({ target: { value } }) => {
    const newValue = formatNumber(value)
    setMobileNumber(newValue)
  }

  return (
    <>
      <Head title='Guess the number' />
      <HeaderLayout>Telephone formatter</HeaderLayout>
      <MainLayout>
        <label htmlFor='mobileNumber' className='hidden'>
          Enter a mobile number to format
        </label>
        <input
          id='mobileNumber'
          className=' rounded pl-4 h-8 w-64 text-black text-xl'
          placeholder='Mobile number'
          onChange={handleChange}
          value={mobileNumber}
          type='tel'
        />
        <span className='mt-5 text-lg '>+(123)-679911255</span>
      </MainLayout>
    </>
  )
}
