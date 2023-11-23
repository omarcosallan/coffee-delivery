import styled from 'styled-components'

export const BagdeContainer = styled.span`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;

  border-radius: 100px;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`
