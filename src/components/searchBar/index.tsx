import { FC, FormEvent } from 'react'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { BtnStyles, SearchForm, SearchInput } from './styles'
import { SearchBarPropTypes } from './types'

export const SearchBar: FC<SearchBarPropTypes> = ({
  handleSearch,
  updateSearchTerm,
  searchTerm,
}) => {
  const onSubmit = (elem: FormEvent<HTMLFormElement>) => {
    elem.preventDefault()
    handleSearch()
  }
  return (
    <SearchForm onSubmit={onSubmit}>
      <BtnStyles type='button' onClick={handleSearch}>
        <SearchIcon />
      </BtnStyles>
      <SearchInput onChange={({ target }) => updateSearchTerm(target.value)} value={searchTerm} />
      <BtnStyles onClick={() => updateSearchTerm('')} type='button' right>
        <CloseIcon />
      </BtnStyles>
    </SearchForm>
  )
}
