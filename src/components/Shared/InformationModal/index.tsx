import Modal from 'react-modal'
import { AiOutlineClose } from 'react-icons/ai'
import { Movie } from '@/types/globalTypes'
import { Badge } from '@/components/Shared/Badge'
import { Container } from './styles'

interface InformationModalProps {
  movie: Movie
  isOpen: boolean
  handleCloseModal: () => void
}

export function InformationModal({
  movie,
  isOpen,
  handleCloseModal,
}: InformationModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <AiOutlineClose
        type="button"
        onClick={handleCloseModal}
        className="react-modal-close"
        size={20}
      />
      <Container>
        <p className="title">{movie?.title}</p>
        <img src={movie?.coverImage} alt={movie.title} />
        <div className="details">
          <Badge>
            <b>Director:</b> {movie?.director}
          </Badge>
          <Badge>
            <b>Year:</b> {movie?.year}
          </Badge>
        </div>
        <div>
          <p className="description">{movie?.description}</p>
        </div>
      </Container>
    </Modal>
  )
}
