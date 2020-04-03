import React from 'react'
import Select from './index'

const { Option } = Select

export default {
  title: 'Select',
  component: Select,
}

export const Default = () => (
  <>
    <Select>
      <Option>A</Option>
      <Option>B</Option>
      <Option>C</Option>
      <Option>D</Option>
    </Select>
  </>
)
