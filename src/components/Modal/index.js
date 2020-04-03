import React, { useState } from 'react'
import ModalContext from './context'
import ModalOpener from './ModalOpener'
import ModalCloser from './ModalCloser'
import ModalContainer from './ModalContainer'

function Modal({ children }) {
  const [show, setShow] = useState(false)

  const openModal = () => setShow(true)
  const closeModal = () => setShow(false)

  return (
    <ModalContext.Provider value={{ openModal, closeModal, show }}>
      {children}
    </ModalContext.Provider>
  )
}

Modal.ModalOpener = ModalOpener
Modal.ModalCloser = ModalCloser
Modal.ModalContainer = ModalContainer

export default Modal
