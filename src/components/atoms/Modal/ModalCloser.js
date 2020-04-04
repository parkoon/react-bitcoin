import React, { useContext } from 'react'
import ModalContext from './context'

function ModalCloser({ children }) {
  const { openModal, closeModal } = useContext(ModalContext)
  return <>{React.cloneElement(children, { onClick: closeModal })}</>
}

export default ModalCloser
