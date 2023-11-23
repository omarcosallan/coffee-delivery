import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px;
  padding: 1.25rem;

  background: ${(props) => props.theme['base-card']};

  text-align: center;

  > img {
    max-width: 120px;
    margin-top: -3rem;
  }
`

export const Badges = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  margin: 0.75rem 0 1rem 0;
`

export const Name = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;

  color: ${(props) => props.theme['base-label']};

  margin-top: 0.5rem;
`

export const ActionsFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
`

export const Price = styled.p`
  color: ${(props) => props.theme['base-text']};

  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 130%;

  > span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const ButtonCart = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  line-height: 0;

  transition: all 0.1s;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
