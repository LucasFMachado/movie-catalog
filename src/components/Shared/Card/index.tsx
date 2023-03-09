import { useState } from 'react'
import { InformationModal } from '@/components/Shared/InformationModal'
import { Movie } from '@/types/globalTypes'
import { Badge } from '../Badge'
import { FaSearch } from 'react-icons/fa'
import { Content } from './styles'

interface CardProps {
  movie: Movie
}

function Card({ movie }: CardProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Content>
        <img src={movie?.coverImage} alt={movie.title} />
        <div>
          <p className="title">{movie?.title}</p>
          <div className="details">
            <Badge>
              <b>Director:</b> {movie?.director}
            </Badge>
            <Badge>
              <b>Year:</b> {movie?.year}
            </Badge>
          </div>
          <button onClick={() => setModalOpen(true)}>
            <span>More..</span>
            <FaSearch />
          </button>
        </div>
      </Content>

      <InformationModal
        isOpen={modalOpen}
        handleCloseModal={() => setModalOpen(false)}
        movie={movie}
      />
    </>
  )
}

export { Card }
