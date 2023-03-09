import { Button } from '@/components/Shared/Button'
import { Input } from '@/components/Shared/Input'
import { Content } from './styles'
import { FaSearch } from 'react-icons/fa'
import { ChangeEvent, useState } from 'react'

interface HeaderProps {
  handleSearch: (page: number, title: string) => Promise<void>
}

function Header({ handleSearch }: HeaderProps) {
  const [search, setSearch] = useState<string>('')

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setSearch(target.value)
  }

  return (
    <Content>
      <nav>
        <Input
          value={search}
          placeholder="Search a movie"
          onChange={handleChange}
        />
        <Button onClick={() => handleSearch(0, search)}>
          <FaSearch />
        </Button>
      </nav>
    </Content>
  )
}

export { Header }
