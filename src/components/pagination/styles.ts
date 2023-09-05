import styled from 'styled-components'

export const PaginationStyles = styled.ul`
  width: 40%;
  max-width: 90vw;
  display: flex;
  margin: 0px auto 20px;
  justify-content: center;
`
export const PageItem = styled.li`
  display: inline-block;
  &:not(:last-of-type) {
    margin-right: 6px;
  }
`

export const PageBtn = styled.button`
  background-color: transparent;
  border: 1px solid #c4c4c4;
  border-radius: 2px;
  padding: 4px 6px;
  cursor: pointer;
`
