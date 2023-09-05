import styled from 'styled-components'

export const AnimalCardWrapper = styled.div`
  @media screen and (max-width: 719px) {
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(196, 196, 196, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const AnimalCardStyles = styled.div`
  position: relative;
  padding: 14px;
  background-color: white;
  width: 400px;
  max-width: 90%;
  border-radius: 4px;
  @media screen and (min-width: 720px) {
    border: 1px solid #c4c4c4;
  }
`

export const AnimalImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
`
export const AnimalTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 12px;
`
export const AnimalUrl = styled.a`
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 14px;
`
export const AnimalDesc = styled.p`
  font-size: 16px;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  z-index: 1;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 720px) {
    display: none;
  }
`
