import { IGridVariables } from './gridVariables'
import { IComponentPartStylesInput, ICSSInJSStyle } from '../../../../../types/theme'
import { IGridProps } from '../../../../components/Grid/Grid'

const getCSSTemplateValue = (template: string | number): string => {
  const templateAsNumber = Number(template)

  return !isNaN(templateAsNumber) && templateAsNumber > 0
    ? `repeat(${template}, 1fr)`
    : String(template)
}

const gridStyles: IComponentPartStylesInput = {
  root: ({
    props,
    variables: { height, width, defaultColumnCount, gridGap, padding },
  }: {
    props: IGridProps
    variables: IGridVariables
  }): ICSSInJSStyle => {
    const { rows, columns = !props.rows && defaultColumnCount } = props

    const styles = {
      height,
      width,
      padding,
      gridGap,
      display: 'grid',
      justifyContent: 'space-evenly',
      gridAutoFlow: rows && !columns && 'column',

      ...(rows && { gridTemplateRows: getCSSTemplateValue(rows) }),
      ...(columns && { gridTemplateColumns: getCSSTemplateValue(columns) }),
    }

    return styles
  },
}

export default gridStyles
