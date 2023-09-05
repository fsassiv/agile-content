import styled from 'styled-components'

export const SearchForm = styled.form`
  position: relative;
  width: 100%;
`
export const SearchInput = styled.input`
  border: 1px solid #606163;
  border-radius: 20px;
  padding: 10px 20px 10px 40px;
  width: 100%;
  @media screen and (min-width: 720px) {
    border-radius: 14px;
  }
`

export const BtnStyles = styled.button<{ right?: boolean }>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  svg {
    width: 14px;
    height: 14px;
  }
  ${({ right }) => (right ? 'right: 10px' : 'left: 10px')};
`
