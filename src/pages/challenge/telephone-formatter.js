import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'

export default function TelephoneFormatter() {
  return (
    <>
      <Head title='Guess the number' />
      <HeaderLayout>Telephone formatter</HeaderLayout>
      <MainLayout>
        <input />
      </MainLayout>
    </>
  )
}
