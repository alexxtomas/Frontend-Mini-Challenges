import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
import { useState } from 'react'

export default function TelephoneFormatter() {
  const [mobileNumber, setMobileNumber] = useState('')

  const handleChange = ({ target: { value } }) => {
    console.log(value)
    setMobileNumber(value)
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
        />
      </MainLayout>
    </>
    /// Three first numbers shoud be into ()
    // max length of 9
    //  no letters
    // prefix - numbers
    // +(123) 679911255
  )
}
