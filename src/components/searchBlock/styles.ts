import styled from 'styled-components'

export const SearchBlockStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 90vw;
  @media screen and (min-width: 720px) {
    width: 50%;
  }
`

export const SearchBtn = styled.button`
  margin-top: 20px;
  border: none;
  border-radius: 4px;
  background-color: #f2f2f2;
  color: black;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  transition: all linear 0.25s;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &:active {
    background-color: #606163;
  }
`

export const LogoStyles = styled.img`
  max-width: 100%;
  width: auto;
  height: 100px;
  margin-bottom: 20px;
  object-fit: contain;
`
