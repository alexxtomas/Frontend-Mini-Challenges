import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
import { useState } from 'react'

export default function TelephoneFormatter() {
  const [mobileNumber, setMobileNumber] = useState('')
  const [isFormatted, setIsFormatted] = useState(false)
  const [prefix, setPrefix] = useState('')

  const handleChange = ({ target: { value } }) => {
    const prefixRegex = /\+\([0-9][0-9][0-9]\)-/
    const onlyDigitsRegex = /^\d+$/
    const { length } = value
    let newPrefix = undefined

    if (value === prefix) {
      console.log('a')
      setPrefix('')
    }

    if (length === 16) {
      return
    }

    if (length > 16) {
      const newValue = value.slice(0, 16)
      value = newValue
    }

    if (!onlyDigitsRegex.test(value)) {
      const arrayFromValue = value.split('')
      const fromattedArray = arrayFromValue.filter((character) => onlyDigitsRegex.test(character))

      value = fromattedArray.join('')
    }

    if (length <= 0 && isFormatted) {
      setIsFormatted(false)
    }
    if (length > 4) {
      if (!isFormatted) {
        let prefixArray = []
        for (let i = 0; i <= 6; i++) {
          prefixArray.push(value[i])
        }
        const currentPrefix = prefixArray.join('')
        newPrefix = !prefixRegex.test(currentPrefix)
          ? `+(${value[0]}${value[1]}${value[2]})-`
          : currentPrefix

        setIsFormatted(true)
      }
      value = value.slice(3)
    }

    let prefixToUse = prefix

    if (newPrefix) {
      setPrefix(newPrefix)
      prefixToUse = newPrefix
    }
    setMobileNumber(`${prefixToUse}${value}`)
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
