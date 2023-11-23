import styled from 'styled-components'

export const InputQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 90px;
  border-radius: 6px;
  padding: 0.5rem;
  height: 100%;
  max-height: 2.375rem;

  background: ${(props) => props.theme['base-button']};

  input {
    width: 100%;
    background: none;
    border: none;
    text-align: center;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const IconWrapper = styled.button`
  background: none;
  border: none;
  height: 2rem;
  cursor: pointer;

  color: ${(props) => props.theme.purple};

  svg {
    display: flex;
    align-items: center;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme['base-label']};
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-dark']};
    transition: all 0.2s;
  }
`
