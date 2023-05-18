import Pets from '@mui/icons-material/Pets'
import EmojiNature from '@mui/icons-material/EmojiNature'
import BugReport from '@mui/icons-material/BugReport'
import BedroomBaby from '@mui/icons-material/BedroomBaby'
import { includes } from 'ramda'

export const options = [
  { id: 1, name: 'Cat' },
  { id: 2, name: 'Dog', isDisabled: true },
  { id: 3, name: 'Turtle' },
  { id: 4, name: 'Horse' }
]
export const customOptions = [
  { id: 1, name: 'Cat', icon: Pets, description: 'A cat is the best pet' },
  { id: 2, name: 'Dog', icon: EmojiNature, description: 'A dos is a man best friend' },
  { id: 3, name: 'Turtle', icon: BugReport, description: 'Turtles are slow' },
  { id: 4, name: 'Horse', icon: BedroomBaby , description: 'Horses are elegant.'}
]
export const primitiveOptions = ['first option', 'second option', 'third option']
export const numericOptions = [{ period: 1 }, { period: 2 }, { period: 3 }]

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

const filterResults = (input: any) => options.filter(o => includes(input, o.name))

export const loadFilteredOptions = async (input: any) => {
  await sleep(1e3)
  return new Promise(res => (input ? res(filterResults(input)) : res(options)))
}

export const loadOptions = async () => {
  await sleep(1e3)
  return new Promise(res => res(options))
}

export const getOptionDisabled = (option: { isDisabled: any }) => option.isDisabled
