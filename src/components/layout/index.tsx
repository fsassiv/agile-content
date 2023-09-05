import { FC, PropsWithChildren } from 'react'
import { Footer } from '../footer'
import { Header } from '../header'
import { Container } from './styles'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}
