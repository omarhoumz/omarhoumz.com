import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Thumbnail() {
  const router = useRouter()

  const {
    query: { title, url = '' },
  } = router

  if (!title) {
    return ''
  }

  return (
    <div className='flex h-screen p-6 bg-brand-600'>
      <div className='flex flex-col p-8 bg-white shadow-xl'>
        <main>
          <h1
            className={` relative ${
              title.length > 44 ? 'text-8xl' : 'text-9xl'
            } font-bold`}
          >
            <span className='bg-yellow-200 w-20 h-20 absolute -top-4 -left-6 rounded-full'></span>
            <span className='relative'>{title}</span>
          </h1>
        </main>
        <footer className='mt-auto flex gap-x-6 items-center'>
          <Image src='/omar-circle.png' className='w-28' alt='' />

          <div className='flex flex-col justify-center'>
            <h3 className='text-brand-700 text-3xl'>
              omar<span className='font-bold'>houmz</span>.com
            </h3>
            <h3 className='text-4xl bg-brand-50 px-1 pb-1'>{url}</h3>
          </div>

          <Image src='/icon.png' className='w-12 h-12 ml-auto' alt='' />
        </footer>
      </div>
    </div>
  )
}
