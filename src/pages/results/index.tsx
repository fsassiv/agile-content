/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Animal } from '../../components/animal'
import { AnimalCard } from '../../components/animalCard'
import { NoResults } from '../../components/noResults'
import { getAnimals } from '../../data'
import { DataTypes } from '../../data/types'
import { Container, List } from './styles'

export const Results = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [results, setResults] = useState<DataTypes[]>([])
  const [animal, setAnimal] = useState<DataTypes | null>(null)

  const searchTerm = () => searchParams.get('search') || ''

  const getData = async () => {
    try {
      if (searchTerm()) {
        const { data } = await getAnimals(searchTerm())
        setResults(data)
        return
      }

      setResults([])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [searchParams])

  useEffect(() => {
    setAnimal(null)
  }, [results])

  return (
    <Container>
      {!results.length ? <NoResults term={searchTerm()} /> : null}
      {results.length ? (
        <List>
          {results.map((item) => (
            <Animal key={item.id} handleClick={() => setAnimal(item)} data={item} />
          ))}
        </List>
      ) : null}
      {animal ? <AnimalCard data={animal} handleClose={() => setAnimal(null)} /> : null}
    </Container>
  )
}
