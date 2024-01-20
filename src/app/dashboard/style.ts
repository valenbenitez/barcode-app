import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #000;
  background-color: #f4f4f2;
  /* @media (max-width:1199px){ */
  justify-content: center;
  flex-direction: column;
  /* } */
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  border-radius: 24px;
  padding: var(--Spacing-32px, 32px) 24px;
  border: 1px solid var(--beetransfer-border-50, rgba(255, 255, 255, 0.5));
  background: #c3e6d7;
`

export const Button = styled.button`
  display: flex;
  width: 56px;
  height: 56px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  border: 1.75px solid var(--beetransfer-border-50, rgba(255, 255, 255, 0.5));
  background: var(--Bg-Circle, rgba(255, 255, 255, 0.5));
  color: #000;
`

export const Title = styled.label`
  color: var(--Color-Text-Primary, #000);
  text-align: center;
  /* Font/Heading 2/Bold */
  font-family: Montserrat;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 142.857% */
`

export const Subtitle = styled.label`
  color: var(--Color-Text-Primary, #000);
  text-align: center;
  /* Font/Small/Medium */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
`

export const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`
