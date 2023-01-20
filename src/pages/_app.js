import PageLayout from '@/components/layouts/PageLayout.jsx'
import '../styles/global.css'
export default function App({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
}
