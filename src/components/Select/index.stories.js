import React from 'react'
import Select from './index'

const { Option } = Select

export default {
  title: 'Select',
  component: Select,
}

export const Default = () => {
  const handleChange = (name, value) => {
    console.log(name, value)
  }
  return (
    <>
      <Select onChange={handleChange}>
        <Option value="A">A</Option>
        <Option value="B">B</Option>
        <Option value="C">C</Option>
        <Option value="D">D</Option>
      </Select>
    </>
  )
}
