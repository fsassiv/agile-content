import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  max-width: 90vw;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-grow: 2;
`

export const List = styled.ul`
  width: 100%;
  @media screen and (min-width: 720px) {
    width: 70%;
    margin-right: 40px;
  }
`
