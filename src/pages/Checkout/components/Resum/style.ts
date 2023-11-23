import styled from 'styled-components'

export const ResumContainer = styled.div`
  min-width: 448px;
`

export const Content = styled.div`
  padding: 2.5rem;

  border-radius: 6px 44px;

  background: ${(props) => props.theme['base-card']};
`

export const CheckoutOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ResumTextBase = styled.p`
  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme['base-subtitle']};

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
`

export const SubTotal = styled(ResumTextBase)``

export const Delivery = styled(ResumTextBase)``

export const Total = styled(ResumTextBase)`
  font-size: 1.25rem;
  font-weight: 700;
`

export const ConfirmOrder = styled.button`
  width: 100%;
  border: 0;
  border-radius: 6px;
  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;
  cursor: pointer;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transition: all 0.2s;
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const CoffeesNotFound = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  font-family: 'Roboto', sans-serif;

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  a {
    text-decoration: none;
    text-transform: uppercase;

    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};

    padding: 0.75rem;
    border-radius: 6px;
    margin-top: 1rem;

    &:hover {
      background: ${(props) => props.theme.purple};
      transition: all 0.2s;
    }
  }
`
