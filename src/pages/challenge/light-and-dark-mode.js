import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
export default function LightAndDarkMode() {
  return (
    <>
      <Head title='Light & Dark Mode' />
      <HeaderLayout>Light & Dark Mode</HeaderLayout>
      <MainLayout>
        <section className='p-5'>
          <label className='text-xl'>
            Dark mode
            <input type='checkbox' />
          </label>
          <div className='text-start min-w-full '>
            <p className='text-4xl'>Te entire page color theme is changed</p>
          </div>
        </section>
        <section className='mt-10 p-5'>
          <label className='block'>
            Contained dark mode
            <input type='checkbox' />
          </label>
          <div className='min-w-full border text-center h-52 flex items-center justify-center'>
            <p className='text-4xl'>The container color shcema is only changed</p>
          </div>
        </section>
      </MainLayout>
    </>
  )
}
