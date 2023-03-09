export type Movie = {
  id: string
  title: string
  description: string
  coverImage: string
  director: string
  year: number
}

export type IPagination = {
  page: number
  registerPerPage: number
  totalCountRegisters: number
}
