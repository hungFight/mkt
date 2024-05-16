import { FC, ReactNode, useCallback, useEffect, useRef } from 'react'
import Portal from '../Portal'

interface ContextMenuProps {
  selector: string
  selectorChild?: string
  children?: ReactNode
  zIndex?: number
}

const ContextMenu: FC<ContextMenuProps> = ({
  selector,
  children,
  selectorChild,
  zIndex = 40
}): JSX.Element => {
  const menuRef = useRef<HTMLDivElement>(null)

  const closeMenu = useCallback((): void => {
    const contextMenuElem = menuRef.current
    if (contextMenuElem && contextMenuElem.classList.contains('shadow-menu')) {
      contextMenuElem.classList.remove('shadow-menu')
      contextMenuElem.style.opacity = '0'
      contextMenuElem.style.visibility = 'hidden'
    }
  }, [menuRef.current])

  useEffect(() => {
    const elementParent = document.querySelector(selector)
    if (elementParent) {
      const clickMenu = (e): void => {
        const contextMenuElem = menuRef.current
        if (contextMenuElem) {
          contextMenuElem.style.opacity = '1'
          contextMenuElem.style.visibility = 'visible'

          const { width: widthContextMenu, height: heightContextMenu } =
            contextMenuElem.getBoundingClientRect()
          const {
            left: LeftParent,
            width: widthParent,
            top: TopParent,
            height: HeightParent
          } = elementParent.getBoundingClientRect()
          const maxWidthParent = LeftParent + widthParent
          const maxHeightParent = TopParent + HeightParent
          const x = e.clientX + widthContextMenu
          const y = e.clientY + heightContextMenu
          const styleOrigin = {
            x: 'left',
            y: 'top'
          }
          if (x <= maxWidthParent) {
            contextMenuElem.style.left = `${e.clientX}px`
            styleOrigin.x = 'left'
          } else {
            contextMenuElem.style.left = `${e.clientX - widthContextMenu}px`
            styleOrigin.x = 'right'
          }
          if (y <= maxHeightParent) {
            contextMenuElem.style.top = `${e.clientY}px`
            styleOrigin.y = 'top'
          } else {
            contextMenuElem.style.top = `${e.clientY - heightContextMenu}px`
            styleOrigin.y = 'bottom'
          }

          contextMenuElem.style.transformOrigin = `${styleOrigin.y} ${styleOrigin.x}`

          if (selectorChild) {
            const listMenuItem = contextMenuElem.querySelectorAll(selectorChild)

            if (listMenuItem) {
              listMenuItem.forEach((item) => {
                const parentElement = item.parentElement

                if (parentElement) {
                  const { width, left } = parentElement.getBoundingClientRect()
                  const { width: widthItem } = item.getBoundingClientRect()

                  const maxItem = left + width + widthItem

                  if (maxItem <= maxWidthParent) {
                    item.setAttribute('style', `left: ${left + width}px`)
                  } else {
                    item.setAttribute('style', `left: ${left - widthItem}px`)
                  }
                }
              })
            }
          }

          if (!contextMenuElem.classList.contains('shadow-menu')) {
            contextMenuElem.classList.add('shadow-menu')
          }
        }
      }

      elementParent.addEventListener('contextmenu', clickMenu)
      window.addEventListener('click', closeMenu)
      return () => {
        elementParent.removeEventListener('contextmenu', clickMenu)
        window.removeEventListener('click', closeMenu)
      }
    }

    return () => {}
  }, [])

  return (
    <Portal>
      <div
        className="fixed z-40"
        ref={menuRef}
        style={{ opacity: 0, visibility: 'hidden', zIndex: zIndex }}
      >
        {children}
      </div>
    </Portal>
  )
}

export default ContextMenu
