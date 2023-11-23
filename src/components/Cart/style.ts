import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  position: relative;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;

    position: absolute;
    right: -8.345px;
    top: -8px;
  }
`
