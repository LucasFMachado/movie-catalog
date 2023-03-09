import { Card } from '@/components/Shared/Card'
import { Movie } from '@/types/globalTypes'
import { Content } from './styles'

interface ICatalogProps {
  movies: Movie[]
}

function Catalog({ movies }: ICatalogProps) {
  return (
    <Content>
      {movies?.map(movie => (
        <Card key={movie.id} movie={movie} />
      ))}
    </Content>
  )
}

export { Catalog }
