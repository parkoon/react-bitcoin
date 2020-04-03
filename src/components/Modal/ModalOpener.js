import React, { useContext } from 'react'
import ModalContext from './context'

function ModalOpener({ children }) {
  const { openModal, closeModal } = useContext(ModalContext)
  return <>{React.cloneElement(children, { onClick: openModal })}</>
}

export default ModalOpener
