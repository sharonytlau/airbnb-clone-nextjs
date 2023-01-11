import clsx from 'clsx'

export default function BouncingLoader() {
  const bouncingClasses = 'w-2 h-2 rounded-full'
  return (
    <div className="flex gap-2">
      <div
        className={clsx(
          'animate-[800ms_bounce_0s_infinite] bg-black',
          bouncingClasses
        )}
      ></div>
      <div
        className={clsx(
          'animate-[800ms_bounce_250ms_infinite] bg-black/60',
          bouncingClasses
        )}
      ></div>
      <div
        className={clsx(
          'animate-[800ms_bounce_500ms_infinite] bg-black/40',
          bouncingClasses
        )}
      ></div>
    </div>
  )
}
