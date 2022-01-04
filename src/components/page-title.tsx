import cx from 'classnames'
import type { ReactNode } from 'react'

export default function PageTitle({
  as = 'h1',
  children,
  className,
}: {
  as?: string | ReactNode
  children: ReactNode
  className?: string
}) {
  const Tag = as

  return (
    // @ts-ignore
    <Tag className={cx('text-3xl text-blueGray-800 font-bold', className)}>
      {children}
    </Tag>
  )
}
