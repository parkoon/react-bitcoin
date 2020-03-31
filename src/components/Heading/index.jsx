import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../Theme'

const headingStyles = {
  level1: {
    'font-size': theme.size.h1,
    'margin-top': theme.unit * 2,
    'margin-bottom': theme.unit * 4,
  },
  level2: {
    'font-size': theme.size.h2,
    'margin-top': theme.unit * 2,
    'margin-bottom': theme.unit * 4,
  },
  level3: {
    'font-size': theme.size.h3,
    'margin-top': theme.unit * 1.5,
    'margin-bottom': theme.unit * 3,
  },
  level4: {
    'font-size': theme.size.xg,
    'margin-top': theme.unit,
    'margin-bottom': theme.unit * 2,
  },
  level5: {
    'font-size': theme.size.md,
    'margin-top': theme.unit,
    'margin-bottom': theme.unit * 2,
  },
  level6: {
    'font-size': theme.size.md,
    'margin-top': theme.unit,
    'margin-bottom': theme.unit,
  },
}

const styles = css`
  line-height: ${theme.lineHeight.lg};
  font-weight: ${theme.fontWeight.bold};
  ${props => headingStyles[`level${props.level}`]}
`

const Heading = styled(({ level, children, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`
  ${styles}
`

Heading.defaultProps = {
  level: 1,
}

export default Heading
