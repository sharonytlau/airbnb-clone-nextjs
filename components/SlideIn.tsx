import { animated, useTransition, UseTransitionProps } from '@react-spring/web'

type SlideInProps = {
  children: React.ReactNode
  show: boolean
  styles?: {
    from?: UseTransitionProps['from']
    enter?: UseTransitionProps['enter']
    leave?: UseTransitionProps['leave']
  }
  className?: string
}

export function SlideIn({
  children,
  show,
  styles = {},
  className = '',
}: SlideInProps) {
  const { from = {}, enter = {}, leave = {} } = styles
  const transitions = useTransition(show, {
    from: {
      opacity: 1,
      transform: 'translateY(200%)',
      ...from,
    },
    enter: {
      width: '100%',
      position: 'fixed',
      opacity: 1,
      transform: 'translateY(0px)',
      ...enter,
    },
    leave: {
      opacity: 0,
      transform: 'translateY(200%)',
      ...leave,
    },
  })

  return (
    <>
      {transitions(
        (styles: any, item) =>
          item && (
            <animated.div style={styles} className={className}>
              {children}
            </animated.div>
          )
      )}
    </>
  )
}
