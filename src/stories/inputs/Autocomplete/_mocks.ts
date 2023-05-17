import { includes } from 'ramda'

export const options = [
  { id: 1, name: 'Cat' },
  { id: 2, name: 'Dog', isDisabled: true },
  { id: 3, name: 'Turtle' },
  { id: 4, name: 'Horse' }
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
