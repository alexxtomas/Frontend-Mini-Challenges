import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
import { useEffect } from 'react'
export default function LightAndDarkMode() {
  const userTheme = localStorage.getItem('theme')
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

  const handleChangeDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
      return
    }
    document.documentElement.classList.add('dark')
    window.localStorage.setItem('theme', 'dark')
  }
  const handleChangeContainedDarkMode = () => {
    const container = document.querySelector('#container-dark-mode')
    container.toggleAttribute('data-dark')
  }

  return (
    <>
      <Head title='Light & Dark Mode' />
      <HeaderLayout>Light & Dark Mode</HeaderLayout>
      <MainLayout>
        <section className='p-5'>
          <label className='text-xl'>
            Dark mode
            <input type='checkbox' onChange={handleChangeDarkMode} />
          </label>
          <div className='text-start min-w-full '>
            <p className='text-4xl'>Te entire page color theme is changed</p>
          </div>
        </section>
        <section className='mt-10 p-5'>
          <label className='block'>
            Contained dark mode
            <input type='checkbox' onChange={handleChangeContainedDarkMode} />
          </label>
          <div
            id='container-dark-mode'
            className='min-w-full bg-zinc-100 border  text-black border-black  text-center h-52 flex items-center justify-center dark:text-gray-200 dark:bg-zinc-900 dark:border-white '
          >
            <p className='text-4xl'>The container color shcema is only changed</p>
          </div>
        </section>
      </MainLayout>
      <style jsx>
        {`
          #container-dark-mode {
            background-color: #f4f4f5;
            color: #000;
            border-color: #000;
          }
          #container-dark-mode[data-dark] {
            background-color: #18181b;
            color: #e5e7eb;
            border-color: #fff;
          }
        `}
      </style>
    </>
  )
}
