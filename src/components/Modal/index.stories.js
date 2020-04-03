import React from 'react'
import Modal from './index'
import ModalCloser from './ModalCloser'

const { ModalOpener, ModalContainer } = Modal

export default {
  title: 'Modal',
  component: Modal,
}

export const Default = () => (
  <>
    <Modal>
      <ModalOpener>
        <button>모달 열기</button>
      </ModalOpener>

      <ModalContainer>
        <h1>What's up</h1>
        <ModalCloser>
          <button>닫기</button>
        </ModalCloser>
      </ModalContainer>
    </Modal>
  </>
)
