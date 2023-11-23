import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 2rem;

  padding: 0 0 4rem 0;
`

export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};

  margin-bottom: 0.9375rem;
`
