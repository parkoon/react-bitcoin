import React from 'react'
import PropTypes from 'prop-types'

function FormItem({ children, handleChange, name }) {
  return <div>{React.cloneElement(children, { onChange: handleChange, name })}</div>
}

FormItem.propTypes = {
  children: PropTypes.node,
}

export default FormItem
