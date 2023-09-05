import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
  const [searchTerm, setSeatchTerm] = useState('')

  const doSearch = () => {
    navigate(`/results?search=${searchTerm}`)
  }

  const returnHome = () => navigate('/')

  return (
    <HeaderStyles>
      {location.pathname.includes('results') ? (
        <HeaderSearchWrapper>
          <LogoStyles
            src={require('../../assets/img/google-logo.png')}
            alt='Google logo'
            onClick={returnHome}
          />
          <SearchBar
            handleSearch={doSearch}
            updateSearchTerm={setSeatchTerm}
            searchTerm={searchTerm}
          />
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
