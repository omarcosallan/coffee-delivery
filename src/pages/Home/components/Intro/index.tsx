import {
  IconWrapper,
  IntroContainer,
  Item,
  ItemsList,
  TitleContainer,
} from './style'

import imgCoffeeIntro from '../../../../assets/coffee-intro.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <TitleContainer>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleContainer>

        <ItemsList>
          <Item>
            <IconWrapper color="yellow-dark">
              <ShoppingCart weight="fill" />
            </IconWrapper>
            <p>Compra simples e segura</p>
          </Item>
          <Item>
            <IconWrapper color="gray">
              <Package weight="fill" />
            </IconWrapper>
            <p>Embalagem mantém o café intacto</p>
          </Item>
          <Item>
            <IconWrapper color="yellow">
              <Timer weight="fill" />
            </IconWrapper>
            <p>Entrega rápida e rastreada</p>
          </Item>
          <Item>
            <IconWrapper color="purple">
              <Coffee weight="fill" />
            </IconWrapper>
            <p>O café chega fresquinho até você</p>
          </Item>
        </ItemsList>
      </div>

      <img src={imgCoffeeIntro} alt="" />
    </IntroContainer>
  )
}
