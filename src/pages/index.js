import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
import { CHALLENGES } from '@/constants/index'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head />
      <HeaderLayout>Frontend Mini Challenges - Solutions by alexxtomas</HeaderLayout>
      <MainLayout>
        <ul className='grid grid-cols-2 gap-10 my-5 '>
          {CHALLENGES.map(({ name, path }) => {
            return (
              <li
                key={name}
                className='flex items-center justify-center flex-col border border-gray-500 py-8 px-2 rounded text-center cursor-pointer transition-colors h-14 w-30 hover:bg-green-400   hover:text-gray-800 hover:border-green-400 scale-105'
              >
                <Link href={path}>{name}</Link>
              </li>
            )
          })}
        </ul>
      </MainLayout>
    </>
  )
}
