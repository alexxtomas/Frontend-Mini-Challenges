import Head from '@/components/Head'
import HeaderLayout from '@/components/layouts/HeaderLayout'
import MainLayout from '@/components/layouts/MainLayout'
import Link from 'next/link'
const CHALLENGES = [
  {
    name: 'Counter',
    path: './challenge/counter'
  },
  {
    name: 'Guess the number',
    path: './challenge/guess-the-number'
  },
  {
    name: 'Telephone Formatter',
    path: './challenge/telephone-formatter'
  }
]

export default function Home() {
  return (
    <>
      <Head />
      <HeaderLayout>Frontend Mini Challenges - Solutions by alexxtomas</HeaderLayout>
      <MainLayout>
        <ul>
          {CHALLENGES.map(({ name, path }) => {
            return (
              <li key={name}>
                <Link href={path}>{name}</Link>
              </li>
            )
          })}
        </ul>
      </MainLayout>
    </>
  )
}
