import styled, { css } from 'styled-components'

interface InputContainerProps {
  hasError: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};

  transition: 0.4s;
  overflow: hidden;

  &:focus-within {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme['base-error']};
    `}

  input {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 4px;

    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;

    color: ${(props) => props.theme['base-text']};

    border: 1px solid transparent;

    &::placeholder {
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      color: ${(props) => props.theme['base-label']};
    }

    &:empty:focus {
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const TextOnTheRight = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-style: italic;
  font-weight: 400;
  line-height: 130%;

  color: ${(props) => props.theme['base-label']};
`
