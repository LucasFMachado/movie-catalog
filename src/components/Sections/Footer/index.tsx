import { PageItem } from '@/components/Shared/Pagination/PageItem'
import { PageSpace } from '@/components/Shared/Pagination/PageSpace'
import { IPagination } from '@/pages'
import { Content } from './styles'

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page >= 0)
}

interface IFoorerProps {
  pagination: IPagination
  onPageChange: (page: number) => Promise<void>
}

function Footer({ pagination, onPageChange }: IFoorerProps) {
  const lastPage = Math.floor(
    pagination.totalCountRegisters / pagination.registerPerPage,
  )

  const previousPages =
    pagination.page > 0
      ? generatePagesArray(
          pagination.page - 1 - siblingsCount,
          pagination.page - 1,
        )
      : []

  const nextPages =
    pagination.page < lastPage
      ? generatePagesArray(
          pagination.page,
          Math.min(pagination.page + siblingsCount, lastPage),
        )
      : []

  return (
    <Content>
      {pagination.page > 1 + siblingsCount && (
        <>
          <PageItem onPageChange={onPageChange} page={1} />
          {pagination.page > 2 + siblingsCount && <PageSpace />}
        </>
      )}

      {previousPages.length > 0 &&
        previousPages.map(page => (
          <PageItem key={page} onPageChange={onPageChange} page={page} />
        ))}

      <PageItem onPageChange={onPageChange} page={pagination.page} isCurrent />

      {nextPages.length > 0 &&
        nextPages.map(page => (
          <PageItem key={page} onPageChange={onPageChange} page={page} />
        ))}

      {pagination.page + siblingsCount < lastPage && (
        <>
          {pagination.page + 1 + siblingsCount < lastPage && <PageSpace />}
          <PageItem onPageChange={onPageChange} page={lastPage} />
        </>
      )}
    </Content>
  )
}

export { Footer }
