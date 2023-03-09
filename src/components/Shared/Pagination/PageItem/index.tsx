import { Button } from '../../Button'

interface PageItemProps {
  page: number
  onPageChange: (page: number) => Promise<void>
  isCurrent?: boolean
}

function PageItem({ page, onPageChange, isCurrent }: PageItemProps) {
  return (
    <Button onClick={() => onPageChange(page)} disabled={isCurrent}>
      {page}
    </Button>
  )
}

export { PageItem }
