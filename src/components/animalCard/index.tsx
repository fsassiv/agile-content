/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import {
  AnimalCardStyles,
  AnimalCardWrapper,
  AnimalDesc,
  AnimalImage,
  AnimalTitle,
  AnimalUrl,
  CloseBtn,
} from './styles'
import { AnimalCardPropTypes } from './types'

export const AnimalCard: FC<AnimalCardPropTypes> = ({ data, handleClose }) => {
  return (
    <AnimalCardWrapper>
      <AnimalCardStyles>
        <CloseBtn type='button' onClick={handleClose}>
          <CloseIcon />
        </CloseBtn>
        <AnimalImage src={data.image} />
        <AnimalUrl href={data.url} target='_blank'>
          {data.url}
        </AnimalUrl>
        <AnimalTitle>{data.title}</AnimalTitle>
        <AnimalDesc>{data.description}</AnimalDesc>
      </AnimalCardStyles>
    </AnimalCardWrapper>
  )
}
