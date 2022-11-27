import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Thumbnail() {
  const router = useRouter()

  const {
    query: { title, url = '' },
  } = router

  const imgUrl = 'http://localhost:3001/api/og?title=' + title + '&url=' + url
  if (!title) {
    return ''
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        padding: '2.5rem',
        backgroundColor: '#0f0b64',
      }}
    >
      <div
        className='shadow-2xl shadow-slate-800'
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '4rem',
          backgroundColor: '#fff',
          borderRadius: '1rem',
        }}
      >
        <main>
          <h1
            style={{
              position: 'relative',
              fontSize: title.length > 44 ? '6rem' : '8rem',
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            <span
              className='bg-yellow-200 w-20 h-20 absolute -top-4 -left-6 rounded-full'
              style={{
                position: 'absolute',
                width: '5rem',
                height: '5rem',
                top: '-1rem',
                left: '-1.5rem',
                borderRadius: 9999,
              }}
            />
            <span className='relative' style={{ position: 'relative' }}>
              {title}
            </span>
          </h1>
        </main>
        <footer
          className='mt-auto flex gap-x-6 items-center'
          style={{
            marginTop: 'auto',
            display: 'flex',
            columnGap: '1.5rem',
            alignItems: 'center',
          }}
        >
          <Image
            src='/omar-circle.png'
            alt=''
            width={112}
            height={112}
            style={{
              maxWidth: '100%',
              width: 112,
              height: 112,
            }}
          />

          <div
            className='flex flex-col justify-center'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3
              className='text-brand-700 text-3xl'
              style={{
                color: '#0f0b64',
                fontSize: '1.875rem',
                lineHeight: '2.25rem',
              }}
            >
              omar
              <span className='font-bold' style={{ fontWeight: 700 }}>
                houmz
              </span>
              .com
            </h3>
            <h3
              className='text-4xl bg-brand-50 px-1 pb-1'
              style={{
                fontSize: '2.25rem',
                lineHeight: '2.5rem',
                backgroundColor: '#f7f3ff',
                padding: '0.25rem 0.5rem',
              }}
            >
              {url}
            </h3>
          </div>

          <Image
            src='/icon.png'
            className='ml-auto self-end'
            alt=''
            width={48}
            height={48}
            style={{
              alignSelf: 'flex-end',
              marginLeft: 'auto',
              maxWidth: '100%',
              width: 48,
              height: 48,
            }}
          />
        </footer>
      </div>
    </div>
  )
}
