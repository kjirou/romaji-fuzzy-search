import {
  convertHiraganaToKatakana,
  indexedRomajiDictionary,
  romajiDictionary,
} from './romaji-dictionary'

describe('convertHiraganaToKatakana', () => {
  const table: {
    args: Parameters<typeof convertHiraganaToKatakana>,
    expected: ReturnType<typeof convertHiraganaToKatakana>,
    name: string,
  }[] = [
    {
      name: 'it works',
      args: ['ぁゔゝゞ'],
      expected: 'ァヴヽヾ',
    },
  ]
  test.each(table)('$name', ({args, expected}) => {
    expect(convertHiraganaToKatakana(...args)).toBe(expected)
  })
  test('it throws an error when it receives any non-target characters', () => {
    expect(() => {
      convertHiraganaToKatakana('a')
    }).toThrowError(/ convert the code point /)
  })
})
describe('romajiDictionary', () => {
  test('it does not have any duplicated romaji', () => {
    expect(romajiDictionary).toHaveLength(Object.keys(indexedRomajiDictionary).length)
  })
})
