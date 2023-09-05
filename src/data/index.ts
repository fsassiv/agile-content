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

export const getAnimals = (text: string) => {
  const filtered = data.filter((item) => item.title.includes(text) || item.type.includes(text))

  return new Promise<{ data: DataTypes[] }>(function (resolve) {
    setTimeout(() => resolve({ data: filtered }), 1000)
  })
}
