import styled from 'styled-components'

export const CoffeeCartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  padding-bottom: 1.5rem;

  & + div {
    padding-top: 1.5rem;
  }
`

export const Details = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  > img {
    max-width: 4rem;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  height: 2rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding: 0 0.5rem;
  height: 2rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border: none;

  cursor: pointer;

  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;

  > svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    transition: all 0.2s;
  }
`

export const Price = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};
`
