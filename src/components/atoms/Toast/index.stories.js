import React from 'react'
import Toast from './index'

export default {
  title: 'Toast',
  component: Toast,
}

export const Default = () => (
  <>
    <Toast message="Success" />
  </>
)

export const Error = () => (
  <>
    <Toast message="Failure" warning />
  </>
)
