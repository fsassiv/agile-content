import { FC } from 'react'
import { NoResultStyles } from './styles'

export const NoResults: FC<{ term: string }> = ({ term = '' }) => {
  return (
    <NoResultStyles>
      {term ? (
        <p>
          No results found for: &quot;<b>{term}</b>&quot;
        </p>
      ) : null}
      <p>
        Try looking for:
        <b>
          insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird
        </b>
      </p>
    </NoResultStyles>
  )
}
