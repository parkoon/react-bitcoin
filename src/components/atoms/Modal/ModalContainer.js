import React, { useContext } from 'react'
import ModalContext from './context'
import styled from 'styled-components'
import { theme } from '../../../Theme'

const StyledModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
`
const StyledModalBox = styled.div`
  background: ${theme.color.white};
  width: 300px;
  /* height: 200px; */
  height: 200px;
  padding: 20px;
  box-sizing: border-box;
  margin: 32px auto;
`

function ModalContainer({ children }) {
  const { show } = useContext(ModalContext)
  return (
    <>
      {show && (
        <StyledModalOverlay>
          <StyledModalBox>{children}</StyledModalBox>
        </StyledModalOverlay>
      )}
    </>
  )
}

export default ModalContainer
