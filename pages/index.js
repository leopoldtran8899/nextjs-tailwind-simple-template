import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS - TailwindCSS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='width-full p-6'>
        <h1 className='text-3xl text-center font-title'>Main page</h1>
        <br/>
        <div className='text-center font-subtitle'>Simple NextJS app template, used with TailwindCSS, React Icon, GraphQL + Apollo Client</div>
        <br/>
        <div className='text-center'>
          Go to <Link href={'/demo'} className='text-lime-400 font-semibold hover:text-lime-200'>Demo page</Link>
        </div>
      </main>
    </div>
  )
}
