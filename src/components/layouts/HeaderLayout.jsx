import Link from 'next/link'

export default function HeaderLayout({ children }) {
  return (
    <header className='flex justify-center items-center h-20 border-b-2 border-gray-400 min-w-full'>
      <Link href={'/'}>
        <h1 className='text-xl font-bold text-gray-200'>{children}</h1>
      </Link>
    </header>
  )
}
