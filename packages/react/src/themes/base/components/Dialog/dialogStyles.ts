import { DialogProps } from '../../../../components/Dialog/Dialog'
import { ComponentStyleFunctionParam, ICSSInJSStyle } from '../../../types'
import { DialogVariables } from './dialogVariables'

type DialogStyleParams = ComponentStyleFunctionParam<DialogProps, DialogVariables>

export default {
  root: ({ props: p, variables: v }: DialogStyleParams): ICSSInJSStyle => ({
    background: v.rootBackground,
    borderRadius: v.rootBorderRadius,
    outline: 'none',
    padding: v.rootPadding,
    position: 'relative',
    width: v.rootWidth,
    display: 'grid',
    gridTemplateColumns: '1fr auto',
  }),
  actions: (): ICSSInJSStyle => ({
    gridRow: 3,
    gridColumn: '1 / span 2',
    '-ms-grid-column-align': 'end',
    justifySelf: 'right',
  }),
  content: ({ variables: v }: DialogStyleParams): ICSSInJSStyle => ({
    margin: v.contentMargin,
    gridColumn: '1 / span 2',
    gridRow: 2,
    justifySelf: 'left',
  }),
  header: ({ variables: v }: DialogStyleParams): ICSSInJSStyle => ({
    margin: v.headerMargin,
    gridRow: 1,
    gridColumn: 1,
    justifySelf: 'left',
  }),
  headerAction: (): ICSSInJSStyle => ({
    gridRow: 1,
    gridColumn: 2,
  }),
  overlay: ({ props: p, variables: v }: DialogStyleParams): ICSSInJSStyle => ({
    alignItems: 'center',
    background: v.overlayBackground,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    left: 0,
    overflow: 'auto',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: v.overlayZIndex,
  }),
}
