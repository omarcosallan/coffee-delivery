import styled from 'styled-components'

export const SuccessContainer = styled.div`
  strong {
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6.37rem;
  margin-top: 2.5rem;
`

export const InfoOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 2.5rem;
  border-radius: 0.375rem 2.25rem;
  border: 1px solid #dbac2c;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p,
    strong {
      font-family: 'Roboto';
      font-size: 1rem;
      font-style: normal;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
const colors = {
  purple: 'purple',
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
}

interface IconWrraperProps {
  background: keyof typeof colors
}

export const IconWrraper = styled.div<IconWrraperProps>`
  background: ${(props) => props.theme[props.background]};
  border-radius: 50%;
  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme.white};
    width: 1rem;
    height: 1rem;
  }
`
