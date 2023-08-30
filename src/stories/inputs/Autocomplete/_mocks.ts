import Pets from '@mui/icons-material/Pets'
import EmojiNature from '@mui/icons-material/EmojiNature'
import BugReport from '@mui/icons-material/BugReport'
import BedroomBaby from '@mui/icons-material/BedroomBaby'
import { includes, take, drop } from 'ramda'
import { LoadOptionsPaginated } from '../../../components'

export const options = [
  { id: 1, name: 'Cat' },
  { id: 2, name: 'Dog', isDisabled: true },
  { id: 3, name: 'Turtle' },
  { id: 4, name: 'Horse' }
]
export const optionsLong = [
  { id: 1, name: 'Cat' },
  { id: 2, name: 'Dog' },
  { id: 3, name: 'Turtle' },
  { id: 4, name: 'Horse' },
  { id: 5, name: 'Tiger' },
  { id: 6, name: 'Wolf' },
  { id: 7, name: 'Tortoise' },
  { id: 8, name: 'Zebra' },
  { id: 9, name: 'Lion' },
  { id: 10, name: 'Coyote' },
  { id: 11, name: 'Iguana' },
  { id: 12, name: 'Donkey' },
  { id: 13, name: 'Jaguar' },
  { id: 14, name: 'Dingo' },
  { id: 15, name: 'Gecko' },
  { id: 16, name: 'Mule' },
  { id: 17, name: 'Panther' },
  { id: 18, name: 'Fox' },
  { id: 19, name: 'Snake' },
  { id: 20, name: 'Pony' },
  { id: 21, name: 'Cat 2' },
  { id: 22, name: 'Dog 2' },
  { id: 23, name: 'Turtle 2' },
  { id: 24, name: 'Horse 2' },
  { id: 25, name: 'Tiger 2' },
  { id: 26, name: 'Wolf 2' },
  { id: 27, name: 'Tortoise 2' },
  { id: 28, name: 'Zebra 2' },
  { id: 29, name: 'Lion 2' },
  { id: 30, name: 'Coyote 2' },
  { id: 31, name: 'Iguana 2' },
  { id: 32, name: 'Donkey 2' },
  { id: 33, name: 'Jaguar 2' },
  { id: 34, name: 'Dingo 2' },
  { id: 35, name: 'Gecko 2' },
  { id: 36, name: 'Mule 2' },
  { id: 37, name: 'Panther 2' },
  { id: 38, name: 'Fox 2' },
  { id: 39, name: 'Snake 2' },
  { id: 40, name: 'Pony 2' }
]
export const customOptions = [
  { id: 1, name: 'Cat', icon: Pets, description: 'A cat is the best pet' },
  { id: 2, name: 'Dog', icon: EmojiNature, description: 'A dos is a man best friend' },
  { id: 3, name: 'Turtle', icon: BugReport, description: 'Turtles are slow' },
  { id: 4, name: 'Horse', icon: BedroomBaby, description: 'Horses are elegant.' }
]
export const primitiveOptions = ['first option', 'second option', 'third option']
export const numericOptions = [{ period: 1 }, { period: 2 }, { period: 3 }]

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

let prevInput: string = undefined
export const loadFilteredOptionsPaginated: LoadOptionsPaginated = async (
  input: string,
  _: ReadonlyArray<any>,
  additional?: any
) => {
  await sleep(1e3)
  const currentPage = prevInput !== input ? 0 : additional?.page ?? 0
  const filteredOptions = input ? optionsLong.filter(o => includes(input, o.name)) : optionsLong
  const paginatedOptions = take(15, drop(currentPage * 15, filteredOptions))
  prevInput = input
  return new Promise(res =>
    res({
      loadedOptions: paginatedOptions,
      more: paginatedOptions.length === 15,
      additional: { page: prevInput !== input ? 0 : currentPage + 1 }
    })
  )
}

export const loadOptions = async () => {
  await sleep(1e3)
  return new Promise(res => res(options))
}

export const getOptionDisabled = (option: { isDisabled: any }) => option.isDisabled
