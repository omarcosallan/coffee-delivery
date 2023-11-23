import styled from 'styled-components'

export const FormContainer = styled.div`
  flex: 1;
  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

const colors = {
  yellow: `yellow`,
  purple: `purple`,
}

interface TitleCardProps {
  colorIcon: keyof typeof colors
}

export const TitleCard = styled.div<TitleCardProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;

  font-family: 'Roboto', sans-serif;
  line-height: 130%;

  svg {
    color: ${(props) => props.theme[colors[props.colorIcon]]};
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
