/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { usePopper } from 'react-popper'

const Dropdown = (props: any, forwardedRef: any): JSX.Element => {
  const [visibility, setVisibility] = useState<boolean>(false)

  const referenceRef = useRef<any>()
  const popperRef = useRef<any>()

  const { styles, attributes } = usePopper(referenceRef.current, popperRef.current, {
    placement: props.placement || 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: props.offset || [0]
        }
      }
    ]
  })

  const handleDocumentClick = (event: any): void => {
    if (referenceRef.current?.contains(event.target) || popperRef.current?.contains(event.target)) {
      return
    }

    setVisibility(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick)
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  }, [])

  useImperativeHandle(forwardedRef, () => ({
    close(): void {
      setVisibility(false)
    }
  }))

  return (
    <>
      <button
        ref={referenceRef}
        type="button"
        className={props.btnClassName}
        onClick={(): void => setVisibility(!visibility)}
      >
        {props.button}
      </button>

      <div
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
        className="z-50"
        onClick={(): void => setVisibility(!visibility)}
      >
        {visibility && props.children}
      </div>
    </>
  )
}

export default forwardRef(Dropdown)
