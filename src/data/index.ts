/* eslint-disable @typescript-eslint/ban-ts-comment */
import { faker } from '@faker-js/faker'
import { DataTypes } from './types'
// @ts-ignore
const getImage = () => faker.image.animals(644, 362, true)
// @ts-ignore
const getType = () => faker.animal.type()
// @ts-ignore
const getUrl = () => faker.internet.url()
// @ts-ignore
const getText = () => faker.lorem.sentences()
// @ts-ignore
const getTitle = (type) => faker.animal[type]()

const data: DataTypes[] = [...new Array(100)].map((item, index) => {
  const type = getType()
  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(type),
    description: getText(),
    image: getImage(),
  }
})

const paginatedData = (list: DataTypes[]) => {
  const res = []
  if (!list.length) {
    return []
  }
  for (let i = 0; i < list.length; i += 10) {
    const chunk = list.slice(i, i + 10)
    res.push(chunk)
  }
  return res
}

export const getAnimals = (text: string, page = 0) => {
  const filtered = data.filter((item) => item.title.includes(text) || item.type.includes(text))

  return new Promise<{ data: DataTypes[]; totalPages: number }>(function (resolve) {
    setTimeout(
      () =>
        resolve({
          data: paginatedData(filtered)[page] || [],
          totalPages: paginatedData(filtered).length,
        }),
      1000,
    )
  })
}
