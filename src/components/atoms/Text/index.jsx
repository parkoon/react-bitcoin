import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Theme from '../../../Theme'

const defaultText = ({ theme }) => css`
  color: ${theme.color.default};
  font-size: ${theme.size.md}px;
  line-height: ${theme.lineHeight.md};
  font-weight: ${theme.fontWeight.normal};
`

const xsmall = ({ theme }) => css`
  font-size: ${theme.size.xs}px;
  line-height: ${theme.lineHeight.xs};
`
const small = ({ size, lineHeight }) => css`
  font-size: ${size.sm}px;
  line-height: ${lineHeight.sm};
`
const large = ({ size, lineHeight }) => css`
  font-size: ${size.lg}px;
  line-height: ${lineHeight.lg};
`
const xlarge = ({ size, lineHeight }) => css`
  font-size: ${size.xg}px;
  line-height: ${lineHeight.xg};
`
const secondary = ({ color }) =>
  css`
    color: ${color.secondary};
  `
const primary = ({ color }) =>
  css`
    color: ${color.primary};
  `
const bold = ({ fontWeight }) =>
  css`
    font-weight: ${fontWeight.bold};
  `
const light = ({ fontWeight }) =>
  css`
    font-weight: ${fontWeight.light};
  `
const inverse = ({ theme }) => `color: #fff`

const StyledText = styled.span`
  ${defaultText}

  ${props => {
    const styles = []
    const theme = props.theme

    props.bold && styles.push(bold(theme))
    props.light && styles.push(light(theme))
    props.inverse && styles.push(inverse(theme))
    props.large && styles.push(large(theme))
    props.xlarge && styles.push(xlarge(theme))
    props.small && styles.push(small(theme))
    props.xsmall && styles.push(xsmall(theme))
    props.secondary && styles.push(secondary(theme))
    props.primary && styles.push(primary(theme))

    return [...styles]
  }}
`
function Text({ children, ...props }) {
  return (
    <Theme>
      <StyledText {...props}>{children}</StyledText>
    </Theme>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  light: PropTypes.bool,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  inverse: PropTypes.bool,
}

export default Text
