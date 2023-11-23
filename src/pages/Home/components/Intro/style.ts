import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 5rem 0;

  > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  > img {
    max-width: 476px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: max-content;

  > p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }
`

const colors = {
  purple: 'purple',
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  gray: 'base-text',
}

interface IconProps {
  color: keyof typeof colors
}

export const IconWrapper = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 50%;

  background: ${(props) => props.theme[colors[props.color]]};

  > svg {
    width: 1rem;

    color: ${(props) => props.theme.white};
  }
`
