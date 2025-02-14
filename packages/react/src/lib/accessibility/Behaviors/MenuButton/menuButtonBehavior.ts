import * as _ from 'lodash'
import * as keyboardKey from 'keyboard-key'
import { Accessibility } from '../../types'
import popupBehavior, { PopupBehaviorProps } from '../Popup/popupBehavior'

/**
 * @description
 * Implements ARIA [MenuButton](https://www.w3.org/TR/wai-aria-practices/#menubutton) design pattern.
 *
 * @specification
 * Adds role='none'.
 * Adds attribute 'aria-haspopup=true' to 'trigger' slot.
 * Adds attribute 'tabIndex=-1' based on the property 'open' to 'trigger' slot.
 * Adds attribute 'aria-controls=menu-id' based on the property 'menuId' to 'trigger' slot.
 * Adds attribute 'aria-expanded=true' based on the property 'open' to 'trigger' slot.
 * Adds attribute 'id=trigger-id' based on the property 'triggerId' to 'trigger' slot.
 * Adds attribute 'id=menu-id' based on the property 'menuId' to 'menu' slot.
 * Adds attribute 'aria-labelledby=trigger-id' based on the property 'triggerId' to 'menu' slot.
 */
const menuButtonBehavior: Accessibility<MenuButtonBehaviorProps> = props => {
  const behavior = popupBehavior(props)
  return _.merge(behavior, {
    attributes: {
      root: {
        role: 'none',
      },
      trigger: {
        'aria-controls': props.menuId,
        'aria-expanded': props.open || undefined,
        'aria-haspopup': 'true',
        id: props.triggerId,
        tabIndex: props.open ? -1 : undefined,
      },

      menu: {
        'aria-labelledby': props.triggerId,
        id: props.menuId,
      },
    },
    keyActions: {
      root: {
        ...(props.open
          ? {
              closeMenu: {
                keyCombinations: [
                  { keyCode: keyboardKey.Tab, shiftKey: false },
                  { keyCode: keyboardKey.Tab, shiftKey: true },
                ],
              },
            }
          : _.includes(props.on, 'click') && {
              openAndFocusFirst: {
                keyCombinations: [{ keyCode: keyboardKey.ArrowDown }],
              },
              openAndFocusLast: {
                keyCombinations: [{ keyCode: keyboardKey.ArrowUp }],
              },
            }),
      },
    },
  })
}

export interface MenuButtonBehaviorProps extends PopupBehaviorProps {
  /** Defines ID of the menu element. */
  menuId?: string
  /** Defines ID of the trigger element. */
  triggerId?: string
  /** Defines whether popup is displayed. */
  open?: boolean
}

export default menuButtonBehavior
