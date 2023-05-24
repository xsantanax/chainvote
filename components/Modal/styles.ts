import styled, { css } from 'styled-components'
// import Image from 'next/image'

type Props = {
  backgroundColor?: string
}

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  height: 100vh;
  padding-bottom: 10%;
`

export const Content = styled.div<Props>`
  ${({ backgroundColor }) => css`
    /* background-color: ${backgroundColor ? backgroundColor : 'white'}; */
    background-color: #081328;
    /* background-color: #181838; */
  `}

  width: 500px;
  max-width: 90%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 99;
  border-radius: 10px;
  padding: 40px 52px 40px 52px;
  opacity: 1;
`

export const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: -30px -65px -5px 0;
`

// export const CloseIcon = styled(Image).attrs(() => ({
export const CloseIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`

export const Title = styled.div`
  /* color: black; */
  color: #eee;

  font-weight: 600;
  font-size: 25px;
  text-align: center;
  letter-spacing: 0.933333px;
  margin-bottom: 25px;
`
