import HeadNext from 'next/head'

export default function Head({ title = 'Frontend Mini Challenges Solutions' }) {
  return (
    <HeadNext>
      <title>{title}</title>
      <meta
        name='description'
        content='My solutions to challenges proposed in this repository  https://github.com/sadanandpai/frontend-mini-challenges'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </HeadNext>
  )
}
