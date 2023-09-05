/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { ReactComponent as GridIcon } from '../../assets/icons/grid.svg'
import { SearchBar } from '../searchBar'
import {
  BtnStyles,
  ControlsBlock,
  HeaderSearchWrapper,
  HeaderStyles,
  LogoStyles,
  Title,
  UserBtn,
} from './styles'

export const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const [text, setText] = useState('')

  const searchTerm = () => searchParams.get('search') || ''

  const doSearch = () => {
    navigate(`/results?search=${text}&page=0`)
  }

  const returnHome = () => navigate('/')

  useEffect(() => {
    setText(searchTerm())
  }, [location])

  return (
    <HeaderStyles>
      {location.pathname.includes('results') ? (
        <HeaderSearchWrapper>
          <LogoStyles
            src={require('../../assets/img/google-logo.png')}
            alt='Google logo'
            onClick={returnHome}
          />
          <SearchBar handleSearch={doSearch} updateSearchTerm={setText} searchTerm={text} />
        </HeaderSearchWrapper>
      ) : (
        <Title>
          <b>Agile Content</b> Frontend test
        </Title>
      )}
      <ControlsBlock>
        <BtnStyles type='button'>
          <GridIcon />
        </BtnStyles>
        <UserBtn />
      </ControlsBlock>
    </HeaderStyles>
  )
}
