import cx from 'classnames'

export default function AboutSection({ description, icon, title, id }) {
  return (
    <div
      className={cx(
        'relative flex flex-row space-x-2 sm:space-x-4 not-last:pb-4',
        '[--icon-width:calc(var(--spacing)*11)] before:w-0.5 before:h-full before:absolute before:start-[calc(var(--icon-width)/2)] before:bg-brand-100 md:[--icon-width:calc(var(--spacing)*14)]',
      )}
      id={id}
    >
      <div className='relative shrink-0 grid place-items-center p-1.5 sm:p-2.5 w-11 h-11 sm:w-14 sm:h-14 border-4 border-white rounded-full text-brand-500 bg-brand-50'>
        {icon}
      </div>
      <div className='pt-1.5 sm:pt-3'>
        <h3 className='mb-2 text-2xl text-blueGray-800 font-bold capitalize'>
          {title}
        </h3>
        <div className='text-xl text-blueGray-500 max-w-xl prose'>
          {description}
        </div>
      </div>
    </div>
  )
}
