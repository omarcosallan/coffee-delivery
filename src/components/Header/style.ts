import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`

export const ActionsContainer = styled.div`
  display: flex;

  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
`
