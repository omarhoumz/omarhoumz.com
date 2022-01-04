export default function Pill({ label, className = '' }) {
  return (
    <span
      className={[
        'text-xs text-gray-500 font-medium tracking-wide py-1 px-3 rounded-full uppercase bg-gray-100',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label}
    </span>
  )
}
