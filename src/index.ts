import {
  IndexedRomajiDictionary,
  RomajiDictionaryItem,
  indexedRomajiDictionary,
} from './romaji-dictionary'

export {
  IndexedRomajiDictionary,
  RomajiDictionary,
  RomajiDictionaryItem,
  indexedRomajiDictionary,
  romajiDictionary,
} from './romaji-dictionary'

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
 */
const escapeRegExp = (str: string): string => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const convertToRegExp = (str: string, indexedDictionary: IndexedRomajiDictionary = indexedRomajiDictionary): string => {
  const createRomajiPattern = (romajiDictionaryItem: RomajiDictionaryItem): string =>
    `(?:${romajiDictionaryItem.map(escapeRegExp).join('|')})`
  let pointer = 0
  let result = ''
  let firstCharacter: string | undefined = undefined
  while (firstCharacter = str[pointer]) {
    if (firstCharacter === undefined) {
      break
    }
    let phrase = firstCharacter
    if (str[pointer + 1]) {
      phrase += str[pointer + 1]
    }
    if (str[pointer + 2]) {
      phrase += str[pointer + 2]
    }
    let replaced = false
    for (let phraseLength = 3; phraseLength >= 1; phraseLength--) {
      const replacement = indexedDictionary[phrase.slice(0, phraseLength)]
      if (replacement) {
        result += createRomajiPattern(replacement)
        pointer += phraseLength
        replaced = true
        break
      }
    }
    if (replaced) {
      continue
    }
    result += escapeRegExp(firstCharacter)
    pointer++
  }
  return result
}
