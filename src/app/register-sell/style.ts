import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Content = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
export const Title = styled.label`
  color: var(--Color-Text-Primary, #000);
  text-align: center;
  /* Font/Heading 2/Bold */
  font-family: Montserrat;
  font-size: 20px;
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
