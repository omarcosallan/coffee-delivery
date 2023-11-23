import styled, { css } from 'styled-components'

export const PaymentMethodInputContainer = styled.div`
  min-width: 11rem;

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme['purple-light']};
      border-color: ${theme.purple};
    `}
  }

  input:not(:checked) + label div:hover {
    background: ${(props) => props.theme['base-hover']};
    transition: all 0.2s;
  }
`

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.75rem;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  transition: 0.4s;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    /* background: ${(props) => props.theme['base-hover']}; */
  }

  user-select: none;
`
