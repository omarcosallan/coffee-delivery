import { coffees } from '../../../../data/Coffees'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeesList, OurCoffeesContainer } from './style'

export function OurCoffees() {
  return (
    <OurCoffeesContainer>
      <h2>Nossos cafés</h2>
      <CoffeesList>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </CoffeesList>
    </OurCoffeesContainer>
  )
}
