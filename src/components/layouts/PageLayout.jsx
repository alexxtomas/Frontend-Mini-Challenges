export default function PageLayout({ children }) {
  return (
    <main className='bg-zinc-900 min-h-screen'>
      <div className='flex flex-col justify-center items-center text-gray-200 '>{children}</div>
    </main>
  )
}
