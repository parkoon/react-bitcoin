import React from 'react'
import { ThemeProvider } from 'styled-components'

export const theme = {
  // 색상
  color: {
    primary: '#55efc4', // 주 색상
    primaryDark: '#00b894',
    secondary: '#81ecec', // 부 색상
    secondaryDark: '#00cec9',
    white: '#FFFFFF',
    gray: '#9e9e9e',
    grayLight: '#eeeeee',
    grayDark: '#616161',
    border: 'rgba(0, 0, 0, .15)',
    default: '#333333', // 기본 문자 색상
    error: '#e51c23', // 오류 색상
  },

  // 폰트 사이즈
  size: {
    h1: 48,
    h2: 36,
    h3: 28,
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10,
  },
  lineHeight: {
    xg: 1.6,
    lg: 1.6,
    md: 1.5,
    sm: 1.4,
    xs: 1.4,
  },

  fontWeight: {
    bold: 'bold',
    normal: 'normal',
    light: 300,
  },
  depth: {
    level1: {
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14)',
    },
    level2: {
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
    },
    level3: {
      boxShadow: '0 8px 17px 12px rgba(0, 0, 0, 0.14)',
    },
  },

  // 길이 단위
  unit: 4,
}

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Theme
