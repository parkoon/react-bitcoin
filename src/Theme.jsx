import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  // 색상
  color: {
    primary: '#00b894', // 주 색상
    secondary: '#6c5ce7', // 부 색상
    white: '#FFFFFF',
    gray: '#CCCCCC',
    default: '#2d3436', // 기본 문자 색상
    error: '#d63031', // 오류 색상
  },
  // 폰트 사이즈
  size: {
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10,
  },
  lineHeight: {
    xg: '60px',
    lg: '54px',
    md: '36px',
    sm: '24px',
    xs: '18px',
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
