import styled from 'styled-components'

export const OurCoffeesContainer = styled.div`
  padding: 2rem 0;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  row-gap: 2.5rem;

  margin-top: 3.375rem;
`
