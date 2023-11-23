import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  display: grid;
  gap: 0.75rem;
  row-gap: 1rem;

  grid-template-columns: 30% 55% 10%;

  margin-top: 1rem;

  > .cep {
    grid-area: 1 / 1 / auto / 1;
  }

  > .street {
    grid-area: 2 / 1 / auto / 4;
  }

  > .number {
    grid-area: 3 / 1 / auto / 1;
  }

  > .complement {
    grid-area: 3 / 2 / auto / 4;
  }

  > .neighborhood {
    grid-area: 4 / 1 / auto / 1;
  }

  > .city {
    grid-area: 4 / 2 / auto / 2;
  }

  > .uf {
    grid-area: 4 / 3 / auto / 3;
  }
`
