export default function PageLayout({ children }) {
  return (
    <div className=' bg-zinc-100 text-black dark:text-gray-200 dark:bg-zinc-900  min-h-screen flex flex-col gap-10'>
      {children}
    </div>
  )
}
