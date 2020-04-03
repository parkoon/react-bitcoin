import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormItem from './FormItem'

function Form({ children, onSubmit }) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(values)
  }

  const handleChange = ({ target }) => {
    const { value, name } = target
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {React.Children.map(children, child => {
        const { name } = child.props
        return React.cloneElement(child, { handleChange, name })
      })}
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
}

Form.FormItem = FormItem

export default Form
