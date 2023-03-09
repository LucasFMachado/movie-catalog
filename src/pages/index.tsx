import { Catalog } from '@/components/Sections/Catalog'
import { Footer } from '@/components/Sections/Footer'
import { Header } from '@/components/Sections/Header'
import { api } from '@/services/api'
import { Movie } from '@/types/globalTypes'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Wrapper } from './styles'

export type IPagination = {
  page: number
  registerPerPage: number
  totalCountRegisters: number
}

export default function Home() {
  // const [modalOpen, setModalOpen] = useState(false)
  const [movies, setMovies] = useState<Movie[]>([])
  const [pagination, setPagination] = useState<IPagination>({
    page: 0,
    registerPerPage: 20,
    totalCountRegisters: 0,
  })

  async function getMovies(page = 0, title = '') {
    let filter = ''
    if (title) {
      filter = `&title=${title}`
    }

    const { data, headers } = await api.get(
      `/movies?&_limit=${pagination.registerPerPage}&_page=${page}${filter}`,
    )
    setPagination({
      ...pagination,
      page,
      totalCountRegisters: Number(headers['x-total-count']),
    })
    setMovies(data)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Wrapper>
      <Header handleSearch={getMovies} />
      <Catalog movies={movies} />
      <Footer pagination={pagination} onPageChange={getMovies} />
    </Wrapper>
  )
}
