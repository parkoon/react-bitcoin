import React from 'react'
import PropTypes from 'prop-types'

function FormItem({ children, handleChange = () => {}, name, rules, handleError = () => {} }) {
  const handleBlur = ({ target }) => {
    const { value } = target
    rules && handleError(rules, name, value)
  }
  return (
    <div>{React.cloneElement(children, { onChange: handleChange, name, onBlur: handleBlur })}</div>
  )
}

FormItem.propTypes = {
  children: PropTypes.node,
}

export default FormItem
