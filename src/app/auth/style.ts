import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #000;
  min-height: 100svh;
  background-color: #f4f4f2;
  @media (max-width: 1199px) {
    justify-content: center;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
  @media (max-width: 1199px) {
    font-size: 22px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid var(--beetransfer-border-50, rgba(255, 255, 255, 0.5));
  background: var(--beetransfer-fondo-50, rgba(255, 255, 255, 0.5));
  padding: var(--Spacing-32px, 32px);
`

export const GoogleButton = styled.button`
  color: #000;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: var(--Border-Radius-16px, 16px);
  border: 1px solid var(--beetransfer-border-50, rgba(255, 255, 255, 0.5));
  background: var(--beetransfer-fondo-50, rgba(255, 255, 255, 0.5));
  cursor: pointer;
`
