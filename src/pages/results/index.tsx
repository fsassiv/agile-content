/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Animal } from '../../components/animal'
import { AnimalCard } from '../../components/animalCard'
import { NoResults } from '../../components/noResults'
import { Pagination } from '../../components/pagination'
import { getAnimals } from '../../data'
import { DataTypes } from '../../data/types'
import { Container, List } from './styles'

export const Results = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [results, setResults] = useState<DataTypes[]>([])
  const [animal, setAnimal] = useState<DataTypes | null>(null)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const searchTerm = () => searchParams.get('search') || ''
  const page = () => Number(searchParams?.get('page'))

  const getData = async () => {
    try {
      setIsLoading(true)
      if (searchTerm()) {
        const { data, totalPages } = await getAnimals(searchTerm(), page())
        console.log({ data, totalPages })
        setTotalPages(totalPages)
        setResults(data)
        return
      }
      setTotalPages(1)
      setResults([])
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  const handlePageClick = (pageNumber: number) => {
    navigate(`/results?search=${searchTerm()}&page=${pageNumber}`)
  }

  useEffect(() => {
    getData()
  }, [searchParams])

  useEffect(() => {
    setAnimal(null)
  }, [results])

  return (
    <>
      <Container>
        {!results.length && !isLoading ? <NoResults term={searchTerm()} /> : null}
        {results.length ? (
          <List>
            {results.map((item) => (
              <Animal key={item.id} handleClick={() => setAnimal(item)} data={item} />
            ))}
          </List>
        ) : null}
        {animal ? <AnimalCard data={animal} handleClose={() => setAnimal(null)} /> : null}
      </Container>
      {results.length ? (
        <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />
      ) : null}
    </>
  )
}
