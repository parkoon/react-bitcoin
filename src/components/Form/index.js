import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import FormItem from './FormItem'

function Form({ children, onSubmit }) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})

  useEffect(() => {
    console.log('errors', errors)
  }, [errors])

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

  const handleError = (rules, name, value) => {
    if (!rules) return

    const requiredRule = rules.filter(rule => rule.required)[0]
    const patternRule = rules.filter(rule => rule.pattern)[0]
    const lengthRule = rules.filter(rule => rule.len)[0]
    const minMaxRule = rules.filter(rule => rule.min && rule.max)[0]

    if (requiredRule) {
      const { message } = requiredRule
      if (!value) {
        setErrors({ ...errors, [name]: message })
        return
      }
    }

    if (patternRule) {
      const { pattern, message } = patternRule
      const isValid = pattern.test(value)
      if (!isValid) {
        setErrors({ ...errors, [name]: message })
        return
      }
    }
    if (lengthRule) {
      const { len, message } = lengthRule
      console.log('length rule!')
      const isValid = value.length < len
      if (!isValid) {
        setErrors({ ...errors, [name]: message })
        return
      }
    }

    if (minMaxRule) {
      const { min, max, message } = minMaxRule
      const isValid = value.length >= min && value.length <= max
      if (!isValid) {
        setErrors({ ...errors, [name]: message })
        return
      }
    }
    setErrors({ ...errors, [name]: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      {React.Children.map(children, child => {
        const { name, rules } = child.props
        return React.cloneElement(child, { handleChange, name, rules, handleError })
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
