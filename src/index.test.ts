import {
  convertToRegExp,
} from './index'

describe('convertToRegExp', () => {
  const table: {
    args: Parameters<typeof convertToRegExp>,
    expected: ReturnType<typeof convertToRegExp>,
    name: string,
  }[] = [
    {
      name: 'it replaces one romaji',
      args: ['a'],
      expected: '(?:a|あ|ア)',
    },
    {
      name: 'it replaces two romaji',
      args: ['ka'],
      expected: '(?:ka|か|カ)',
    },
    {
      name: 'it replaces three romaji',
      args: ['kya'],
      expected: '(?:kya|きゃ|キャ)',
    },
    {
      name: 'it does not replace a character that is not a romaji',
      args: ['k'],
      expected: 'k',
    },
    {
      name: 'it escapes characters of regexp pattern',
      args: ['.*+?^${}()|[]\\'],
      expected: '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\',
    },
    {
      name: 'it gives priority to long phrases',
      args: ['kyayaay'],
      expected: '(?:kya|きゃ|キャ)(?:ya|や|ヤ)(?:a|あ|ア)y',
    },
  ]
  test.each(table)('$name', ({args, expected}) => {
    expect(convertToRegExp(...args)).toBe(expected)
  })
})
