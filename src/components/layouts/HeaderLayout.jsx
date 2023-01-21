import Link from 'next/link'

export default function HeaderLayout({ children }) {
  return (
    <header className='flex justify-center items-center px-4   h-20 border-b-2 border-gray-400 min-w-full'>
      <Link href={'/'}>
        <h1 className='text-2xl font-bold text-gray-200 text-center'>{children}</h1>
      </Link>
    </header>
  )
}
