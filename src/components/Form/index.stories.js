import React from 'react'
import Form from './index'

const { FormItem } = Form

export default {
  title: 'Form',
  component: Form,
}

export const Default = () => {
  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormItem name="id" label="아이디">
          <input placeholder="id" type="text" />
        </FormItem>
        <FormItem name="password" label="패스워드">
          <input placeholder="password" type="password" />
        </FormItem>
        <FormItem>
          <button type="submit">Submit</button>
        </FormItem>
      </Form>
    </>
  )
}
