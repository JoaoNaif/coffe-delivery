import { data } from '../../data/coffe'
import { Coffe } from './components/Coffe'
import { Description } from './components/Description'
import { HomeContainer } from './styles'

export function Home() {
  const coffes = data

  return (
    <HomeContainer>
      <Description />
      <main>
        <h2>Nossos cafés</h2>
        <ul className="container-coffe">
          {coffes.map((coffe) => {
            return <Coffe key={coffe.id} coffe={coffe} />
          })}
        </ul>
      </main>
    </HomeContainer>
  )
}
