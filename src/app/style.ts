import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #000;
  min-height: 80svh;
  @media (max-width: 1199px) {
    justify-content: flex-start;
  }
`

export const BetweenContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1199px) {
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
  @media (max-width: 1199px) {
    font-size: 24px;
  }
`

export const Subtitle = styled.label`
  font-size: 18px;
  @media (max-width: 1199px) {
    font-size: 14px;
  }
`

export const Button = styled.button`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: var(--Border-Radius-16px, 16px);
  background: var(--Color-Button-Bg-Primary, #f5980b);
  border: none;
  cursor: pointer;
`
