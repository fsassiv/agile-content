import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchBar } from '../searchBar'
import { LogoStyles, SearchBlockStyles, SearchBtn } from './styles'

export const SearchBlock = () => {
  const navigate = useNavigate()
  const [searchTerm, setSeatchTerm] = useState('')

  const doSearch = () => {
    navigate(`/results?search=${searchTerm}`)
  }

  return (
    <SearchBlockStyles>
      <LogoStyles src={require('../../assets/img/google-logo.png')} alt='Google logo' />
      <SearchBar handleSearch={doSearch} updateSearchTerm={setSeatchTerm} searchTerm={searchTerm} />
      <SearchBtn type='button' onClick={doSearch}>
        Buscar
      </SearchBtn>
    </SearchBlockStyles>
  )
}
