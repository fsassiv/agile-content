import { FC, MouseEvent } from 'react'
import { AnimalDesc, AnimalStyles, AnimalTitle, AnimalUrl } from './styles'
import { AnimalPropTypes } from './types'

export const Animal: FC<AnimalPropTypes> = ({ data, handleClick }) => {
  const onClick = (elem: MouseEvent<HTMLAnchorElement>) => {
    elem.preventDefault()
    handleClick()
  }

  return (
    <AnimalStyles>
      <AnimalUrl href={data.url} onClick={onClick}>
        {data.url}
      </AnimalUrl>
      <AnimalTitle href={data.url} onClick={onClick}>
        {data.title}
      </AnimalTitle>
      <AnimalDesc>{data.description}</AnimalDesc>
    </AnimalStyles>
  )
}
