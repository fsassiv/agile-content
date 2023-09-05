import { FC } from 'react'
import { PageBtn, PageItem, PaginationStyles } from './styles'
import { PaginationPropTypes } from './types'

export const Pagination: FC<PaginationPropTypes> = ({ totalPages = 1, handlePageClick }) => {
  return (
    <PaginationStyles>
      {Array.from(Array(totalPages).keys()).map((item) => (
        <PageItem key={item}>
          <PageBtn type='button' onClick={() => handlePageClick(item)}>
            {item + 1}
          </PageBtn>
        </PageItem>
      ))}
    </PaginationStyles>
  )
}
