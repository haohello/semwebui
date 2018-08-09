import { Accessibility } from '../../interfaces'

const ToggleButtonBehavior: Accessibility = (props: any) => ({
  attributes: {
    root: {
      role: props.as === 'button' ? undefined : 'button',
      'aria-pressed': !!props['active'],
    },
  },
})

export default ToggleButtonBehavior
